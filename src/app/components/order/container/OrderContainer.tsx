'use client';

import { useEffect, useState } from 'react';
import Input from '../../common/Input';
import { SearchIcon } from '@/app/ui/iconPath';
import { BUTTON_TEXT, DIALOG_TEXT, ORDER_TEXT } from '../../../constants/order';
import Icons from '../../common/Icons';
import { Dialog } from '../../common/Dialog';
import { callDelete, callGet, callPost } from '@/app/utils/callApi';
import { useRouter } from 'next/navigation';
import { usePastOrder } from '@/app/hooks/usePastOrder';
import ProductList from '../ProductList';
import QuotationModal from '../quotation/OrderQuotationModal';
import { useUser } from '@/app/hooks/useUser';
import Button from '../../common/Button';
import { formatDate } from '@/app/utils/date';

export default function OrderContainer() {
  const router = useRouter();
  const { user } = useUser(); // 커스텀 훅에서 user 가져오기
  const { pastOrder, getPastOrder } = usePastOrder(); // 커스텀 훅에서 즐겨찾기 가져오기
  const [orderState, setOrderState] = useState<OrderState>({
    bookmark: false,
    showBookmark: false,
    search: '',
    bookmarkName: '',
    showQuot: false,
    currentDate: '',
  });

  const [searchResults, setSearchResults] = useState<ProductItemProps[]>([]); // 검색 결과
  const [addedItems, setAddedItems] = useState<ProductItemProps[]>([]); // 추가한 상품
  const [quotationId, setQuotationId] = useState<string | null>(null);
  const [dialogState, setDialogState] = useState({
    open: false,
    topText: '',
    BtnText: '',
    onBtnClick: () => {},
  });

  // 견적서 생성
  const createQuotations = async () => {
    try {
      const body = {
        client_id: user?.result.client_id,
        created_at: orderState.currentDate,
        status: 'CREATED',
      };
      const response = await callPost('/api/order/quotations', body);
      // if (response.code === '4003') {
      //   setDialogState(() => ({
      //     open: true,
      //     topText: DIALOG_TEXT[0],
      //     BtnText: BUTTON_TEXT[0],
      //     onBtnClick: () => {
      //       setOrderState((prev) => ({ ...prev, open: false }));
      //       router.push('/quotation');
      //     },
      //   }));
      // }
      if (response.isSuccess && response.result) {
        return response.result.id;
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  // 오늘 날짜 불러오기
  useEffect(() => {
    const now = new Date();
    const formattedDate = formatDate(now.toISOString());
    setOrderState((prev) => ({ ...prev, currentDate: formattedDate }));
  }, []);

  useEffect(() => {
    // 4005 상태 시 거래처 생성으로 이동
    if (user && !user.isSuccess && user.code === '4005') {
      setDialogState(() => ({
        open: true,
        topText: DIALOG_TEXT[3],
        BtnText: BUTTON_TEXT[0],
        onBtnClick: () => {
          setOrderState((prev) => ({ ...prev, open: false }));
          router.push('/sign-in/client');
        },
      }));
    }
  }, [user]);

  useEffect(() => {
    const completeQuotation = async () => {
      if (orderState.currentDate && user?.result.client_id) {
        try {
          const id = await createQuotations();
          if (id) {
            setQuotationId(id); // id 설정
          }
        } catch (error) {
          console.error('견적서 생성 중 오류 발생 : ', error);
        }
      }
    };
    completeQuotation();
  }, [orderState.currentDate, user?.result.client_id]);

  // 즐겨 찾기에서 불러온 상품을 추가한 상품에 저장
  const setPastOrderId = async (past_order_id: string) => {
    try {
      const data = await callGet(`/api/order/get-past-order/${past_order_id}`);
      if (data.isSuccess) {
        const productList = data.result.product_list.map(
          (product: QuotationItemType) => ({
            id: product.id,
            category: product.category,
            name: product.name,
            unit: product.unit,
            price: product.price,
          }),
        );
        setSearchResults(productList);
        setOrderState((prev) => ({ ...prev, showBookmark: false }));
      }
    } catch (error) {
      console.error('클라이언트 에러', error);
    }
  };

  // 최근 구매한 물품 리스트 조회
  const setRecentProducts = async () => {
    try {
      const data = await callGet(`/api/order/search/recent`);
      if (data.isSuccess) {
        const productList = data.result.product_list.map(
          (product: QuotationItemType) => ({
            id: product.id,
            category: product.category,
            name: product.name,
            unit: product.unit,
            price: product.price,
          }),
        );
        setSearchResults(productList);
      }
    } catch (error) {
      console.error('클라이언트 에러', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof OrderState,
  ) => {
    const { value } = e.target;
    setOrderState((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  // 검색
  const handleSearch = async () => {
    try {
      const inputSearch = orderState.search
        ? encodeURIComponent(orderState.search)
        : '""';
      const data = await callGet(
        `/api/order/search`,
        `name_prefix=${inputSearch}&limit=100`,
      );
      setSearchResults(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  // 즐겨찾기 추가
  const handleAddBookMark = async () => {
    if (!orderState.bookmarkName) {
      alert(DIALOG_TEXT[2]);
      return;
    }
    try {
      const body = {
        client_id: user?.result.client_id,
        name: orderState.bookmarkName,
        product_ids: addedItems.map((item) => item.id),
      };

      await callPost('/api/order/post-past-order', body);

      await getPastOrder();
      setOrderState((prev) => ({ ...prev, bookmark: false, bookmarkName: '' }));
    } catch (error) {
      console.error(error);
    }
  };

  // 상품 추가
  const handleAddItem = async (item: ProductItemProps) => {
    try {
      const body = {
        quotation_id: quotationId,
        product_id: item.id,
        quantity: item.count,
      };
      await callPost('/api/order/quotations/products', [body]);
      // 상품을 추가한 후 addedItems 상태 업데이트
      setAddedItems((prevItems) => [...prevItems, item]);
    } catch (error) {
      console.error(error);
    }
  };

  // 상품 삭제
  const handleRemoveItem = async (product_id: string | number) => {
    await callDelete(
      `/api/order/quotations/${quotationId}/${product_id}/delete`,
    );
    // 상품 삭제 후 addedItems 상태 업데이트
    setAddedItems((prevItems) =>
      prevItems.filter((item) => item.id !== product_id),
    );
  };

  const handleCountChange = (id: string | number, count: string) => {
    setAddedItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, count } : item)),
    );
  };
  return (
    <section className="flex-center flex-col w-full px-0 py-[100px] gap-[10px] self-stretch">
      <div className="flex flex-col mx-auto items-end gap-3 self-stretch w-[960px]">
        <div className="flex flex-col items-start gap-8 self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex justify-between items-start self-stretch">
              <div className="relative flex h-9 items-center gap-3">
                <Button
                  className="order-btn border-[1px] border-gray-1 bg-white font-medium"
                  type="default"
                  onClickHandler={() => {
                    setOrderState((prev) => ({
                      ...prev,
                      showBookmark: !prev.showBookmark,
                    }));
                  }}
                  buttonText={ORDER_TEXT[0]}
                />
                <Button
                  className="order-btn bg-primary-3 font-medium text-white"
                  type="default"
                  onClickHandler={setRecentProducts}
                  buttonText={ORDER_TEXT[10]}
                />
                {orderState.showBookmark && (
                  <div className="absolute top-9 flex flex-col bg-white rounded-[4px]">
                    {pastOrder.map((order) => (
                      <Button
                        key={order.past_order_id}
                        type="default"
                        className="px-4 py-2 first:rounded-t-[4px] last:rounded-b-[4px] border-b border-gray-2 cursor-pointer border-t-[1px] border-[1px]"
                        onClickHandler={() =>
                          setPastOrderId(order.past_order_id.toString())
                        }
                        buttonText={order.name}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* 검색창 */}
              <div className="flex items-center justify-between px-6 w-[513px] bg-white border-[1px] border-gray-1 rounded-[4px] focus-within:border-gray-7 focus-within:border-[1px]">
                <Input
                  textValue={orderState.search}
                  type="search"
                  onChange={(e) => handleInputChange(e, 'search')}
                  placeholder={ORDER_TEXT[1]}
                  onEnterPress={handleSearch}
                />
                <Icons onClick={handleSearch} name={SearchIcon} />
              </div>
            </div>
            <ProductList
              items={searchResults}
              isSearchResult
              addedItems={addedItems}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onCountChange={handleCountChange}
            />
          </div>

          <ProductList
            items={addedItems}
            isSearchResult={false}
            onRemoveItem={handleRemoveItem}
          />
        </div>

        <div className="flex items-center gap-6">
          <Button
            onClickHandler={() => {
              setOrderState((prev) => ({ ...prev, bookmark: true }));
            }}
            type="default"
            className="order-btn border-[1px] py-3 px-6 border-gray-1 bg-white"
            buttonText={ORDER_TEXT[7]}
          />

          <Button
            onClickHandler={() => {
              setOrderState((prev) => ({ ...prev, showQuot: true }));
            }}
            type="default"
            className="order-btn py-3 px-6 text-white bg-primary-3"
            buttonText={ORDER_TEXT[4]}
          />
        </div>
      </div>
      {dialogState.open && (
        <Dialog
          topText={dialogState.topText}
          BtnText={dialogState.BtnText}
          onBtnClick={dialogState.onBtnClick}
        />
      )}

      {orderState.bookmark && (
        <Dialog
          isTwoButton
          topText={DIALOG_TEXT[4]}
          subText={DIALOG_TEXT[5]}
          BtnText={BUTTON_TEXT[1]}
          onSubBtnClick={() => {
            setOrderState((prev) => ({
              ...prev,
              bookmark: false,
              bookmarkName: '',
            })); // 다이얼로그를 닫을 때 입력값 초기화
          }}
          onBtnClick={handleAddBookMark}
          hasInput
          value={orderState.bookmarkName}
          onChange={(e) =>
            setOrderState((prev) => ({
              ...prev,
              bookmarkName: e.target.value.slice(0, 10), // 10자 제한
            }))
          }
        />
      )}

      {orderState.showQuot && (
        <QuotationModal
          QuotationModalData={addedItems}
          closeModal={() => {
            setOrderState((prev) => ({ ...prev, showQuot: false }));
          }}
          quotationId={quotationId}
          currentDate={orderState.currentDate}
        />
      )}
    </section>
  );
}

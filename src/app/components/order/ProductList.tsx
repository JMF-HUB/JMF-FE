import React from 'react';
import ProductItem from './ProductItem';
import {
  PRODUCT_TEXT,
  ORDER_TEXT,
  categoryMapping,
} from '../../constants/order';
import { useResponsiveHeight } from '@/app/hooks/useResponsiveHeight';

export default function ProductList({
  items,
  isSearchResult,
  addedItems,
  onAddItem,
  onRemoveItem,
  onCountChange,
  isNew,
}: ProductListProps) {
  // 세로 크기가 765px 이하일 때 h-[250px], 그 이상일 때 h-[350px] 사용
  const heightClass = useResponsiveHeight(845, 'h-[250px]', 'h-[350px]');

  return (
    <div
      className={`flex w-full flex-col ${heightClass} items-start self-stretch border-[1px] border-gray-1 bg-white`}
    >
      {isSearchResult ? (
        <div className="flex items-center self-stretch whitespace-nowrap bg-primary-3 text-white font-bold">
          <div className="flex-center w-[89px] py-2 px-3">
            {PRODUCT_TEXT[0]}
          </div>
          <div className="flex items-center w-[119px] py-2 px-3">
            {PRODUCT_TEXT[1]}
          </div>
          <div className="flex items-center justify-start w-[416px] py-2 px-3">
            {PRODUCT_TEXT[2]}
          </div>
          <div className="flex-center w-[110px] py-2 px-3">
            {PRODUCT_TEXT[3]}
          </div>
          <div className="flex-center w-[110px] py-2 px-3">
            {PRODUCT_TEXT[4]}
          </div>
          <div className="flex-center w-[121px] py-2 px-3 mr-3 ">
            {PRODUCT_TEXT[5]}
          </div>
        </div>
      ) : (
        <div className="flex px-6 py-2 items-center self-stretch bg-primary-3 text-white font-bold">
          {ORDER_TEXT[3]}
        </div>
      )}

      <div className="flex flex-col h-full self-stretch whitespace-nowrap overflow-scroll overflow-x-hidden">
        {(isSearchResult && items.length === 0) ||
        (!isSearchResult && items.length === 0) ? (
          <div className="flex-center h-full text-center font-medium">
            {isSearchResult ? (
              <div>
                <p>{ORDER_TEXT[8]}</p>
                <p>{ORDER_TEXT[2]}</p>
              </div>
            ) : (
              <p>{ORDER_TEXT[9]}</p>
            )}
          </div>
        ) : null}
        {items.map((item) => (
          <ProductItem
            key={item.id}
            category={
              isSearchResult ? categoryMapping[item.category] : item.category
            }
            id={item.id}
            name={item.name}
            isAdded={
              isSearchResult
                ? !!addedItems?.find((addedItem) => addedItem.id === item.id)
                : true
            }
            unit={item.unit}
            count={!isSearchResult ? item.count || '1' : undefined}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
            onCountChange={onCountChange}
            isSearchResult={isSearchResult}
            isNew={isNew}
          />
        ))}
      </div>
    </div>
  );
}

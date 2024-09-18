'use client';

import {
  ALERT_TEXT,
  BTN_TEXT,
  DIALOG_TEXT,
  INPUT_TEXT,
  REGION_TEXT,
  TABLE_TEXT,
} from '@/app/constants/admin';
import Button from '../../common/Button';
import React, { useState } from 'react';
import { callDelete, callGet, callPatch } from '@/app/utils/callApi';
import InquiryPastOrder from './InquiryPastOrder';
import Input from '../../common/Input';
import { Dialog } from '../../common/Dialog';

export default function ClientsRegion() {
  const [inputComment, setInputComment] = useState('');
  const [showPastOrder, setShowPastOrder] = useState<number | null>(null);
  const [isEditRegion, setIsEditRegion] = useState<number | null>(null);
  const [region, setRegion] = useState('');
  const [result, setResult] = useState<{ items: ClientsNameProps[] }>({
    items: [],
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false); // 다이얼로그 상태 추가
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null); // 삭제할 client_id 상태 추가

  const handleGetClients = async () => {
    if (!region) {
      alert(ALERT_TEXT[3]);
      return;
    }
    try {
      const data = await callGet(
        `/api/admin/clients/region`,
        `region=${region}`,
      );
      setResult({ items: data.result });
    } catch (error) {
      console.error(error);
      setResult({ items: [] });
    }
  };

  // 지역 선택 및 저장
  const handlePatchRegion = async (client_id: number) => {
    try {
      await callPatch(
        `/api/admin/clients/${client_id}/region`,
        `region=${region}`,
      );
      alert(ALERT_TEXT[1]);
      setIsEditRegion(null);
      await handleGetClients();
    } catch (error) {
      console.error(error);
    }
  };

  // 특이사항 작성
  const handleSetComment = async (client_id: number) => {
    if (!inputComment) {
      alert(ALERT_TEXT[0]);
      return;
    }
    try {
      await callPatch(
        `/api/admin/clients/${client_id}/comment`,
        `input_comment=${inputComment}`,
      );
      alert(ALERT_TEXT[2]);
    } catch (error) {
      console.error(error);
    }
  };

  // 거래처 삭제
  const handleDelete = async () => {
    if (selectedClientId === null) return;
    try {
      await callDelete(`/api/admin/clients/${selectedClientId}/delete`);
      alert(ALERT_TEXT[3]);

      await handleGetClients();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDialogOpen(false); // 다이얼로그 닫기
    }
  };

  const renderTable = () => {
    return (
      <div className="w-full">
        <div className="flex bg-primary-1 w-full p-2 text-white font-bold">
          <div className="w-[5%] border-r px-2">{TABLE_TEXT[0]}</div>
          <div className="w-[15%] border-r px-2">{TABLE_TEXT[1]}</div>
          <div className="w-[15%] border-r px-2">{TABLE_TEXT[6]}</div>
          <div className="w-[25%] border-r px-2">{TABLE_TEXT[7]}</div>
          <div className="w-[10%] text-center border-r px-2">
            {TABLE_TEXT[11]}
          </div>
          <div className="w-[25%] border-r px-2">{TABLE_TEXT[12]}</div>
          <div className="w-[5%] text-center">{BTN_TEXT[1]}</div>
        </div>
        {result?.items?.map((item: ClientsNameProps) => (
          <React.Fragment key={item.id}>
            <div className="flex p-2 border-2">
              <div className="w-[5%] border-r px-2">{item.id}</div>
              <div className="w-[15%] border-r px-2">{item.name}</div>
              <div className="w-[15%] border-r px-2">
                {isEditRegion === item.id ? (
                  <div className="flex items-center">
                    <select
                      className="border-2"
                      onChange={(e) => setRegion(e.target.value)}
                      value={region}
                    >
                      {REGION_TEXT.map((text) => (
                        <option key={text} value={text}>
                          {text}
                        </option>
                      ))}
                    </select>
                    <Button
                      onClickHandler={() => handlePatchRegion(item.id)}
                      className="ml-2 admin-btn"
                      type="default"
                      buttonText={BTN_TEXT[6]}
                      isDisabled={region === REGION_TEXT[0]}
                    />
                  </div>
                ) : (
                  <>
                    {item.region}
                    <Button
                      onClickHandler={() => {
                        setIsEditRegion(item.id);
                        setRegion(item.region);
                      }}
                      className="px-2 ml-4 admin-btn"
                      type="default"
                      buttonText={REGION_TEXT[0]}
                    />
                  </>
                )}
              </div>
              <div className="w-[25%] border-r px-2">{item.address}</div>
              <div className="w-[10%] flex justify-center border-r">
                <Button
                  type="default"
                  onClickHandler={() =>
                    setShowPastOrder((prev) =>
                      prev === item.id ? null : item.id,
                    )
                  }
                  className="admin-btn"
                  buttonText={BTN_TEXT[8]}
                />
              </div>
              <div className="w-[25%] flex justify-between pr-6 border-r-4">
                <Input
                  className="border-2 max-h-10 mr-2 px-2"
                  type="default"
                  onChange={(e) => setInputComment(e.target.value)}
                  textValue={inputComment}
                  placeholder={INPUT_TEXT[2]}
                />
                <Button
                  className="ml-4 admin-btn"
                  buttonText={BTN_TEXT[0]}
                  type="default"
                  onClickHandler={() => handleSetComment(item.id)}
                />
              </div>
              <div className="w-[5%] flex justify-center">
                <Button
                  type="default"
                  onClickHandler={() => {
                    setIsDialogOpen(true); // 다이얼로그 열기
                    setSelectedClientId(item.id); // 선택한 client_id 설정
                  }}
                  className="bg-red-1 admin-btn"
                  buttonText={BTN_TEXT[1]}
                />
              </div>
            </div>
            {showPastOrder === item.id && (
              <InquiryPastOrder clientId={item.id} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 border-2 p-8">
      <div className="flex w-full gap-12">
        <select
          className="border-2 px-2"
          onChange={(e) => setRegion(e.target.value)}
          value={region}
        >
          {REGION_TEXT.map((text) => (
            <option key={text} value={text}>
              {text}
            </option>
          ))}
        </select>

        <Button
          className="admin-btn"
          buttonText={BTN_TEXT[4]}
          type="default"
          onClickHandler={handleGetClients}
          isDisabled={region === REGION_TEXT[0]}
        />
      </div>
      <div className="w-full">{renderTable()}</div>

      {/* 다이얼로그 추가 */}
      {isDialogOpen && (
        <Dialog
          topText={DIALOG_TEXT[2]}
          BtnText={BTN_TEXT[1]}
          onBtnClick={handleDelete} // 삭제 처리 함수
          onSubBtnClick={() => setIsDialogOpen(false)} // 다이얼로그 취소
          isWarn
          isTwoButton
        />
      )}
    </div>
  );
}

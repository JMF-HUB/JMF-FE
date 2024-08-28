'use client';

import { QUOTATION_MANAGE } from '@/app/constants/quotation';
import { useModal } from '@/app/hooks/useModal';
import { callDelete } from '@/app/utils/callApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../common/Button';
import DeletePastorderModal from './modal/DeletePastorderModal';
import PastOrderDetail from './PastOrderDetail';

interface PastOrderTableInfoProps {
  pastorder: PastOrder;
  index: number;
}

const PastOrderTableInfo = ({ pastorder, index }: PastOrderTableInfoProps) => {
  const router = useRouter();
  const { isOpen, openModal, closeModal } = useModal(false);
  const [controlType, setControlType] = useState(false);

  const deletePastOrder = (id: number) => {
    callDelete(`/api/past-order/delete?pastorder_id=${id}`);
    window.location.reload();
  };

  return (
    <div key={pastorder.past_order_id}>
      {isOpen && (
        <DeletePastorderModal
          closeModal={closeModal}
          deletePastorder={() => deletePastOrder(pastorder.past_order_id)}
        />
      )}
      <div className="w-full justify-start items-center inline-flex h-[53px] text-base font-normal border-b border-b-[#E0E0E0]">
        <div className="w-[9.5%] text-center">{index + 1}</div>
        <div className="w-[65.5%] pl-3">{pastorder.name}</div>
        <div className="flex gap-x-[10%] px-[5%] flex-grow">
          <Button
            buttonText={controlType ? QUOTATION_MANAGE[3] : QUOTATION_MANAGE[0]}
            type="quoteTableControl"
            onClickHandler={() => setControlType(!controlType)}
            className="border border-[#e0e0e0]"
          />
          <Button
            buttonText={QUOTATION_MANAGE[1]}
            type="quoteTableControl"
            onClickHandler={() =>
              router.push(`quotation/edit/${pastorder.past_order_id}`)
            }
            className="border border-[#e0e0e0]"
          />
          <Button
            buttonText={QUOTATION_MANAGE[2]}
            type="quoteTableControl"
            onClickHandler={openModal}
            className="bg-[#fc4c00] text-white"
          />
        </div>
      </div>
      {controlType && <PastOrderDetail pastorderId={pastorder.past_order_id} />}
    </div>
  );
};

export default PastOrderTableInfo;

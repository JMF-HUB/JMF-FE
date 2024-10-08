import {
  ACCOUNT_ALERT,
  ACCOUNT_BTN_TEXT,
  ACCOUNT_GUIDE,
  ACCOUNT_TEXT,
} from '@/app/constants/account';
import { useUser } from '@/app/hooks/useUser';
import { callGet } from '@/app/utils/callApi';
import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

interface AccountCertificateProps {
  certifyHandler: () => void;
}

const AccountCertificate = ({ certifyHandler }: AccountCertificateProps) => {
  const [inputPassword, setInputPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);

  const { user } = useUser();

  const confirmAccount = async () => {
    const password = encodeURIComponent(inputPassword);
    const data = await callGet(`/api/account/password?password=${password}`);
    if (data.result === true) {
      certifyHandler();
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <p>{ACCOUNT_TEXT[1]}</p>
        <div className="w-[600px] h-[56px] border-[1px] border-gray-1 rounded-[4px] px-6 py-1 flex items-center">
          {user?.result?.email}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mb-8">
        <div className="flex">
          <p>{ACCOUNT_TEXT[2]}</p>
          <div className="text-red-2 text-base font-semibold">
            {isCorrect ? '*' : `* ${ACCOUNT_ALERT[0]}`}
          </div>
        </div>
        <Input
          inputType="password"
          type="account"
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder={ACCOUNT_GUIDE[0]}
        />
      </div>
      <Button
        buttonText={ACCOUNT_BTN_TEXT[0]}
        type="accountConfirm"
        onClickHandler={confirmAccount}
      />
    </div>
  );
};

export default AccountCertificate;

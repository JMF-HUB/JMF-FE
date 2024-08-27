'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  clientMapping,
  SIGNIN_PLACEHOLDER,
  SIGNIN_TEXT,
  SIGNUP_BUTTON,
} from '@/app/constants/sign-in';
import { ClientState, ValidationClientType } from '@/app/_types/sign-in';
import { callPost } from '@/app/utils/callApi';
import SignInButton from '../common/SignInButton';
import SignInInput from '../common/SignInInput';
import { useUserStore } from '@/app/store/useStore';

export default function ClientComponents() {
  const router = useRouter();
  const fetchUser = useUserStore((state) => state.fetchUser);

  const [formState, setFormState] = useState<ClientState>({
    name: '',
    address: '',
    nameError: '',
    addressError: '',
    isBtnActive: false,
  });

  const validateField = (type: ValidationClientType, value: string) => {
    if (!value.trim()) {
      return `${clientMapping[type]}을 입력해주세요.`;
    }
    return '';
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: ValidationClientType,
  ) => {
    const { value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [type]: value,
      [`${type}Error`]: validateField(type, value),
    }));
  };

  const handlePostClient = async () => {
    try {
      const body = {
        name: formState.name,
        address: formState.address,
      };
      await callPost('/api/sign-in/client', body);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBtnClick = async () => {
    const nameError = validateField('name', formState.name);
    const addressError = validateField('address', formState.address);

    if (nameError || addressError) {
      setFormState((prevState) => ({
        ...prevState,
        nameError,
        addressError,
        isBtnActive: false,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        nameError: '',
        addressError: '',
        isBtnActive: true,
      }));
      handlePostClient();
      // 서버 처리 시간을 고려한 지연 추가
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      await fetchUser();
      router.push('/');
    }
  };

  return (
    <div className="w-full flex-center flex-col gap-6 max-w-[678px]">
      <SignInInput
        label={SIGNIN_TEXT[6]}
        placeholder={SIGNIN_PLACEHOLDER[4]}
        type="text"
        value={formState.name}
        onChange={(e) => handleInputChange(e, 'name')}
        error={!!formState.nameError}
        errorMessage={formState.nameError}
      />
      <SignInInput
        label={SIGNIN_TEXT[7]}
        placeholder={SIGNIN_PLACEHOLDER[5]}
        type="text"
        value={formState.address}
        onChange={(e) => handleInputChange(e, 'address')}
        error={!!formState.addressError}
        errorMessage={formState.addressError}
      />

      <SignInButton
        type="button"
        text={SIGNUP_BUTTON[1]}
        onClick={handleBtnClick}
      />
    </div>
  );
}

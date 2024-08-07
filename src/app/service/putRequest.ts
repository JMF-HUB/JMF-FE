const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const headers = {
  'Content-Type': 'application/json',
};

export const putRequest = async (
  url: string,
  body: any = null,
  accessToken?: string,
) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        ...headers,
        ...(accessToken && { 'access-token': accessToken }),
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  } catch (error) {
    console.error('에러 : ', error);
    throw new Error('요청 실패');
  }
};

// 거래처 수정
export const putUpdateClient = async (
  clientContents: any,
  client_id: string,
) => {
  try {
    const url = `${SERVER_URL}/api/v1/clients/${client_id}/update`;
    return await putRequest(url, clientContents);
  } catch (error) {
    console.error('에러 : ', error);
    throw new Error('putUpdateClient 에러 발생');
  }
};

export const putQuotation = async (
  quantity: number,
  quotation_id: number,
  product_id: number,
) => {
  const url = `${SERVER_URL}/api/v1/quotations/${quotation_id}/${product_id}`;
  return putRequest(url, quantity);
};

export const putPastOrder = async (
  pastorder_id: number,
  pastOrderData: PastOrder,
) => {
  const url = `${SERVER_URL}/api/v1/past-order/${pastorder_id}/update`;
  return putRequest(url, pastOrderData);
};
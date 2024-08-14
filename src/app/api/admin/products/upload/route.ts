import { NextRequest, NextResponse } from 'next/server';
import { postAdminProductsUpload } from '@/app/service/postRequest';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData(); // 요청에서 FormData 객체를 추출
    const file = formData.get('file') as File; // 파일 데이터 추출

    if (!file) {
      return NextResponse.json({ error: '파일이 없습니다.' }, { status: 400 });
    }

    const result = await postAdminProductsUpload(file);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('파일 업로드 중 오류 발생:', error);
    return NextResponse.json(
      { error: '파일 처리 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

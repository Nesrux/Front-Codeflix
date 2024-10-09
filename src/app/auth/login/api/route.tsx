import { LoginFormSchema } from '@/app/lib/validations/LoginFormScheema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = LoginFormSchema.parse(await request.json());
    console.log('email ' + email + 'Password' + password);

    return new NextResponse('its works');
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(JSON.stringify({ error: error.message }));
  }
}

/* eslint-disable no-undef */
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/comercial/scd/filiais`,
    {
      headers: {
        'Content-Type': 'application/json',
        'mz-integration': 'sempre'
      }
    }
  );

  const data = await res.json();
  const path = request.nextUrl.searchParams.get('path') || '/';

  revalidatePath(path);

  return NextResponse.json({ data });
}

/* eslint-disable no-undef */
import { NextResponse } from 'next/server';

export async function GET() {
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

  return NextResponse.json({ data });
}

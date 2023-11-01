import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://bot.sempretecnologia.com.br/index.php/comercial/scd/produtos',
    {
      headers: {
        'Content-Type': 'application/json',
        'mz-integration': 'sempre'
      },
      next: {
        revalidate: 60
      }
    }
  );

  const data = await res.json();

  return NextResponse.json({ data });
}

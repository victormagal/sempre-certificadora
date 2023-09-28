'use client';
import Script from 'next/script';

export default function Iugu() {
  return (
    <>
      <Script src="https://js.iugu.com/v2" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/formatter.js/0.1.5/formatter.min.js" />
    </>
  );
}

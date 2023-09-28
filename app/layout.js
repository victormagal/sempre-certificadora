'use client';
import { useState } from 'react';
import {
  Analytics,
  Footer,
  Header,
  Iugu,
  Locations,
  ModalForm
} from './components/Partials';
import { client } from './graphql/config';
import StyledComponentsRegistry from '@/lib/registry';
import { ApolloProvider } from '@apollo/client';
import './global.css';

export default function RootLayout({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Sempre Tecnologia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ApolloProvider client={client}>
          <StyledComponentsRegistry>
            <Analytics />
            <Iugu />
            <main>
              <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
              <Header />
              {children}
              <Locations />
              <Footer />
            </main>
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  );
}

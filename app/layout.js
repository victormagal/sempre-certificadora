'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Analytics,
  Footer,
  Header,
  HeaderMobile,
  Iugu,
  Locations,
  ModalForm
} from './components/Partials';
import { client } from './graphql/config';
import StyledComponentsRegistry from '@/lib/registry';
import { ApolloProvider } from '@apollo/client';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <HeaderMobile />
              {children}
              <Locations />
              <Footer />
              <Link
                href="https://api.whatsapp.com/send?phone=556130839390"
                target="_blank"
                className="fixed bg-[#25D366] bottom-4 drop-shadow-xl h-16 right-4 rounded-full w-16"
              >
                <FontAwesomeIcon
                  className="text-white h-10 w-10 mt-3 ml-3"
                  icon={faWhatsapp}
                />
              </Link>
            </main>
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  );
}

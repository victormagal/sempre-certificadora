/* eslint-disable no-undef */
'use client';
import { useEffect, useState } from 'react';
import { Container } from '../Elements';
import CertificadoPF from '../Products/CertificadoPF';
import CertificadoPJ from '../Products/CertificadoPJ';
import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { Title } from '@/app/base/Typography';

export default function Products({ products }) {
  const [showPF, setShowPF] = useState(true);
  const [initialPFProducts, setInitialPFProducts] = useState([]);
  const [initialPJProducts, setInitialPJProducts] = useState([]);

  const {
    data: { Produtos: produtos }
  } = products;

  useEffect(() => {
    produtos.map((product) => {
      if (product.tipo_atendimento === 'videoconferencia') {
        if (product.tipo_certificado === 'pessoa_fisica') {
          setInitialPFProducts((prevState) => [...prevState, product]);
        } else {
          setInitialPJProducts((prevState) => [...prevState, product]);
        }
      }
    });
  }, [produtos]);

  return (
    <>
      <div>
        <Container newClasses="pb-16">
          <nav className="col-span-4 lg:col-span-6 lg:col-start-4 flex justify-center">
            <ul
              className="border flex p-2 rounded space-x-4"
              style={{
                background: neutralLight[200],
                borderColor: neutralLight[400]
              }}
            >
              <li
                className={`cursor-pointer ${
                  showPF && 'drop-shadow'
                } py-4 px-8 rounded`}
                onClick={() => setShowPF(true)}
                style={{
                  background: showPF ? neutralLight[100] : 'transparent'
                }}
              >
                <Title
                  appearance="h7"
                  color={showPF ? neutralDark[500] : neutralMid[400]}
                >
                  Para sua empresa
                </Title>
              </li>
              <li
                className={`cursor-pointer ${
                  !showPF && 'drop-shadow'
                } py-4 px-4 lg:px-8 rounded`}
                onClick={() => setShowPF(false)}
                style={{
                  background: !showPF ? neutralLight[100] : 'transparent'
                }}
              >
                <Title
                  appearance="h7"
                  color={!showPF ? neutralDark[500] : neutralMid[400]}
                >
                  Para você
                </Title>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
      {!showPF ? (
        <CertificadoPF
          cupom="WGOVKQRO"
          partnerBackground="#FFF072"
          partnerIcon="C3931D"
          products={initialPFProducts}
        />
      ) : (
        <CertificadoPJ
          cupom="WGOVKQRO"
          partnerBackground="#FFF072"
          partnerIcon="C3931D"
          products={initialPJProducts}
        />
      )}
    </>
  );
}

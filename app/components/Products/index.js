/* eslint-disable no-undef */
'use client';
import { useEffect, useState } from 'react';
import { Container } from '../Elements';
import CertificadoPF from '../Products/CertificadoPF';
import CertificadoPJ from '../Products/CertificadoPJ';

export default function Products({ cupom, products }) {
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
    <Container newClasses="py-16">
      <CertificadoPJ
        cupom={cupom}
        partnerBackground="#FFF072"
        partnerIcon="C3931D"
        products={initialPJProducts}
      />
      <CertificadoPF
        cupom={cupom}
        partnerBackground="#FFF072"
        partnerIcon="C3931D"
        products={initialPFProducts}
      />
    </Container>
  );
}

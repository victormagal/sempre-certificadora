/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container } from '../Elements';
import CertificadoPF from '../Products/CertificadoPF';
import CertificadoPJ from '../Products/CertificadoPJ';
import { neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

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
      <div className="col-span-4 lg:col-span-12 xl:col-span-6 flex flex-col justify-center items-center xl:items-end space-y-8 text-center lg:text-right">
        <Image
          alt="Certificado Digital - Emita o seu de onde estiver"
          height={125}
          src="/25_off.png"
          width={637}
        />
        <div>
          <Title appearance="h2" color={neutralDark[600]} extra>
            Emita ou Renove seu Certificado Digital
          </Title>
          <Text appearance="p3" color={neutralDark[600]}>
            Segurança, agilidade e praticidade!
          </Text>
        </div>
      </div>
    </Container>
  );
}

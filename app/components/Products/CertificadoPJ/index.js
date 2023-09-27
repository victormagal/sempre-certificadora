'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '../../Elements';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { formatCurrency } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';
import { getProductsByType } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function CertificadoPJ() {
  const [products, setProducts] = useState([]);

  useQuery(getProductsByType, {
    variables: { tipo: 'pessoa_juridica' },
    onCompleted: ({ produtos: { data } }) => {
      setProducts(data);
    }
  });
  return (
    <Container newClasses="pb-16">
      <div className="col-span-4 col-start-2 flex flex-col space-y-8">
        <div
          className="h-14 flex items-center justify-center rounded-full w-14"
          style={{ background: red[100] }}
        >
          <RegularIcon
            icon="faBuilding"
            iconColor={red[900]}
            newClasses="h-6"
          />
        </div>
        <Title appearance="h3" color={neutralDark[500]}>
          Para sua empresa
        </Title>
        <Text appearance="p3" color={neutralMid[600]}>
          A identidade virtual do seu negócio! Validade jurídica para fazer
          transações e assinar documentos com segurança e praticidade.
        </Text>
        <ul className="flex flex-col space-y-3">
          <li className="flex space-x-2 items-center">
            <RegularIcon
              icon="faMoneyBill1"
              iconColor={red[900]}
              newClasses="h-5 w-5"
            />
            <Text appearance="p3" color={neutralMid[600]}>
              Reduz custos
            </Text>
          </li>
          <li className="flex space-x-2 items-center">
            <RegularIcon
              icon="faLemon"
              iconColor={red[900]}
              newClasses="h-5 w-5"
            />
            <Text appearance="p3" color={neutralMid[600]}>
              É sustentável
            </Text>
          </li>
          <li className="flex space-x-2 items-center">
            <RegularIcon
              icon="faPaperPlane"
              iconColor={red[900]}
              newClasses="h-5 w-5"
            />
            <Text appearance="p3" color={neutralMid[600]}>
              Garante mobilidade
            </Text>
          </li>
        </ul>
      </div>
      {products &&
        products?.map((product) => (
          <div
            className="border col-span-3 flex flex-col space-y-8 py-8 px-6 rounded-2xl"
            key={product?.attributes?.id_produto}
            style={{
              background: neutralLight[100],
              borderColor: neutralLight[400]
            }}
          >
            <header className="flex flex-col space-y-1">
              <div
                className="flex justify-center py-2 rounded w-1/4"
                style={{ background: '#E6F8F2' }}
              >
                <Overline appearance="o1" color="#076E4F">
                  {product?.attributes?.percentual_desconto}% OFF
                </Overline>
              </div>
              <div>
                <Title appearance="h4" color={neutralDark[400]} extra>
                  {product?.attributes?.nome}
                </Title>
              </div>
            </header>
            <main className="flex flex-col space-y-1">
              <Text appearance="p3" color={neutralMid[600]}>
                A partir
              </Text>
              <Text
                appearance="p3"
                color={neutralMid[600]}
                className="line-through"
              >
                De {formatCurrency(product?.attributes?.valor, 'BRL', 'pt-BR')}{' '}
                por
              </Text>
              <Title appearance="h2" color={neutralDark[500]} extra>
                {formatCurrency(
                  product?.attributes?.valor_com_desconto,
                  'BRL',
                  'pt-BR'
                )}
              </Title>
              <Text appearance="p3" color={neutralMid[600]}>
                3x de{' '}
                {formatCurrency(
                  product?.attributes?.valor_com_desconto / 3,
                  'BRL',
                  'pt-BR'
                )}{' '}
                no crédito
              </Text>
            </main>
            <footer className="flex flex-col items-center space-y-4">
              <Text appearance="p4" color={neutralDark[500]}>
                Validade de 12 meses
              </Text>
              <button
                className="py-4 rounded-md w-full"
                style={{ background: red[1000] }}
              >
                <Link
                  className="flex items-center justify-center space-x-3"
                  href={`/checkout?product=${product?.attributes?.id_produto}`}
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    Comprar agora
                  </Text>
                  <SolidIcon
                    icon="faChevronRight"
                    iconColor={neutralLight[100]}
                    newClasses="h-3"
                  />
                </Link>
              </button>
            </footer>
          </div>
        ))}
    </Container>
  );
}

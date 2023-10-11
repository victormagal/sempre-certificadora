'use client';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { formatCurrency } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';
import { getProductsByType } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function CertificadoPF({ setProduct }) {
  const [products, setProducts] = useState([]);
  const [productFocused, setProductFocused] = useState('');

  useQuery(getProductsByType, {
    variables: { tipo: 'pessoa_fisica' },
    onCompleted: ({ produtos: { data } }) => {
      setProducts(data);
    }
  });

  const openPopover = (e) => {
    const element = e.currentTarget.nextElementSibling;

    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('block');
    } else {
      element.classList.remove('block');
      element.classList.add('hidden');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row flex-grow lg:space-x-6">
      {products &&
        products?.map((product) => (
          <div
            className="border cursor-pointer flex flex-col space-y-8 py-8 px-6 rounded-2xl w-full lg:w-1/2"
            key={product?.attributes?.id_produto}
            onClick={() => {
              setProduct(product?.attributes?.id_produto);
              setProductFocused(product?.attributes?.id_produto);
            }}
            style={{
              background: neutralLight[100],
              borderColor:
                productFocused === product?.attributes?.id_produto
                  ? red[600]
                  : neutralLight[400]
            }}
          >
            <header className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className="flex justify-center py-2 rounded w-1/4"
                  style={{ background: '#E6F8F2' }}
                >
                  <Overline appearance="o1" color="#076E4F">
                    {product?.attributes?.percentual_desconto}% OFF
                  </Overline>
                </div>
                <RegularIcon
                  icon={`${
                    productFocused === product?.attributes?.id_produto
                      ? 'faCircleDot'
                      : 'faCircle'
                  }`}
                  iconColor={
                    productFocused === product?.attributes?.id_produto
                      ? red[600]
                      : neutralLight[500]
                  }
                  newClasses="h-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <Title appearance="h4" color={neutralDark[400]} extra>
                  {product?.attributes?.nome}
                </Title>
                <div className="relative">
                  <button
                    className="relative flex items-center z-10"
                    onClick={openPopover}
                  >
                    <SolidIcon
                      icon="faCircleInfo"
                      iconColor={neutralDark[500]}
                      newClasses="h-6"
                    />
                  </button>
                  <div className="absolute hidden left-[50%] popover translate-x-[-50%] -top-[6rem]">
                    <div
                      className="break-words p-4 rounded-xl w-[230px] whitespace-normal z-0"
                      style={{ backgroundColor: neutralDark[500] }}
                    >
                      <Text appearance="p4" color={neutralLight[100]}>
                        {product?.attributes?.descricao}
                      </Text>
                    </div>
                  </div>
                </div>
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
                Validade de {product?.attributes?.validade} meses
              </Text>
            </footer>
          </div>
        ))}
    </div>
  );
}

'use client';
import Link from 'next/link';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { formatCurrency } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';

export default function CertificadoPJ({ cupom, products }) {
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
    <>
      {products &&
        products?.map((product) => (
          <div
            className="border col-span-4 lg:col-span-6 xl:col-span-3 flex flex-col space-y-8 py-8 px-6 rounded-2xl"
            key={product?.id}
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
                  {product?.percentual_desconto}% OFF
                </Overline>
              </div>
              <div className="flex items-center justify-between">
                <Title appearance="h4" color={neutralDark[400]} extra>
                  {product?.nome}
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
                        {product?.descricao}
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
                De {formatCurrency(product?.valor / 1, 'BRL', 'pt-BR')} por
              </Text>
              <Title appearance="h2" color={neutralDark[500]} extra>
                {formatCurrency(
                  product?.valor_com_desconto / 1,
                  'BRL',
                  'pt-BR'
                )}
              </Title>
              <Text appearance="p3" color={neutralMid[600]}>
                3x de{' '}
                {formatCurrency(
                  product?.valor_com_desconto / 3,
                  'BRL',
                  'pt-BR'
                )}{' '}
                no crédito
              </Text>
            </main>
            <footer className="flex flex-col items-center space-y-4">
              <Text appearance="p4" color={neutralDark[500]}>
                Validade de {product?.validade_certificado}
              </Text>
              <button
                className="py-4 rounded-md w-full"
                style={{ background: red[1000] }}
              >
                <Link
                  className="flex items-center justify-center space-x-3"
                  href={{
                    pathname: 'checkout',
                    query: {
                      product: product?.id,
                      cupom: cupom
                    }
                  }}
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
    </>
  );
}

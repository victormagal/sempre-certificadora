import { useState } from 'react';
import { CertificadoPF, CertificadoPJ } from './Products';
import {
  neutralDark,
  neutralLight,
  neutralMid,
  success
} from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { formatCurrency } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function SelectedProduct({ setChangedProduct, values }) {
  const [showPF, setShowPF] = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <>
      <Container>
        <ul className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col lg:flex-row justify-between mb-6 py-8 px-6 lg:px-12 rounded lg:space-x-4 space-y-4 lg:space-y-0">
          <li className="hidden lg:block">
            <Title appearance="h4" color={neutralDark[500]} extra>
              Certificado selecionado
            </Title>
          </li>
          <li className="flex flex-col space-y-2">
            <div
              className="py-2 rounded text-center"
              style={{ background: '#E6F8F2' }}
            >
              <Overline appearance="o1" color="#076E4F">
                {values?.percentual_desconto}% off
              </Overline>
            </div>
            <div>
              <Title appearance="h4" color={neutralDark[400]} extra>
                {values?.nome}
              </Title>
            </div>
          </li>
          <li className="flex flex-col space-y-2">
            <Text
              appearance="p3"
              color={neutralMid[600]}
              className="line-through"
            >
              De {formatCurrency(values?.valor, 'BRL', 'pt-BR')} por
            </Text>
            <Title appearance="h2" color={neutralDark[500]} extra>
              {formatCurrency(values?.valor_com_desconto, 'BRL', 'pt-BR')}
            </Title>
            <Text appearance="p3" color={neutralMid[600]}>
              3x de{' '}
              {formatCurrency(values?.valor_com_desconto / 3, 'BRL', 'pt-BR')}{' '}
              no crédito
            </Text>
            <Text
              appearance="p4"
              className="text-center lg:text-left"
              color={neutralDark[500]}
            >
              Validade de 12 meses
            </Text>
          </li>
          <li className="flex items-center">
            <button
              className="border flex items-center justify-center py-4 px-8 rounded-md space-x-3 w-full"
              onClick={() => setShowProducts(true)}
              style={{
                background: neutralLight[100],
                borderColor: neutralLight[500]
              }}
            >
              <Title appearance="h7" color={neutralDark[500]}>
                Trocar certificado
              </Title>
            </button>
          </li>
        </ul>
      </Container>
      {showProducts && (
        <>
          <Container newClasses="pb-6">
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
                  } py-4 px-4 lg:px-8 rounded`}
                  onClick={() => {
                    setShowPF(true);
                    setSelectedProduct('');
                  }}
                  style={{
                    background: showPF ? neutralLight[100] : 'transparent'
                  }}
                >
                  <Title
                    appearance="h7"
                    color={showPF ? neutralDark[500] : neutralMid[400]}
                  >
                    Para você
                  </Title>
                </li>
                <li
                  className={`cursor-pointer ${
                    !showPF && 'drop-shadow'
                  } py-4 px-8 rounded`}
                  onClick={() => {
                    setShowPF(false);
                    setSelectedProduct('');
                  }}
                  style={{
                    background: !showPF ? neutralLight[100] : 'transparent'
                  }}
                >
                  <Title
                    appearance="h7"
                    color={!showPF ? neutralDark[500] : neutralMid[400]}
                  >
                    Para sua empresa
                  </Title>
                </li>
              </ul>
            </nav>
          </Container>
          <Container>
            <div className="col-span-4 lg:col-span-8 xl:col-span-6 lg:col-start-3 xl:col-start-4 flex">
              {showPF ? (
                <CertificadoPF setProduct={setSelectedProduct} />
              ) : (
                <CertificadoPJ setProduct={setSelectedProduct} />
              )}
            </div>
            <div className="col-span-4 lg:col-span-8 xl:col-span-6 lg:col-start-3 xl:col-start-4 flex justify-center">
              <ul className="flex flex-grow space-x-6">
                <li className="flex-1">
                  <button
                    className="border py-4 rounded-md space-x-2 w-full"
                    onClick={() => {
                      setShowProducts(false);
                      setSelectedProduct('');
                    }}
                    style={{
                      background: neutralLight[100],
                      borderColor: neutralLight[500]
                    }}
                  >
                    <Title appearance="h7" color={neutralDark[500]}>
                      Cancelar
                    </Title>
                  </button>
                </li>
                <li className="flex-1">
                  <button
                    className={`${
                      selectedProduct.length > 0 ? 'opacity-100' : 'opacity-40'
                    } flex items-center justify-center py-4 rounded-md space-x-2 w-full`}
                    disabled={selectedProduct.length > 0 ? false : true}
                    onClick={() => {
                      setChangedProduct(selectedProduct);
                      setShowProducts(false);
                    }}
                    style={{ background: success[900] }}
                  >
                    <Title appearance="h7" color={neutralLight[100]}>
                      Confirmar
                    </Title>
                    <SolidIcon
                      icon="faChevronRight"
                      iconColor={neutralLight[100]}
                      newClasses="h-3"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </Container>
        </>
      )}
    </>
  );
}

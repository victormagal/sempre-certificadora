'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '../../Elements';
import ModalForm from '../ModalForm';
import { neutralDark, neutralMid, neutralLight, red } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';

export default function HeaderMobile() {
  const [openModal, setOpenModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block lg:hidden">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <section
        className="fixed top-0 w-full z-50"
        style={{ backgroundColor: neutralLight[100] }}
      >
        <div
          className="border-b py-6"
          style={{ borderColor: neutralLight[400] }}
        >
          <Container>
            <div className="col-span-4 flex justify-between items-center">
              <Link href="/">
                <Image
                  alt="Sempre Tecnologia"
                  height={46}
                  src="/logo-positiva.svg"
                  width={172}
                />
              </Link>
              <button
                className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none col-span-1 order-last"
                onClick={burgerMenu}
              >
                {!isOpen ? (
                  <SolidIcon
                    icon="faBars"
                    iconColor={neutralMid[400]}
                    newClasses="h-8"
                  />
                ) : (
                  <SolidIcon
                    icon="faXmark"
                    iconColor={neutralMid[400]}
                    newClasses="h-8"
                  />
                )}
              </button>
            </div>
          </Container>
        </div>
        {isOpen && (
          <>
            <Container newClasses="py-6">
              <div
                className="col-span-4"
                style={{ backgroundColor: neutralLight[100] }}
              >
                <ul className="flex flex-col space-y-6">
                  <li>
                    <Link href="/">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Sempre Tecnologia
                      </Title>
                    </Link>
                  </li>
                  <li className="relative">
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 font-medium marker:content-none hover:cursor-pointer group-open: mb-0">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Seja um parceiro
                        </Title>
                        <svg
                          className="w-5 h-5 text-gray-500 transition rotate-90 group-open:-rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </summary>
                      <article className="pb-4">
                        <ul className="flex flex-col gap-0 mt-4 mb-42">
                          <Link href="/">
                            <li className="flex items-start mb-4 space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faFileLines"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Programa de parceria para Contadores
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Conheça e aproveite benefícios exclusivos.
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link href="/">
                            <li className="flex items-start space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faFileLines"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Seja um parceiro certificador
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Programa de parceria para venda de Certificado
                                  Digital e Sistemas Web de Gestão.
                                </Text>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </article>
                    </details>
                  </li>
                  <li>
                    <Link href="/">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Blog
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Suporte
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Contato
                      </Title>
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
            <div
              className="border-t"
              style={{ borderColor: neutralLight[400] }}
            >
              <Container>
                <div className="col-span-4 p-4">
                  <button
                    className="py-3 rounded-md w-full"
                    onClick={() => setOpenModal(true)}
                    style={{
                      background: red[1000]
                    }}
                    type="button"
                  >
                    <Title appearance="h6" color={neutralLight[100]}>
                      Fale agora
                    </Title>
                  </button>
                </div>
              </Container>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

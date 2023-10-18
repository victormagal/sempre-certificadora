/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '../../Elements';
import ModalForm from '../ModalForm';
import { neutralDark, neutralMid, neutralLight, red } from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
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
                    <Link
                      onClick={burgerMenu}
                      href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/sobre`}
                      target="_blank"
                    >
                      <Title appearance="h6" color={neutralDark[500]}>
                        Quem somos
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={burgerMenu}
                      href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}`}
                      target="_blank"
                    >
                      <Title appearance="h6" color={neutralDark[500]}>
                        Sempre Tecnologia
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <details className="flex flex-col space-y-6">
                      <summary className="flex items-center justify-between">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Seja um parceiro
                        </Title>
                        <SolidIcon
                          icon="faChevronDown"
                          iconColor={neutralMid[500]}
                          newClasses="h-4"
                        />
                      </summary>
                      <article>
                        <ul className="flex flex-col space-y-6">
                          <Link
                            onClick={burgerMenu}
                            href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/contador`}
                            target="_blank"
                          >
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faFileLines"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Programa para Contadores
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Conheça e aproveite benefícios exclusivos
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link
                            onClick={burgerMenu}
                            href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/parceria`}
                            target="_blank"
                          >
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faFileLines"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Parceria em Certificado Digital
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Programa de parceria para venda de Certificado
                                  Digital
                                </Text>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </article>
                    </details>
                  </li>
                  <li>
                    <Link
                      onClick={burgerMenu}
                      href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/noticias`}
                      target="_blank"
                    >
                      <Title appearance="h6" color={neutralDark[500]}>
                        Blog
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <details className="flex flex-col space-y-6">
                      <summary className="flex items-center justify-between">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Suporte
                        </Title>
                        <SolidIcon
                          icon="faChevronDown"
                          iconColor={neutralMid[500]}
                          newClasses="h-4"
                        />
                      </summary>
                      <article>
                        <ul className="flex flex-col space-y-6">
                          <Link onClick={burgerMenu} href="/certificado-a1">
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faDesktop"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Certificado Digital A1
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Computador
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link
                            onClick={burgerMenu}
                            href="https://api.whatsapp.com/send?phone=556130839390"
                          >
                            <li className="flex space-x-4">
                              <div>
                                <RegularIcon
                                  icon="faHardDrive"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Certificado Digital A3
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Cartão e Token
                                </Text>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </article>
                    </details>
                  </li>
                  {/* <li>
                    <Link
                      onClick={burgerMenu}
                      href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/contato`}
                      target="_blank"
                    >
                      <Title appearance="h6" color={neutralDark[500]}>
                        Contato
                      </Title>
                    </Link>
                  </li> */}
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

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../../Elements/Container';
import ModalForm from '../ModalForm';
import { neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Text } from '@/app/base/Typography';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener('click', closeDropdownItens);
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();

    const nextElement = e.currentTarget.nextSibling;
    const allElements = [...document.getElementsByClassName('dropDown')];

    allElements.map((element) => {
      if (element === nextElement && element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  };

  const closeDropdownItens = () => {
    const elements = [...document.getElementsByClassName('dropDown')];

    elements.map((element) => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    });
  };

  return (
    <header className="bg-white fixed w-full z-60 border-b">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container newClasses="py-6">
        <div className="col-span-2 flex justify-center items-center">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={46}
              src="/logo-positiva.svg"
              width={172}
            />
          </Link>
        </div>
        <nav className="col-end-13 col-span-5 flex items-center">
          <ul className="flex items-center justify-between w-full">
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Sempre Tecnologia
                </Text>
              </Link>
            </li>
            <li className="relative">
              <button className="flex" onClick={toggleMenu}>
                <Text appearance="p4" color={neutralMid[600]}>
                  Seja um parceiro
                </Text>
                <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
              </button>
              <ul
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <li>Olá enfermeira</li>
              </ul>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Suporte
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Contato
                </Text>
              </Link>
            </li>
            <li>
              <button
                className="px-8 py-3 rounded"
                onClick={() => setOpenModal(true)}
                style={{
                  background: red[1000]
                }}
                type="button"
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Fale agora
                </Text>
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

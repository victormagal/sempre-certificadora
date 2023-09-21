'use client';
import Image from 'next/image';
import { useState } from 'react';
import { neutralDark, neutralMid } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function Tabs() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <>
      <div className="lg:col-span-12">
        <ul className="flex flex-row gap-1 text-center">
          <li
            className={`border-b-0 flex-auto ${
              toggle === 1 ? 'bg-red-600' : 'bg-[#F9FAFB]'
            } p-3 cursor-pointer`}
            onClick={() => toggleTab(1)}
          >
            <button
              className={`${
                toggle === 1 ? 'text-white' : 'text-soft-gray'
              } self-auto	font-sans font-normal text-lg`}
              type="button"
            >
              Distribuidores
            </button>
          </li>
          <li
            className={`border-b-0 flex-auto ${
              toggle === 2 ? 'bg-red-600' : 'bg-[#F9FAFB]'
            } p-3 cursor-pointer`}
            onClick={() => toggleTab(2)}
          >
            <button
              className={`${
                toggle === 2 ? 'text-white' : 'text-soft-gray'
              } self-auto	font-sans font-normal text-lg text-center`}
              type="button"
            >
              Pequenos varejos
            </button>
          </li>
          <li
            className={`border-b-0 flex-auto ${
              toggle === 3 ? 'bg-red-600' : 'bg-[#F9FAFB]'
            } p-3 cursor-pointer`}
            onClick={() => toggleTab(3)}
          >
            <button
              className={`${
                toggle === 3 ? 'text-white' : 'text-soft-gray'
              } self-auto	font-sans font-normal text-lg text-center`}
              type="button"
            >
              Prestadores de serviços
            </button>
          </li>
          <li
            className={`border-b-0 flex-auto ${
              toggle === 4 ? 'bg-red-600' : 'bg-[#F9FAFB]'
            } p-3 cursor-pointer`}
            onClick={() => toggleTab(4)}
          >
            <button
              className={`${
                toggle === 4 ? 'text-white' : 'text-soft-gray'
              } self-auto	font-sans font-normal text-lg text-center`}
              type="button"
            >
              Recorrentes
            </button>
          </li>
          <li
            className={`border-b-0 flex-auto ${
              toggle === 5 ? 'bg-red-600' : 'bg-[#F9FAFB]'
            } p-3 cursor-pointer`}
            onClick={() => toggleTab(5)}
          >
            <button
              className={`${
                toggle === 5 ? 'text-white' : 'text-soft-gray'
              } self-auto	font-sans font-normal text-lg text-center`}
              type="button"
            >
              Documentos fiscais
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-12">
        <div className={`${toggle === 1 ? 'block' : 'hidden'} flex flex-row`}>
          <div className="basis-1/2 py-24 ml-16">
            <Image
              alt="Sempre gestor"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
            <Image
              alt="Sempre light"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
            <Title
              className="py-6"
              appearance="h2"
              color={neutralDark[500]}
              extra
            >
              Distribuidores
            </Title>
            <Text appearance="p1" color={neutralMid[500]}>
              Pães e salgados
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Hortifruti
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Comésticos
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Picolés e sorvetes
            </Text>
          </div>
          <div className="basis-1/2 ml-16">
            <Image
              alt="Sempre mensalidade"
              className="mt-6"
              height={410}
              width={486}
              quality={100}
              src="/distriibuidores-tab.png"
            />
          </div>
        </div>
        <div className={`${toggle === 2 ? 'block' : 'hidden'} flex flex-row`}>
          <div className="basis-1/2 py-24 ml-16">
            <Image
              alt="Sempre gestor"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
            <Image
              alt="Sempre light"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
            <Title
              className="py-6"
              appearance="h2"
              color={neutralDark[500]}
              extra
            >
              Pequenos varejos
            </Title>
            <Text appearance="p1" color={neutralMid[500]}>
              Pães e salgados
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Hortifruti
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Comésticos
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Picolés e sorvetes
            </Text>
          </div>
          <div className="basis-1/2">
            <Image
              alt="Sempre mensalidade"
              className="mt-6"
              height={410}
              width={486}
              quality={100}
              src="/distriibuidores-tab.png"
            />
          </div>
        </div>
        <div className={`${toggle === 3 ? 'block' : 'hidden'} flex flex-row`}>
          <div className="basis-1/2 py-24 ml-16">
            <Image
              alt="Sempre gestor"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
            <Image
              alt="Sempre light"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
            <Title
              className="py-6"
              appearance="h2"
              color={neutralDark[500]}
              extra
            >
              Prestadores de serviços
            </Title>
            <Text appearance="p1" color={neutralMid[500]}>
              Pães e salgados
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Hortifruti
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Comésticos
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Picolés e sorvetes
            </Text>
          </div>
          <div className="basis-1/2">
            <Image
              alt="Sempre mensalidade"
              className="mt-6"
              height={410}
              width={486}
              quality={100}
              src="/distriibuidores-tab.png"
            />
          </div>
        </div>
        <div className={`${toggle === 4 ? 'block' : 'hidden'} flex flex-row`}>
          <div className="basis-1/2 py-24 ml-16">
            <Image
              alt="Sempre gestor"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
            <Image
              alt="Sempre light"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
            <Title
              className="py-6"
              appearance="h2"
              color={neutralDark[500]}
              extra
            >
              Recorrentes
            </Title>
            <Text appearance="p1" color={neutralMid[500]}>
              Pães e salgados
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Hortifruti
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Comésticos
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Picolés e sorvetes
            </Text>
          </div>
          <div className="basis-1/2">
            <Image
              alt="Sempre mensalidade"
              className="mt-6"
              height={410}
              width={486}
              quality={100}
              src="/distriibuidores-tab.png"
            />
          </div>
        </div>
        <div className={`${toggle === 5 ? 'block' : 'hidden'} flex flex-row`}>
          <div className="basis-1/2 py-24 ml-16">
            <Image
              alt="Sempre gestor"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
            <Image
              alt="Sempre light"
              className="inline m-6 ml-0"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
            <Title
              className="py-6"
              appearance="h2"
              color={neutralDark[500]}
              extra
            >
              Documentos fiscais
            </Title>
            <Text appearance="p1" color={neutralMid[500]}>
              Pães e salgados
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Hortifruti
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Comésticos
            </Text>
            <Text appearance="p1" color={neutralMid[500]}>
              Picolés e sorvetes
            </Text>
          </div>
          <div className="basis-1/2">
            <Image
              alt="Sempre mensalidade"
              className="mt-6"
              height={410}
              width={486}
              quality={100}
              src="/distriibuidores-tab.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import Container from '../../Elements/Container';
import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { getTestimonies } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function Testimonies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonies, setTestimonies] = useState([]);

  useQuery(getTestimonies, {
    onCompleted: (data) => {
      const {
        depoimentos: { data: testimonies }
      } = data;

      testimonies.map((testimony) => {
        const {
          attributes: { description, name, rule },
          id
        } = testimony;
        setTestimonies((prevState) => [
          ...prevState,
          {
            description: description,
            id: id,
            name: name,
            rule: rule
          }
        ]);
      });
    }
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Container newClasses="flex items-center py-16">
      <div className="col-span-7 flex flex-col space-y-8">
        <div className="flex space-x-2">
          <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
          <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
          <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
          <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
          <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
        </div>
        <Title appearance="h3" color={neutralDark[500]}>
          {testimonies[currentIndex]?.description}
        </Title>
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="h-14 flex items-center justify-center rounded-full w-14"
              style={{ background: neutralLight[400] }}
            >
              <RegularIcon
                icon="faUser"
                iconColor={neutralDark[500]}
                newClasses="h-4"
              />
            </div>
            <div>
              <Title appearance="h5" color={neutralDark[500]}>
                {testimonies[currentIndex]?.name}
              </Title>
              <Text appearance="p3" color={neutralMid[500]}>
                {testimonies[currentIndex]?.rule}
              </Text>
            </div>
          </div>
          <ul className="flex space-x-4">
            <li
              className="cursor-pointer flex h-12 items-center justify-center rounded-full w-12"
              onClick={prevSlide}
              style={{ background: neutralLight[300] }}
            >
              <SolidIcon
                icon="faChevronLeft"
                iconColor={neutralMid[400]}
                newClasses="h-5"
              />
            </li>
            <li
              className="cursor-pointer flex h-12 items-center justify-center rounded-full w-12"
              onClick={nextSlide}
              style={{ background: neutralLight[300] }}
            >
              <SolidIcon
                icon="faChevronRight"
                iconColor={neutralMid[400]}
                newClasses="h-5"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-5 flex justify-end">
        <Image
          alt="Depoimentos"
          height={394}
          quality={100}
          src="/testimonies.png"
          width={452}
        />
      </div>
    </Container>
  );
}

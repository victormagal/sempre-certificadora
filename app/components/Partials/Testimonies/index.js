/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import { Pagination } from 'swiper/modules';
import Container from '../../Elements/Container';
import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { getTestimonies } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
    <>
      <div className="hidden lg:block">
        <Container newClasses="flex items-center pt-16">
          <div className="col-span-7 flex flex-col space-y-8">
            <div className="flex space-x-2">
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
            </div>
            <Title appearance="h4" color={neutralDark[500]}>
              {testimonies[currentIndex]?.description}
            </Title>
            <div className="flex justify-between space-y-8 md:space-y-0">
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
              <ul className="flex justify-end space-x-4">
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
          <div className="col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <Image
              alt="Depoimentos"
              height={394}
              quality={100}
              src="/testimonies.png"
              width={452}
            />
          </div>
        </Container>
      </div>
      <div className="block lg:hidden">
        <Container newClasses="flex items-center pt-16">
          <div className="col-span-4 flex flex-col space-y-8">
            <div className="flex space-x-2">
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
              <SolidIcon icon="faStar" iconColor="#FEC84B" newClasses="h-4" />
            </div>
            <div className={styles.swiperContainer}>
              <Swiper
                modules={[Pagination]}
                pagination={true}
                style={{ paddingBottom: '3rem' }}
              >
                {testimonies.map((testimony) => (
                  <SwiperSlide key={testimony.id}>
                    <Title
                      appearance="h4"
                      className="mb-6"
                      color={neutralDark[500]}
                    >
                      {testimony.description}
                    </Title>
                    <div className="flex flex-col justify-between space-y-8 md:space-y-0">
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
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-span-4 flex justify-center mt-4 lg:mt-0">
            <Image
              alt="Depoimentos"
              height={394}
              quality={100}
              src="/testimonies.png"
              width={452}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

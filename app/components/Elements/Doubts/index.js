'use client';
import styles from './styles.module.css';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Overline, Title, Text } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Doubts({ doubts }) {
  return (
    <Container bgColor={neutralLight[200]} newClasses="py-12 lg:py-24">
      <div className="col-span-4 lg:col-span-8 lg:col-start-3">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <Overline appearance="o1" color={red[700]}>
            Suporte
          </Overline>
          <Title
            appearance="h2"
            className="text-center lg:text-left"
            color={neutralDark[500]}
            extra
          >
            Perguntas frequentes
          </Title>
          <Text
            appearance="p3"
            className="text-center lg:text-left"
            color={neutralMid[500]}
          >
            Ainda tem dúvidas sobre o Certificado Digital?
          </Text>
        </div>
        <div className="flex flex-col space-y-6">
          {doubts.map(({ question, answer }) => (
            <details
              key={question}
              className="border-b flex flex-col pb-6 space-y-3"
              style={{ borderColor: neutralLight[400] }}
            >
              <summary
                className={`cursor-pointer flex items-center justify-between ${styles.noMarker}`}
              >
                <Title appearance="h6" color={neutralDark[500]}>
                  {question}
                </Title>
                <SolidIcon
                  icon="faCirclePlus"
                  iconColor={neutralMid[400]}
                  newClasses="h-5"
                />
              </summary>
              <Text appearance="p3" color={neutralMid[500]}>
                {answer}
              </Text>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}

'use client';
import styles from './styles.module.css';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import SolidIcon from '@/app/base/SolidIcon';
import { Overline, Title, Text } from '@/app/base/Typography';
import { Container } from '@/app/components/Foundation';

export default function Doubts({ doubts }) {
  return (
    <Container bgColor={neutralLight[200]} newClasses="py-12 lg:py-24">
      <div className="col-span-8 col-start-3">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <Overline appearance="o1" color={red[700]}>
            Suporte
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Perguntas frequentes
          </Title>
          <Text appearance="p3" color={neutralMid[500]}>
            Ainda tem dúvidas sobre o Certificado Digital?
          </Text>
        </div>
        <div>
          {doubts.map(({ question, answer }) => (
            <details
              key={question}
              className="border-b mb-6 pb-6"
              style={{ borderColor: neutralLight[400] }}
            >
              <summary
                className={`cursor-pointer flex items-center justify-between ${styles.noMarker}`}
              >
                <Title appearance="h6" color={neutralDark[500]}>
                  {question}
                </Title>
                <div
                  className="border flex h-5 items-center justify-center rounded-full w-5"
                  style={{ borderColor: neutralMid[400] }}
                >
                  <SolidIcon
                    icon="faMinus"
                    iconColor={neutralMid[400]}
                    newClasses="h-2"
                  />
                </div>
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

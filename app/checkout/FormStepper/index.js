import { red, neutralLight, success, neutralMid } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function FormStepper({ step }) {
  return (
    <Container newClasses="py-12">
      <ul className="col-span-8 col-start-3 flex items-center justify-between">
        <li>
          <div
            className="border flex h-8 items-center justify-center rounded-full w-8"
            style={{
              backgroundColor: `${
                step === 0 ? red[900] : step > 0 ? success[900] : 'transparent'
              }`,
              borderColor:
                step === 0
                  ? neutralLight[100]
                  : step > 0
                  ? neutralLight[100]
                  : neutralMid[100]
            }}
          >
            {step <= 0 && (
              <Title
                appearance="h7"
                color={
                  step === 0
                    ? neutralLight[100]
                    : step > 0
                    ? neutralLight[100]
                    : neutralMid[100]
                }
              >
                1
              </Title>
            )}
            {step > 0 && (
              <SolidIcon
                icon="faCheck"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            )}
          </div>
        </li>
        <hr className="border flex-grow mx-2" />
        <li>
          <div
            className="border flex h-8 items-center justify-center rounded-full w-8"
            style={{
              backgroundColor: `${
                step === 1 ? red[900] : step > 1 ? success[900] : 'transparent'
              }`,
              borderColor:
                step === 1
                  ? neutralLight[100]
                  : step > 1
                  ? neutralLight[100]
                  : neutralMid[100]
            }}
          >
            {step <= 1 && (
              <Title
                appearance="h7"
                color={
                  step === 1
                    ? neutralLight[100]
                    : step > 1
                    ? neutralLight[100]
                    : neutralMid[100]
                }
              >
                2
              </Title>
            )}
            {step > 1 && (
              <SolidIcon
                icon="faCheck"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            )}
          </div>
        </li>
        <hr className="border flex-grow mx-2" />
        <li>
          <div
            className="border flex h-8 items-center justify-center rounded-full w-8"
            style={{
              backgroundColor: `${
                step === 2 ? red[900] : step > 2 ? success[900] : 'transparent'
              }`,
              borderColor:
                step === 2
                  ? neutralLight[100]
                  : step > 2
                  ? neutralLight[100]
                  : neutralMid[100]
            }}
          >
            {step <= 2 && (
              <Title
                appearance="h7"
                color={
                  step === 2
                    ? neutralLight[100]
                    : step > 2
                    ? neutralLight[100]
                    : neutralMid[100]
                }
              >
                3
              </Title>
            )}
            {step > 2 && (
              <SolidIcon
                icon="faCheck"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            )}
          </div>
        </li>
        <hr className="border flex-grow mx-2" />
        <li>
          <div
            className="border flex h-8 items-center justify-center rounded-full w-8"
            style={{
              backgroundColor: `${
                step === 3 ? red[900] : step > 3 ? success[900] : 'transparent'
              }`,
              borderColor:
                step === 3
                  ? neutralLight[100]
                  : step > 3
                  ? neutralLight[100]
                  : neutralMid[100]
            }}
          >
            {step <= 3 && (
              <Title
                appearance="h7"
                color={
                  step === 3
                    ? neutralLight[100]
                    : step > 3
                    ? neutralLight[100]
                    : neutralMid[100]
                }
              >
                4
              </Title>
            )}
            {step > 3 && (
              <SolidIcon
                icon="faCheck"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            )}
          </div>
        </li>
      </ul>
    </Container>
  );
}

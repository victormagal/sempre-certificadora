import { neutralDark, neutralLight, red, neutralMid } from '@/app/base/Colors';
import { maskPhoneNumber, toCpfOrCnpj } from '@/app/base/Masks';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';
import { Field, useFormikContext } from 'formik';

export default function ContactData() {
  const { errors, values } = useFormikContext();

  return (
    <Container>
      <div className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col my-6 py-8 px-6 lg:px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Dados de contato
        </Title>
        <ul className="flex flex-col lg:flex-row mb-6 lg:space-x-6 space-y-6 lg:space-y-0">
          <li className="flex-1">
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
              CPF/CNPJ
            </Text>
            <Field
              className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
              maxLength="18"
              name="document"
              style={{
                background: neutralLight[200],
                borderColor: errors.document ? red[900] : neutralLight[400],
                color: neutralMid[500]
              }}
              type="text"
              value={toCpfOrCnpj(values.document)}
            />
            {errors.document && (
              <Text appearance="p4" className="mt-2" color={red[900]}>
                {errors.document}
              </Text>
            )}
          </li>
          <li className="flex-1">
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
              Nome completo
            </Text>
            <Field
              className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
              name="name"
              style={{
                background: neutralLight[200],
                borderColor: errors.name ? red[900] : neutralLight[400],
                color: neutralMid[500]
              }}
              type="text"
              value={values.name}
            />
            {errors.name && (
              <Text appearance="p4" className="mt-2" color={red[900]}>
                {errors.name}
              </Text>
            )}
          </li>
        </ul>
        <ul className="flex flex-col lg:flex-row mb-6 lg:space-x-6 space-y-6 lg:space-y-0">
          <li className="flex-1">
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
              Email
            </Text>
            <Field
              className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
              name="mail"
              style={{
                background: neutralLight[200],
                borderColor: errors.name ? red[900] : neutralLight[400],
                color: neutralMid[500]
              }}
              type="email"
              value={values.mail}
            />
            {errors.mail && (
              <Text appearance="p4" className="mt-2" color={red[900]}>
                {errors.mail}
              </Text>
            )}
          </li>
          <li className="flex-1">
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
              Telefone
            </Text>
            <Field
              autocomplete="off"
              className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
              maxLength="15"
              name="phone"
              style={{
                background: neutralLight[200],
                borderColor: errors.phone ? red[900] : neutralLight[400],
                color: neutralMid[500]
              }}
              type="text"
              value={maskPhoneNumber(values.phone)}
            />
            {errors.phone && (
              <Text appearance="p4" className="mt-2" color={red[900]}>
                {errors.phone}
              </Text>
            )}
          </li>
        </ul>
      </div>
    </Container>
  );
}

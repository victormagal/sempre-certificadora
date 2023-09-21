import { neutralDark, neutralMid } from '@/app/base/Colors';
import RegularIcon from '@/app/base/RegularIcon';
import { Text, Title } from '@/app/base/Typography';
import { Card } from '@/app/base/Wrappers';

export default function CardFeature({
  bgColor,
  description,
  icon,
  iconColor,
  iconSize,
  third,
  title
}) {
  return (
    <Card
      background={bgColor}
      className={`${
        third ? ' col-span-12 lg:col-span-4 ' : 'col-span-12 lg:col-span-3'
      } p-6`}
    >
      <RegularIcon icon={icon} iconColor={iconColor} newClasses={iconSize} />
      <Title appearance="h5" className="mb-2 mt-8" color={neutralDark[500]}>
        {title}
      </Title>
      <Text appearance="p3" color={neutralMid[600]}>
        {description}
      </Text>
    </Card>
  );
}

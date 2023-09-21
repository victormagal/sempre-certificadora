import * as Icon from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faInstagram: Icon.faInstagram,
    faSquareFacebook: Icon.faSquareFacebook,
    faTwitter: Icon.faTwitter
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

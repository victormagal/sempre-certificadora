import * as Icon from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegularIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faBuilding: Icon.faBuilding,
    faCircle: Icon.faCircle,
    faCircleCheck: Icon.faCircleCheck,
    faCircleDot: Icon.faCircleDot,
    faCirclePlay: Icon.faCirclePlay,
    faComments: Icon.faComments,
    faCopy: Icon.faCopy,
    faCreditCard: Icon.faCreditCard,
    faFaceSmile: Icon.faFaceSmile,
    faFaceSmileWink: Icon.faFaceSmileWink,
    faFile: Icon.faFile,
    faGem: Icon.faGem,
    faHardDrive: Icon.faHardDrive,
    faLemon: Icon.faLemon,
    faLightbulb: Icon.faLightbulb,
    faMoneyBill1: Icon.faMoneyBill1,
    faNoteSticky: Icon.faNoteSticky,
    faPaperPlane: Icon.faPaperPlane,
    faUser: Icon.faUser
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

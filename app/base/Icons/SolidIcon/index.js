import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SolidIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faCheck: Icon.faCheck,
    faChevronDown: Icon.faChevronDown,
    faChevronLeft: Icon.faChevronLeft,
    faChevronRight: Icon.faChevronRight,
    faCirclePlus: Icon.faCirclePlus,
    faDownload: Icon.faDownload,
    faFaceSmile: Icon.faFaceSmile,
    faFileLines: Icon.faFileLines,
    faLocationDot: Icon.faLocationDot,
    faMinus: Icon.faMinus,
    faPhone: Icon.faPhone,
    faPrint: Icon.faPrint,
    faStar: Icon.faStar,
    faTriangleExclamation: Icon.faTriangleExclamation
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

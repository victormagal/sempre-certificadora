import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SolidIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faBan: Icon.faBan,
    faBars: Icon.faBars,
    faCheck: Icon.faCheck,
    faChevronDown: Icon.faChevronDown,
    faChevronLeft: Icon.faChevronLeft,
    faChevronRight: Icon.faChevronRight,
    faCircleCheck: Icon.faCircleCheck,
    faCircleInfo: Icon.faCircleInfo,
    faCirclePlus: Icon.faCirclePlus,
    faDownload: Icon.faDownload,
    faFaceSmile: Icon.faFaceSmile,
    faFileLines: Icon.faFileLines,
    faLeaf: Icon.faLeaf,
    faLocationDot: Icon.faLocationDot,
    faMinus: Icon.faMinus,
    faPhone: Icon.faPhone,
    faPrint: Icon.faPrint,
    faStar: Icon.faStar,
    faTriangleExclamation: Icon.faTriangleExclamation,
    faXmark: Icon.faXmark
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

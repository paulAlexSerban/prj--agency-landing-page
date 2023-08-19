import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
import {
  BsPercent,
  BsShieldCheck,
  BsRecycle,
  BsCheck,
  BsChevronDown,
  BsEnvelopeOpen,
  BsTelephone,
} from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbArrowsShuffle } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaShapes, FaBriefcase } from "react-icons/fa";
import { RiScales3Line } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";
import LogoIcon from "@/svgs/logo-treasureicon.svg";

import styles from "@/styles/atoms/icon/icon.module.scss";

export default function Icon({ iconName, className }) {
  const icon = {
    twitter: <SlSocialTwitter className={styles.svg} />,
    facebook: <SlSocialFacebook className={styles.svg} />,
    linkedin: <SlSocialLinkedin className={styles.svg} />,
    envelope: <BsEnvelopeOpen className={styles.svg} />,

    logoIcon: <LogoIcon className={styles.svg} />,
    percent: <BsPercent className={styles.svg} />,
    customerService: <RiCustomerService2Line className={styles.svg} />,
    warranty: <BsShieldCheck className={styles.svg} />,
    flexible: <TbArrowsShuffle className={styles.svg} />,
    money: <GiReceiveMoney className={styles.svg} />,
    recycle: <BsRecycle className={styles.svg} />,
    checkMark: <BsCheck className={styles.svg} />,
    chevronDown: <BsChevronDown className={styles.svg} />,
    basic: <FaShapes className={styles.svg} />,
    standard: <RiScales3Line className={styles.svg} />,
    professional: <FaBriefcase className={styles.svg} />,
    computer: <MdOutlineComputer className={styles.svg} />,
    phone: <BsTelephone className={styles.svg} />,
  };

  return <span className={className}>{icon[iconName]}</span>;
}

import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/icon/icon.module.scss";
import { SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import LogoIcon from "@/svgs/logo-lynxit-icon.svg";
import RowLogoText from "@/svgs/logo-lynxit-icon-text.svg";

export default function Icon({iconName}) {
  const ID = useId();

  const icon = {
    twitter: <SlSocialTwitter className={styles.base} />,
    facebook: <SlSocialFacebook className={styles.base} />,
    linkedin: <SlSocialLinkedin className={styles.base} />,
    envelope: <SlEnvolope className={styles.base} />,
    rowLogoText: <RowLogoText />,
    logoIcon: <LogoIcon className={styles.base} />
  }

  return <span data-next={`${config.name}-${ID}`}>{icon[iconName]}</span>;
}

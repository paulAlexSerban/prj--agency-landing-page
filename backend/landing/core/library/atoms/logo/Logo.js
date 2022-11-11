import { useId } from "react";
import { config } from "./config";
import LogoIcon from "@/svgs/logo-lynxit-icon-text.svg";
import styles from "@/styles/_05_library/atoms/logo/logo.module.scss";

export default function Logo() {
  const ID = useId();

  return (
    <a className={styles.base}
       data-next={`${config.name}-${ID}`} href="#page-top">
      <LogoIcon className={styles.icon} />
    </a>
  );
}

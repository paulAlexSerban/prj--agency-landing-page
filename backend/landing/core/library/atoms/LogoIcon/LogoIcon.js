import { useEffect, useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/logo-icon/logo-icon.module.scss";
import Link from "next/link";
import LogoIconAtom from "./LogoIcon.atom";
import Icon from "@/atoms/Icon/Icon";

export default function LogoIcon() {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new LogoIconAtom(el));
  });

  return (
    <Link href="#page-top" replace>
      <a className={styles.base} data-next={`${config.name}-${ID}`}>
        <Icon iconName="rowLogoText" />
      </a>
    </Link>
  );
}

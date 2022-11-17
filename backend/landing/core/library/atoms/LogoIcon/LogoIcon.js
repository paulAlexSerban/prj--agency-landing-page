import { useEffect, useId } from "react";
import Link from "next/link";

import config from "./config";
import Icon from "@/core/atoms/Icon/Icon";

import styles from "@/styles/atoms/logo-icon/logo-icon.module.scss";
import LogoIconAtom from "./LogoIcon.atom";

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

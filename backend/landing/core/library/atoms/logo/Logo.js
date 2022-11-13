import { useEffect, useId } from "react";
import { config } from "./config";
import LogoIcon from "@/svgs/logo-lynxit-icon-text.svg";
import styles from "@/styles/_05_library/atoms/logo/logo.module.scss";
import Link from "next/link";
import { LogoAtom } from "./Logo.atom";

export default function Logo() {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new LogoAtom(el));
  });

  return (
    <Link href="#page-top" replace>
      <a className={styles.base} data-next={`${config.name}-${ID}`}>
        <LogoIcon className={styles.icon} />
      </a>
    </Link>
  );
}

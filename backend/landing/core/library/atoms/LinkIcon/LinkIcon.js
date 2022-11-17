import { useEffect, useId } from "react";
import config from "./config";
import styles from "@/styles/atoms/link-icon/link-icon.module.scss";
import Link from "next/link";
import Icon from "@/core/atoms/Icon/Icon";

export default function LinkIcon({iconHref = '', iconName = 'logoIcon'}) {
  const ID = useId();

  return (
    <Link href={iconHref}>
      <a className={styles.base} data-next={`${config.name}-${ID}`}>
        <Icon iconName={iconName}/>
      </a>
    </Link>
  );
}

import { useEffect, useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/atoms/link-icon/link-icon.module.scss";
import Link from "next/link";
import Icon from "@/atoms/Icon/Icon";

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

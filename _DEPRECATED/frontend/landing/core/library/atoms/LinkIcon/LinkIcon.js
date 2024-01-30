import styles from "@/styles/atoms/link-icon/link-icon.module.scss";
import Link from "next/link";
import Icon from "@/core/atoms/Icon/Icon";

export default function LinkIcon({ iconHref = "", iconName = "logoIcon" }) {
  return (
    <Link href={iconHref} legacyBehavior>
      <a className={styles.base}>
        <Icon iconName={iconName} />
      </a>
    </Link>
  );
}

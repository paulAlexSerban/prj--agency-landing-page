import { useId } from "react";
import { config } from "./config";
import styles from "@/styles/_05_library/molecules/navigation-list/navigation-list.module.scss";
import Link from "next/link";
import linkStyles from "@/styles/_05_library/atoms/link/link.module.scss";

export default function NavigationList({ list = [] }) {
  const ID = useId();
  return (
    <ul data-next={`${config.name}-${ID}`} className={`${styles.base} js-nav-list`}>
      {list.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <Link href={`#${item.href}`} replace scroll={false}>
              <a className={`${linkStyles.large} js-nav-link`}> {item.label.toUpperCase()}</a>
            </Link>
          </li>);
      })}
    </ul>
  );
}

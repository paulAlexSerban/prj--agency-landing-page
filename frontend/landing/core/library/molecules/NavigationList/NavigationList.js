import { useId } from "react";
import Link from "next/link";
import config from "./config";
import styles from "@/styles/molecules/navigation-list/navigation-list.module.scss";
import linkStyles from "@/styles/atoms/link/link.module.scss";

export default function NavigationList({ list = [] }) {
  const ID = useId();
  return (
    <ul
      data-next-cmp={`${config.name}-${ID}`}
      className={`${styles.base} js-nav-list`}
    >
      {list.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <Link href={`#${item.href}`} replace scroll={false}>
              <a className={`${linkStyles.large} js-nav-link`}>
                {" "}
                {item.label.toUpperCase()}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

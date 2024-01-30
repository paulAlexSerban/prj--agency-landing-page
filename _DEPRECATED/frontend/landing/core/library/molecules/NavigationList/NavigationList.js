import styles from "@/styles/molecules/navigation-list/navigation-list.module.scss";
import linkStyles from "@/styles/atoms/link/link.module.scss";

export default function NavigationList({ list = [], handleMenuToggle }) {
  return (
    <ul className={`${styles.base} js-nav-list`}>
      {list.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <a
              className={`${linkStyles.large} js-nav-link`}
              href={`#${item.href}`}
              onClick={handleMenuToggle}
            >
              {item.label.toUpperCase()}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

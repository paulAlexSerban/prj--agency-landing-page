import { useId } from "react";
import config from "./config";
import styles from "@/styles/molecules/social-media-list/social-media-list.module.scss";
import LinkIcon from "@/core/atoms/LinkIcon/LinkIcon";

export default function SocialMediaList({ list = [] }) {
  const ID = useId();

  return (
    <ul className={styles.base} data-next-cmp={`${config.name}-${ID}`}>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <LinkIcon iconHref={item.href} iconName={item.name} />
          </li>
        );
      })}
    </ul>
  );
}

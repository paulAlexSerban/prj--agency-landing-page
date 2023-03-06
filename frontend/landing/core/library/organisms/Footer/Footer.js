import config from "./Footer.config";

import { useId } from "react";
import styles from "@/styles/organisms/footer/footer.module.scss";

import Copyright from "@/core/molecules/Copyright/Copyright";
import SocialMediaList from "@/core/molecules/SocialMediaList/SocialMediaList";

export default function Footer({ socialMediaList = [] }) {
  const ID = useId();
  return (
    <footer
      className={styles.base}
      id="footer"
      data-next-cmp={`${config.name}-${ID}`}
    >
      <SocialMediaList list={socialMediaList} />
      <Copyright />
    </footer>
  );
}

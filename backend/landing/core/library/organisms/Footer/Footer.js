import config from "./Footer.config";

import { useId } from "react";
import styles from "@/styles/organisms/footer/footer.module.scss";

import Copyright from "@/core/molecules/Copyright/Copyright";
import SocialMediaList from "@/core/molecules/SocialMediaList/SocialMediaList";

export default function Footer() {
  const ID = useId();

  const socialMedia = [
    {
      name: "twitter",
      href: "http://twitter.com",
      label: "Twitter",
    },
    {
      name: "facebook",
      href: "http://facebook.com",
      label: "Facebook",
    },
    {
      name: "linkedin",
      href: "http://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className={styles.base} id="footer" data-next-cmp={`${config.name}-${ID}`}>
      <SocialMediaList list={socialMedia} />
      <Copyright />
    </footer>
  );
}

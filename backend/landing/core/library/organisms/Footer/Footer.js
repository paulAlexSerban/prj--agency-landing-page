import { config } from "./Footer.config";
import { SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import { useId } from "react";
import styles from "@/styles/_05_library/organisms/footer/footer.module.scss";

export default function Footer() {
  const ID = useId();
  const date = new Date();
  return (
    <footer className={styles.base} id="footer" data-next={`${config.name}-${ID}`}>
      <ul className={styles.iconList}>
        <li className={styles.iconListItem}>
          <a href="#" className="icon brands alt fa-twitter">
            <SlSocialTwitter className={styles.icon}/>
          </a>
        </li>
        <li className={styles.iconListItem}>
          <a href="#" className="icon brands alt fa-facebook-f">
            <SlSocialFacebook className={styles.icon}/>
          </a>
        </li>
        <li className={styles.iconListItem}>
          <a href="#" className="icon brands alt fa-linkedin-in">
            <SlSocialLinkedin className={styles.icon}/>
          </a>
        </li>
        <li className={styles.iconListItem}>
          <a href="#" className="icon brands alt fa-linkedin-in">
            <SlEnvolope className={styles.icon}/>
          </a>
        </li>
      </ul>
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>{date.getFullYear()} &copy; LynxIT</p>
      </div>
    </footer>
  );
}

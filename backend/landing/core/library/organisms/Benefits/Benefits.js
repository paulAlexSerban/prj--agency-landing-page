import { useEffect, useId } from "react";
import config from "./config";
import styles from "@/styles/organisms/benefits/benefits.module.scss";
import { SlDirections } from "react-icons/sl";
import { BsShieldCheck, BsPercent, BsRecycle, BsFileEarmark, BsClock } from "react-icons/bs";
import { BenefitsOrganism } from "./Benefits.organism";

export default function Benefits() {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next-cmp="${config.name}-${ID}"]`).forEach((el) => new BenefitsOrganism(el).init());
  });

  return (
    <section className={`${styles.base} ${styles.inactive}`} data-next-cmp={`${config.name}-${ID}`}>
      <div className={`${styles.container} container`}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            <span className={styles.mainHeading}>Accumsan sed tempus adipiscing blandit</span>
            <span className={styles.subheading}>
              Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat
            </span>
          </h2>
        </header>
        <div className={styles.content}>
          <section className={styles.benefitItem}>
            <SlDirections className={styles.icon} />
            <h3>Ipsum sed commodo</h3>
            <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </section>
          <section className={styles.benefitItem}>
            <BsShieldCheck className={styles.icon} />
            <h3>Eleifend lorem ornare</h3>
            <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </section>
          <section className={styles.benefitItem}>
            <BsPercent className={styles.icon} />
            <h3>Cubilia cep lobortis</h3>
            <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </section>
          <section className={styles.benefitItem}>
            <BsRecycle className={styles.icon} />
            <h3>Non semper interdum</h3>
            <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </section>
          <section className={styles.benefitItem}>
            <BsFileEarmark className={styles.icon} />
            <h3>Odio laoreet accumsan</h3>
            <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </section>
          <section className={styles.benefitItem}>
            <BsClock className={styles.icon} />
            <h3>Massa arcu accumsan</h3>
            <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
          </section>
        </div>
        <footer className={styles.footer}>
          {/* <a href="#" className={styles.button}>
            Call to action!
          </a> */}
        </footer>
      </div>
    </section>
  );
}

import { config } from "./Spotlight.config";
import { useEffect, useId } from "react";
import styles from "@/styles/_05_library/organisms/spotlight/spotlight.module.scss";
import ChevronDown from "@/svgs/chevron-down.svg";
import { SpotlightOrganism } from "./Spotlight.organism";

export default function Spotlight({ position, imageSrc }) {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new SpotlightOrganism(el).init());
  });

  return (
    <section
      data-next={`${config.name}-${ID}`}
      id="one"
      className={`${styles.base} ${styles[position]} ${styles.inactive} style1 bottom`}
      style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <header className={styles.header}>
                <h2>Echipamente IT recondiționate oferite sub formă "tech-as-a-Service"</h2>
              </header>
            </div>
            <div className="col-12 col-md-4">
              <p className={styles.text}>
                Din ce în ce mai multe companii aleg să închirieze echipamente IT. Motivele încep de la deductibilitatea
                costurilor pentru a păstra lichiditățile înspre investirea în domeniul de activitate și ajung la
                simplificarea gestiunii pentru echipamente IT. Antreprenorul modern dorește să se concentreze pe
                afacerea sa pentru a crește profitul și alege soluții simple pentru toate domeniile adiacente. Fie că ai
                pornit acum la drum sau ai un business care funcționează deja, nu vrei să investești timp și bani în ce
                nu aduce profit direct în afacerea ta.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className={styles.text}>
                Costurile pentru IT sunt clare și simplu de gestionat. Un singur contract cu o singură taxă per angajat,
                aceasta claritate aduce scalabilitate afacerii tale și te ține in controlul costurilor. Fie că ai un
                eveniment unde ai nevoie de echipamente pentru o echipa temporară, fie că ai angajați pe perioadă
                determinată, închirierea este soluția pentru tine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" className={`${styles.goToNext}`}>
        <ChevronDown className={styles.svg} />
      </a>
    </section>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faShoppingCart, faLaptop, faLock, faRecycle, faShuffle, faShieldHeart, faPercent } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="page-section bg-light" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Beneficii</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon className="fa-stack-2x text-primary" icon={faCircle} />
              <FontAwesomeIcon className="fa-stack-1x fa-inverse" icon={faPercent} />
            </span>
            <h4 className="my-3">Cost 100% deductibil</h4>
            <p className="text-muted">
            Costurile aferente chiriei pentru echipamente IT sunt 100% deductibile. Achiziția de echipamente IT solicita investiție majora si perioada lunga de deducere a cheltuielilor. Alege opțiunea de închiriere si investește in afacerea ta, nu in mijloacele necesare pentru activitatea de zi cu zi.
            </p>
          </div>
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon className="fa-stack-2x text-primary" icon={faCircle} />
              <FontAwesomeIcon className="fa-stack-1x fa-inverse" icon={faShieldHeart} />
            </span>
            <h4 className="my-3">Garantie pe viața</h4>
            <p className="text-muted">
            Beneficiezi de garanție pentru toata perioada contractului cu noi. Mai mult decât atât ai parte de serviciul pick-up and return pentru echipamentul defect. Pe perioada in care acesta este in service îți punem la dispoziție unul de schimb cu aceleași specificații tehnice. Daca echipamentul este avariat din vina ta atunci nu îți vom factura decât piesele de schimb, manopera e din partea noastră.
            </p>
          </div>
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon className="fa-stack-2x text-primary" icon={faCircle} />
              <FontAwesomeIcon className="fa-stack-1x fa-inverse" icon={faShuffle} />
            </span>
            <h4 className="my-3">Contract flexibil</h4>
            <p className="text-muted">
            Ai nevoie de echipamente IT pentru o perioada determinata? Nici o problema. Poți încheia cu noi o colaborare pe o perioada de la 1 zi la 12 luni.
            </p>
          </div>
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon className="fa-stack-2x text-primary" icon={faCircle} />
              <FontAwesomeIcon className="fa-stack-1x fa-inverse" icon={faRecycle} />
            </span>
            <h4 className="my-3">Buy back</h4>
            <p className="text-muted">
            Ai decis sa alegi serviciile noastre însa ai deja o flota de echipamente pe care dorești sa o monetizeze? Nici o problema. Noi îți facem o oferta de buy-back pentru cele vechi si poți folosi fondurile pentru a achita elemente ale noului contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

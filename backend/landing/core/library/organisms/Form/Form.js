import { useEffect, useId } from "react";
import { config } from "./Form.config";
import styles from "@/styles/_05_library/organisms/form/form.module.scss";
import { FormOrganism } from "./Form.organism";

export default function Form() {
  const ID = useId();

  useEffect(() => {
    document.querySelectorAll(`[data-next="${config.name}-${ID}"]`).forEach((el) => new FormOrganism(el).init());
  });

  return (
    <form className={`${styles.base} ${styles.inactive}`} data-next={`${config.name}-${ID}`}>
      <div className={`${styles.container} container`}>
        <h3>Form</h3>
        <form method="post" action="#">
          <div className="row gtr-uniform gtr-50">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" value="" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" value="" placeholder="Email" />
            </div>
            <div className="col-12">
              <select name="category" id="category">
                <option value="">- Category -</option>
                <option value="1">Manufacturing</option>
                <option value="1">Shipping</option>
                <option value="1">Administration</option>
                <option value="1">Human Resources</option>
              </select>
            </div>
            <div className="col-4 col-12-medium">
              <input type="radio" id="priority-low" name="priority" checked />
              <label for="priority-low">Low Priority</label>
            </div>
            <div className="col-4 col-12-medium">
              <input type="radio" id="priority-normal" name="priority" />
              <label for="priority-normal">Normal Priority</label>
            </div>
            <div className="col-4 col-12-medium">
              <input type="radio" id="priority-high" name="priority" />
              <label for="priority-high">High Priority</label>
            </div>
            <div className="col-6 col-12-medium">
              <input type="checkbox" id="copy" name="copy" />
              <label for="copy">Email me a copy of this message</label>
            </div>
            <div className="col-6 col-12-medium">
              <input type="checkbox" id="human" name="human" checked />
              <label for="human">I am a human and not a robot</label>
            </div>
            <div className="col-12">
              <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" className="primary" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </form>
  );
}

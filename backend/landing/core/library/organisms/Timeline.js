/** Timeline
 * - The timeline displays a list of events in chronological order.
 * - The timeline component can be used to show series of data in a chronological
 * order for use cases such as activity feeds, user actions, application updates, and more.
 *
 * Read more:
 * - https://mui.com/material-ui/react-timeline/
 * - https://flowbite.com/docs/components/timeline/
 */

export default function Timeline() {
  return (
    <section className="page-section bg-light" id="how_it_works">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Cum funcționează</h2>
          {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="about/1.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                {/* <h4>March 2011</h4> */}
                <h4 className="subheading">Request an offer here</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                  reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                  laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="about/2.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                {/* <h4>March 2011</h4> */}
                <h4 className="subheading">Select contract period and devices</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                  reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                  laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="about/3.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                {/* <h4>December 2015</h4> */}
                <h4 className="subheading">Sign the contract</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                  reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                  laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="about/4.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                {/* <h4>July 2020</h4> */}
                <h4 className="subheading">Deliver devices in max 3 working days</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                  reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                  laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="about/3.jpg" alt="..." />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                {/* <h4>December 2015</h4> */}
                <h4 className="subheading">Pay the invoice and enjoy the flexibility</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam
                  reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                  laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

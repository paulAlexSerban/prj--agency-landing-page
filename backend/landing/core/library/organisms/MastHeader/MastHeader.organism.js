
import { parallax } from "core/plugins/parallax";
import { breakpoints } from "core/plugins/breakpoints";
import Component from "../../../Component";

export class MastHeaderOrganism extends Component {
  constructor(el) {
    super(el);
  }

  #setupPlugins () {
    super.register(breakpoints);
    super.register(parallax);
  }

  #initPlugins() {
    const breakpoints = this.plugins.breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		})
    const parallax = this.plugins.parallax(this.el, breakpoints);
  }

  init() {
    this.#setupPlugins();
    this.#initPlugins();
  }
};

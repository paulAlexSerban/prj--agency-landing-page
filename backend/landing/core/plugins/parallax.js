export const parallax = {
  name: "parallax",
  exec: (el, breakpointsPlugin) => {
    const on = (elm) => {
      elm.style.backgroundPosition = "center 0px";

      window.addEventListener("scroll", () => {
        const pos = parseInt(window.scrollY) - parseInt(elm.offsetTop);
        elm.style.backgroundPosition = `center ${(pos * -0.35)}px`;
      });
    }

    const off = () => {
      // off logic not implemented yet
    }

    const init = () => {
      setupEventListeners();
      // breakpoints.on("<=medium", () => {
      //   this.off(el);
      // });
      breakpointsPlugin.on(">tablet", () => {
        on(el);
      });
      on(el);
    }

    const setupEventListeners = () => {
      window.addEventListener("resize", () => {
        window.dispatchEvent(new CustomEvent("scroll"));
      });

      window.addEventListener("load", () => {
        window.dispatchEvent(new CustomEvent("scroll"));
      });
    }

    init();
  }
}
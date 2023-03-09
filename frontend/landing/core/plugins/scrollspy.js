export const scrollSpy = {
  name: "scrollSpy",
  exec: (el, styles) => {
    const init = () => {
      setupEventListeners();
    };

    const setupEventListeners = () => {
      window.addEventListener("scroll", () => {
        showElm();
      });
    };

    const showElm = () => {
      const triggerBottom = (window.innerHeight / 6) * 4;

      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.remove(styles.inactive);
      } else {
        el.classList.add(styles.inactive);
      }
    };

    init();
    showElm();
  },
};

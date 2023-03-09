export const smoothScroll = {
  name: "smoothScroll",
  exec: () => {
    const on = (trigger, jsHook) => {
      let scrollToEl;
      const triggerEl = trigger.closest(`.${jsHook}`);
      const targetEl = (
        triggerEl.getAttribute("href") || triggerEl.getAttribute("target")
      )
        .split("#")
        .pop();
      scrollToEl = document.getElementById(targetEl);
      scrollToEl.scrollIntoView({ behavior: "smooth" }, true);
    };
    return {
      on,
    };
  },
};

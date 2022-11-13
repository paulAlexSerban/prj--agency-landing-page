export const smoothScroll = {
  name: "smoothScroll",
  exec: () => {
    const on = (trigger) => {
      let scrollToEl;
      if (trigger.tagName === "A") {
        scrollToEl = document.getElementById(trigger.href.split("#").pop());
      } else {
        scrollToEl = document.getElementById(trigger.closest("a").href.split("#").pop());
      }
      scrollToEl.scrollIntoView({ behavior: "smooth" }, true);
    };
    return {
      on,
    };
  },
};

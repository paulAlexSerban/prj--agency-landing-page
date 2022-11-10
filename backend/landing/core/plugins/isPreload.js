// export const isPreload = (container = document.querySelector("body"), classNames = []) => {
//   window.setTimeout(() => {
//     classNames = ["is-preload", ...classNames]
//     classNames.forEach(cls => {
//       container.classList.remove(cls);
//     })

//   }, 300);
// };

export const isPreload = {
  name: "isPreload",
  exec: (container = document.querySelector("body"), classNames = []) => {
    window.setTimeout(() => {
      classNames = ["is-preload", ...classNames];
      classNames.forEach((cls) => {
        container.classList.remove(cls);
      });
    }, 300);
  },
};

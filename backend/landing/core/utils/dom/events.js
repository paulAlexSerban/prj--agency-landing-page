/**
 * Adds the given class to the element
 * @param {string} className
 * @param {HTMLElement} el
 */

export const noBubbling = (e, fn) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

  if (fn) fn(e);
};

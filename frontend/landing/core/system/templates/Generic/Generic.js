import styles from "@/styles/templates/generic/generic.module.scss";
import { useEffect, useRef } from "react";

export default function Generic({ children, preloadClasses = [] }) {
  const templateRef = useRef(null);

  useEffect(() => {
    const classNames = ["isPreload", ...preloadClasses];
    window.setTimeout(() => {
      classNames.forEach((cls) => {
        templateRef.current.classList.remove(cls);
      });
    }, 300);
  });

  return (
    <div
      id="page-top"
      className={[styles.base, ...preloadClasses].join(" ")}
      ref={templateRef}
    >
      {children}
    </div>
  );
}

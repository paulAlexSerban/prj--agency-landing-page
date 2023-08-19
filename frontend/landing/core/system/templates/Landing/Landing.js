import styles from "@/styles/templates/landing/landing.module.scss";
import { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  style: ["normal"],
});

export default function Landing({ children, preloadClasses = [] }) {
  const templateRef = useRef(null);

  useEffect(() => {
    const classNames = ["isPreload", ...preloadClasses];
    window.setTimeout(() => {
      requestAnimationFrame(() => {
        classNames.forEach((cls) => {
          templateRef.current.classList.remove(cls);
        });
      });
    }, 300);
  });

  return (
    <div
      id="page-top"
      className={[styles.base, ...preloadClasses, montserrat.className].join(
        " "
      )}
      ref={templateRef}
    >
      {children}
    </div>
  );
}

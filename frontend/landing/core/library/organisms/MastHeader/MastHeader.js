import styles from "@/styles/organisms/masthead/masthead.module.scss";
import { useEffect, useState, useRef } from "react";
import IMAGE_RENDITIONS from "@/utils/constants/image-renditions";

// export default function MastHeader({ children, image }) {
//   const headerRef = useRef(null);
//   const imagePath = `images/${image}`;
//   const [windowWidth, setWindowWidth] = useState(320);
//   const [imageRendition, setImageRendition] = useState(320);
//   const [dpr, setDpr] = useState(1);
//   const [backgroundPosition, setBackgroundPosition] = useState("center 0px");
//   const imageRenditionPaths = {};

//   const handleWindowEvent = () => {
//     setWindowWidth(
//       Math.max(document.documentElement.clientWidth, window.innerWidth) * dpr
//     );
//     const isCorrectRendition = Boolean(windowWidth <= imageRendition);
//     if (!isCorrectRendition) {
//       let correctRendition = IMAGE_RENDITIONS.find((width) => {
//         return width > windowWidth;
//       });
//       if (correctRendition) {
//         setImageRendition(correctRendition);
//       } else {
//         setImageRendition("original");
//       }
//     }
//   };

//   const setEventListeners = () => {
//     window.addEventListener("resize", () => {
//       handleWindowEvent();
//     });
//     window.addEventListener("orientationchange", () => {
//       handleWindowEvent();
//     });
//     window.addEventListener("load", () => {
//       handleWindowEvent();
//     });
//     window.addEventListener("fullscreenchange", () => {
//       handleWindowEvent();
//     });
//   };

//   const setupParallax = () => {
//     const el = headerRef.current

//     window.addEventListener("scroll", () => {
//       const pos = parseInt(window.scrollY) - parseInt(el.offsetTop);
//       setBackgroundPosition(`center ${pos * -0.35}px`);
//       console.log(backgroundPosition)
//     })
//   };

//   useEffect(() => {
//     IMAGE_RENDITIONS.forEach(
//       (rendition) =>
//         (imageRenditionPaths[rendition] = `${imagePath}-${rendition}`)
//     );
//     setDpr(window.devicePixelRatio);
//     handleWindowEvent();
//     setEventListeners();
//     setupParallax()
//   });

//   return (
//     <header
//       ref={headerRef}
//       className={styles.base}
//       style={{ "--image-src": `url(/images/${image}-${imageRendition}.webp)`, backgroundPosition }}
//     >
//       <div className={`${styles.container}`}>{children}</div>
//     </header>
//   );
// }

export default function MastHeader({ children, image }) {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    let yOffset = 0;

    const handleScroll = () => {
      yOffset = window.pageYOffset;
      imageRef.current.style.transform = `translateY(${yOffset * 0.38}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.base} ref={headerRef}>
      <picture className={styles.picture}>
        <source
          media="(min-width: 1080px)"
          srcSet={`images/${image}-1440.webp 1x, images/${image}-2880.webp 2x`}
        />
        <source
          media="(min-width: 960px)"
          srcSet={`images/${image}-1080.webp 1x, images/${image}-2040.webp 2x`}
        />
        <source
          media="(min-width: 640px)"
          srcSet={`images/${image}-960.webp 1x, images/${image}-1920.webp 2x`}
        />
        <img
          className={styles.image}
          ref={imageRef}
          src={`images/${image}-960.webp`}
          alt="Background"
          loading="lazy"
        />
      </picture>
      <div className={styles.container}>{children}</div>
    </header>
  );
}

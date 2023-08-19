import { useEffect, useRef, useMemo } from "react";
import styles from "@/styles/molecules/parallax-image/parallax-image.module.scss";
export default function ParallaxImage({ image, speed = 20, s3KeyPrefix }) {
  const imageRef = useRef(null);
  const yOffsetRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = imageRef.current?.getBoundingClientRect()?.top;
      yOffsetRef.current = yOffset;
      requestAnimationFrame(() => {
        const safeSpeed =
          (((imageRef.current?.clientHeight / (100 + speed)) * speed) /
            imageRef.current?.clientHeight) *
          -1;
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${
            yOffsetRef?.current * safeSpeed
          }px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageRef]);

  const srcSets = useMemo(() => {
    return [
      {
        media: "(min-width: 1920px)",

        webp: `${s3KeyPrefix}/${image}-3840.webp 1x, ${s3KeyPrefix}/${image}-3840.webp 2x`,
      },
      {
        media: "(min-width: 1600px) and (max-width: 1919px)",

        webp: `${s3KeyPrefix}/${image}-1920.webp 1x, ${s3KeyPrefix}/${image}-3840.webp 2x`,
      },
      {
        media: "(min-width: 1280px) and (max-width: 1599px)",

        webp: `${s3KeyPrefix}/${image}-1600.webp 1x, ${s3KeyPrefix}/${image}-3200.webp 2x`,
      },
      {
        media: "(min-width: 960px) and (max-width: 1279px)",

        webp: `${s3KeyPrefix}/${image}-1280.webp 1x, ${s3KeyPrefix}/${image}-2560.webp 2x`,
      },
      {
        media: "(min-width: 480px) and (max-width: 959px)",
        webp: `${s3KeyPrefix}/${image}-960.webp 1x, ${s3KeyPrefix}/${image}-1920.webp 2x`,
      },
      {
        media: "(max-width: 479px)",
        webp: `${s3KeyPrefix}/${image}-480.webp 1x, ${s3KeyPrefix}/${image}-960.webp 2x`,
      },
    ];
  });

  return (
    <picture className={styles.picture} style={{ "--scale": `1${speed}%` }}>
      {srcSets.map((set, index) => {
        return (
          <source
            key={index}
            type="image/avif"
            media={set.media}
            srcSet={set.avif}
          />
        );
      })}

      {srcSets.map((set, index) => {
        return (
          <source
            key={index}
            type="image/webp"
            media={set.media}
            srcSet={set.webp}
          />
        );
      })}
      <img
        className={styles.image}
        ref={imageRef}
        src={`${s3KeyPrefix}/${image}-960.webp`}
        alt="Background image."
        loading="lazy"
      />
    </picture>
  );
}

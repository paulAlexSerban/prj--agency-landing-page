import { useId, useEffect, useState, useRef, useCallback } from "react";
import styles from "@/styles/molecules/product-card/product-card.module.scss";
import Heading from "@/core/atoms/Heading/Heading";
import Paragraph from "@/core/atoms/Paragraph/Paragraph";
import Icon from "@/core/atoms/Icon/Icon";
import { createPortal } from "react-dom";
import Modal from "@/core/molecules/Modal/Modal";
import ProductDetails from "@/core/molecules/ProductDetails/ProductDetails";
import Button from "@/core/atoms/Button/Button";

export default function ProductCard({
  iconName,
  heading,
  text,
  description,
  id,
  modalContainer,
  modalContent,
}) {
  const ID = useId();
  const [mounted, setMounted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const cardRef = useRef(null);

  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      setOpenModal(!openModal);
    },
    [openModal]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.base} id={ID}>
      <div className={styles.content} ref={cardRef} onClick={handleClick}>
        <Icon className={styles.icon} iconName={iconName} />
        <Heading className={styles.heading} level={4} mainText={heading} />
        {text && <Paragraph className={styles.text} text={text} />}
      </div>
      {mounted && modalContainer.current && openModal
        ? createPortal(
            <Modal
              controlledBy={ID}
              isOpen={openModal}
              handleClose={handleClick}
            >
              <Heading mainText={heading} hasSeparator />
              <Paragraph text={description} />
              <ProductDetails content={modalContent} />
              <div className={styles.controlContainer}>
                <Button
                  label="Contacteaza-ne!"
                  buttonStyle="primary"
                  buttonType="cta"
                  target="#contact"
                  onClick={handleClick}
                />
              </div>
            </Modal>,
            modalContainer.current
          )
        : null}
    </div>
  );
}

import React from "react";
import styles from "./modal.module.css";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => {
          console.log("closing modal");
          setIsOpen(false);
        }}
      />
      <div className={styles.centered}>
        <div
          className={`${styles.modal} ${setIsOpen(true)} ? ${styles.open} : ${
            styles.close
          }`}
        >
          <div className={styles.modalHeader}>
            <h3 className={styles.heading}>Do you want this meal?</h3>
          </div>
          <div className={styles.modalContent}>
            <h2>DELIVERY AVAILABLE!</h2>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => {
                  setIsOpen(false);
                  console.log("fuck");
                }}
              >
                Go back
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => {
                  alert("Meal checked! Food will be on your way soon");
                  setInterval(setIsOpen(false), 1000);
                }}
              >
                Order meal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

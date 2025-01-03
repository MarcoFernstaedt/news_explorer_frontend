import React from "react";
import { useEscape } from "../../hooks/useEscape";
import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, buttonText, onClose, onSubmit }) => {
  useEscape(onClose);

  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close" onClose={onClose}></button>
        <h3 className="modal__title">{title}</h3>
        <form action="" className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

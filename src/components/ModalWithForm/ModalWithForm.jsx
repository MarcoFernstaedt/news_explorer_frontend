import React from "react";

const ModalWithForm = ({ children, title, buttonText, onClose, onSubmit }) => {
  return (
    <div
      title={title}
      buttonText={buttonText}
      onClose={onClose}
      onSubmit={onSubmit}
      className="modal"
    >
      <div className="modal__container">
        <h3 className="modal__title">{title}</h1>
        <form action="" className="modal__form">
          {children}
          <button type='submit' className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

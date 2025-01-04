import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ title, buttonText, secondaryBtnText, onClose, onSubmit }) => {
  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      secondaryBtnText={secondaryBtnText}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label htmlFor="email" className="modal__label">Email</label>
      <input
        className="modal__input"
        type="email"
        name="email"
        id="email"
        minLength="2"
        maxLength="100"
        placeholder="Enter email"
      />

      <label htmlFor="password" className="modal__label">Password</label>
      <input
        className="modal__input"
        type="password"
        name="password"
        id='password'
        minLength="2"
        maxLength="100"
        placeholder="Enter password"
      />
    </ModalWithForm>
  );
};

export default LoginModal;

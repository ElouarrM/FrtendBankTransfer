// Modal.js
import React from "react";
import "./style.css";

const Modal = ({ isOpen, onClose, transferInfo }) => {
  if (!isOpen) return null;

  const randomAmount = Math.floor(Math.random() * 80001);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Détails du transfert</h2>
        <p>
          <strong>Référence</strong> : {transferInfo.reference}
        </p>
        <p>
          {" "}
          <strong>Nom du bénéficiaire</strong> : {transferInfo.beneficiaryName}
        </p>
        <p>
          <strong>Prénom du bénéficiaire </strong> :{" "}
          {transferInfo.beneficiaryLastName}
        </p>
        <p>
          <strong>Montant:</strong> {randomAmount} <strong>DH</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default Modal;

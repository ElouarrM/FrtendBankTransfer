import React, { useState } from "react";
import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TransferForm = ({ onSubmit }) => {
  const [reference, setReference] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [beneficiaryLastName, setBeneficiaryLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reference, beneficiaryName, beneficiaryLastName });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Reference de Transfert:
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </label>
      <label>
        Nom du bénéficiaire:
        <input
          type="text"
          value={beneficiaryName}
          onChange={(e) => setBeneficiaryName(e.target.value)}
        />
      </label>
      <label>
        Prénom du bénéficiaire:
        <input
          type="text"
          value={beneficiaryLastName}
          onChange={(e) => setBeneficiaryLastName(e.target.value)}
        />
      </label>
      <button type="submit"
       >Visualiser le transfert</button>
    </form>
    </>
  );
};

export default TransferForm;

import React, { useState } from "react";
import bgImage from "../assets/images/bg_image.png";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Button, Modal } from "react-bootstrap";

const SendTransferScreen = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [reference, setReference] = useState("");

  const handleFinishTransfer = async () => {
    try {
      // Simulate API call or fetch data from backend
      const generatedReference = "A1234"; // Replace this with generated reference from the backend
      setReference(generatedReference);
      setShowSuccessModal(true);
    } catch (error) {
      setShowErrorModal(true);
    }
  };
  {
    /* 
  const handleFinishTransfer = async () => {
    try {
      const response = await fetch(
        "http://localhost:8070/sendtransfert/consoleAgent"
      );
      const data = await response.json();

      if (response.ok) {
        const { referenceId } = data;
        setReference(referenceId);
        setShowSuccessModal(true);
      } else {
        setShowErrorModal(true);
        throw new Error("Error occurred during the transfer.");
      }
    } catch (error) {
      // Handle API call failure
      setShowErrorModal(true);
      throw new Error("Error occurred during the transfer.");
    }
  };

 */
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setReference("");
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
    <Header/>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#031F45",
        color: "white",
        overflow: "hidden", // Remove scroll bars
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: "60px",
          background: "#031F45",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "calc(50% - 80px)", // Adjusted width
            padding: "20px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            marginLeft: "60px", // Margin on the left side
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            {/* Title */}
            <h2 style={{ marginBottom: "0px", color: "#031F45" }}>
              Envoyer un Transfert
            </h2>
          </div>

          {/* Transfer form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <label htmlFor="type_transfer">Type de Transfert</label>
            <input
              type="text"
              id="type_transfer"
              style={{
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }} // Increased input height
              placeholder="Entrez le type de transfert"
            />

            <label htmlFor="type_frais">Type de Frais</label>
            <input
              type="text"
              id="type_frais"
              style={{
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }} // Increased input height
              placeholder="Entrez le type de frais"
            />

            <label htmlFor="nom_beneficiaire">Nom du Bénéficiaire</label>
            <input
              type="text"
              id="nom_beneficiaire"
              style={{
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }} // Increased input height
              placeholder="Entrez le nom du beneficiaire"
            />

            <label htmlFor="prenom_beneficiaire">Prénom du Bénéficiaire</label>
            <input
              type="text"
              id="prenom_beneficiaire"
              style={{
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }} // Increased input height
              placeholder="Entrez le prenom du beneficiaire"
            />

            <label htmlFor="montant">Montant</label>
            <input
              type="float"
              id="montant"
              style={{
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }} // Increased input height
              placeholder="Entrez le montant a envoyer"
            />

            <label htmlFor="gsm_beneficiaire">GSM du Bénéficiaire</label>
            <input
              type="text"
              id="gsm_beneficiaire"
              style={{
                height: "25px",
                marginBottom: "10px",
                marginTop: "10px",
              }} // Increased input height
              placeholder="Entrez le numero telephone "
            />

            {/* Add button */}
            <button
              style={{
                background: "#031F45",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={handleFinishTransfer}
            >
              Finir le transfert
            </button>
          </form>
        </div>
        <div style={{ flex: "1", marginLeft: "60px" }}>
          <img
            src={bgImage}
            alt="bank"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
      <Modal
        show={showSuccessModal}
        onHide={closeSuccessModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          zIndex: 9999,
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Transfert est fait avec succès</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Transfert est fait avec succès.</p>
          {reference && <p>Référence : {reference}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeSuccessModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal
        show={showErrorModal}
        onHide={closeErrorModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          zIndex: 9999,
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Erreur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Il y a une erreur, réessayez!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeErrorModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <Footer/>
    </>
  );
};

export default SendTransferScreen;

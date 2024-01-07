import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GetAllTransfertAPI = () => {
  const exampleTransfers = [
    {
      id: 1,
      type_transfert: "Internal",
      type_frais: "Regular",
      referencetransfert: "ABC123",
      montant: 500.0,
      etat: "Pending",
      date_emission: "2022-01-01",
      date_expiration: "2022-01-15",
      id_expediteur: 101,
      nom_beneficiaire: "Doe",
      prenom_beneficiaire: "John",
      gsm_beneficiaire: "123456789",
      notification: true,
    },
    {
      id: 2,
      type_transfert: "External",
      type_frais: "Express",
      referencetransfert: "XYZ789",
      montant: 1000.0,
      etat: "Completed",
      date_emission: "2022-01-05",
      date_expiration: "2022-01-20",
      id_expediteur: 102,
      nom_beneficiaire: "Smith",
      prenom_beneficiaire: "Alice",
      gsm_beneficiaire: "987654321",
      notification: false,
    },
  ];

  const itemsPerPage = 9;
  const [transfers, setTransfers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransfer, setSelectedTransfer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch initial transfers from the backend and set them in the state
  useEffect(() => {
    fetch("http://localhost:8090/backoffice/getAllTransfers")
      .then((response) => response.json())
      .then((data) => {
        const combinedTransfers = [...data, ...exampleTransfers];
        setTransfers(combinedTransfers);
      })
      .catch((error) => console.error("Error fetching transfers:", error));
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter transfers based on search term
  const filteredTransfers = transfers.filter(
    (transfer) =>
      transfer.nom_beneficiaire.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transfer.prenom_beneficiaire.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transfer.referencetransfert.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredTransfers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Block transfer function
  const handleBlockTransfer = (referencetransfert) => {
    fetch(`http://localhost:8090/backoffice/blockTransfert?referencetransfert=${referencetransfert}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTransfers = transfers.map((transfer) =>
          transfer.referencetransfert === referencetransfert ? { ...transfer, etat: "Blocked" } : transfer
        );
        setTransfers(updatedTransfers);
      })
      .catch((error) => console.error("Error blocking transfer:", error));
  };

  // Unblock transfer function
  const handleUnblockTransfer = (referencetransfert) => {
    fetch(`http://localhost:8090/backoffice/unblockTransfert?referencetransfert=${referencetransfert}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTransfers = transfers.map((transfer) =>
          transfer.referencetransfert === referencetransfert ? { ...transfer, etat: "Active" } : transfer
        );
        setTransfers(updatedTransfers);
      })
      .catch((error) => console.error("Error unblocking transfer:", error));
  };

  // Fetch transfer details function
  const handleDetailsClick = (referencetransfert) => {
    fetch(`http://localhost:8090/backoffice/getTransfert?referencetransfert=${referencetransfert}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedTransfer(data);
        setShowModal(true);
      })
      .catch((error) => console.error("Error fetching transfer details:", error));
  };

  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Rechercher par nom, prénom, référence de transfert..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              padding: "5px",
              width: "200px",
              boxSizing: "border-box",
            }}
          />
        </div>
        <br />

        {/* Transfers list */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {filteredTransfers.slice(startIndex, endIndex).map((transfer) => (
            <div key={transfer.referencetransfert} style={{ width: "30%" }}>
              <div
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                <strong>Nom bénéficiaire :</strong> {transfer.nom_beneficiaire} {transfer.prenom_beneficiaire}
                <br />
                <strong>Référence transfert :</strong> {transfer.referencetransfert}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                  }}
                >
                  {/* Buttons for transfer actions */}
                  <Button onClick={() => handleDetailsClick(transfer.referencetransfert)}>
                    Détails
                  </Button>
                  <Button onClick={() => handleBlockTransfer(transfer.referencetransfert)}>
                    Bloquer
                  </Button>
                  <Button onClick={() => handleUnblockTransfer(transfer.referencetransfert)}>
                    Débloquer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                backgroundColor:
                  currentPage === index + 1 ? "#140C48" : "#FFFFFF",
                color: currentPage === index + 1 ? "#FFFFFF" : "#140C48",
                border: "1px solid #140C48",
                marginRight: "10px",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        {/* Transfer Details Modal */}
        {showModal && selectedTransfer && (
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Détails du transfert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Type de transfert :</strong> {selectedTransfer.type_transfert}
              </p>
              <p>
                <strong>Type de frais :</strong> {selectedTransfer.type_frais}
              </p>
              <p>
                <strong>Référence transfert :</strong> {selectedTransfer.referencetransfert}
              </p>
              <p>
                <strong>Montant :</strong> {selectedTransfer.montant}
              </p>
              <p>
                <strong>État :</strong> {selectedTransfer.etat}
              </p>
              <p>
                <strong>Date d'émission :</strong> {selectedTransfer.date_emission}
              </p>
              <p>
                <strong>Date d'expiration :</strong> {selectedTransfer.date_expiration}
              </p>
              <p>
                <strong>ID expéditeur :</strong> {selectedTransfer.id_expediteur}
              </p>
              <p>
                <strong>GSM bénéficiaire :</strong> {selectedTransfer.gsm_beneficiaire}
              </p>
              <p>
                <strong>Notification :</strong> {selectedTransfer.notification ? "Oui" : "Non"}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        <Footer />
      </div>
    </>
  );
};

export default GetAllTransfertAPI;

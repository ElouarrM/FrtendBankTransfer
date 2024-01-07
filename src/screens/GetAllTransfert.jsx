import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GetALLTransfert = () => {
  const itemsPerPage = 9;
  const [transferts, setTransferts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const transfertsArray = [];
    const startDate = new Date();
    const endDate = new Date();
    for (let i = 0; i < 25; i++) {
      const transfert = {
        id: i,
        id_expediteur: Math.floor(Math.random() * 100000),
        nom_beneficiaire: `${Math.random().toString(36).substring(2, 8)} Doe`,
        prenom_beneficiaire: `${Math.random()
          .toString(36)
          .substring(2, 8)} Doe`,
        reference: `${Math.random()
          .toString(36)
          .substring(2, 8)}-${Math.random().toString(36).substring(2, 8)}`,
        status: `En cours`,
        GSM_beneficiaire:
          "+212 " +
          Math.floor(Math.random() * 1000000000)
            .toString()
            .padStart(9, "0"),
        type_de_transfert: ["Console Agent", "Wallet", "GAB BOA"][
          Math.floor(Math.random() * 3)
        ],
        montant: Math.floor(Math.random() * 80001),
      };
      transfertsArray.push(transfert);
    }
    setTransferts(transfertsArray);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransferts = transferts.filter((transfert) =>
    transfert.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransferts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [showModal, setShowModal] = useState(false);
  const [selectedTransfert, setSelectedTransfert] = useState(null);

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
        <div
          style={{
            backgroundColor: "#B9BBC7",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "1280px",
            marginBottom: "20px",
            marginTop: "89px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#140C48",
              fontFamily: "cursive",
            }}
          >
            Liste des transferts
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Rechercher par référence..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "5px",
                width: "200px", // Ajustez la largeur selon vos besoins
                boxSizing: "border-box",
              }}
            />
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {filteredTransferts.slice(startIndex, endIndex).map((transfert) => (
              <div key={transfert.id} style={{ width: "30%" }}>
                <div
                  style={{
                    marginBottom: "20px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "10px",
                  }}
                >
                  <strong>Expéditeur :</strong> {transfert.id_expediteur}
                  <br />
                  <strong>Bénéficiaire :</strong> {transfert.nom_beneficiaire}{" "}
                  {transfert.prenom_beneficiaire}
                  <br />
                  <strong>Référence :</strong> {transfert.reference}
                  <br />
                  <strong>Statut :</strong> {transfert.status}
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        const updatedTransferts = [...transferts];
                        const index = updatedTransferts.findIndex(
                          (t) => t.id === transfert.id
                        );
                        updatedTransferts[index].status = "Bloqué";
                        setTransferts(updatedTransferts);
                      }}
                      style={{
                        backgroundColor: "#140C48",
                        color: "#FFFFFF",
                        margin: "10px",
                        border: "1px solid #140C48",
                        borderRadius: "4px",
                        width: "50%",
                        height: "40px",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#5844D8")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#140C48")
                      }
                    >
                      Bloquer
                    </Button>
                    <Button
                      onClick={() => {
                        const updatedTransferts = [...transferts];
                        const index = updatedTransferts.findIndex(
                          (t) => t.id === transfert.id
                        );
                        updatedTransferts[index].status = "Débloqué";
                        setTransferts(updatedTransferts);
                      }}
                      style={{
                        backgroundColor: "#140C48",
                        color: "#FFFFFF",
                        margin: "10px",
                        border: "1px solid #140C48",
                        borderRadius: "4px",
                        width: "50%",
                        height: "40px",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#5844D8")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#140C48")
                      }
                    >
                      Débloquer
                    </Button>
                    <Button
                      onClick={() => {
                        setShowModal(true);
                        setSelectedTransfert(transfert);
                      }}
                      style={{
                        backgroundColor: "#140C48",
                        color: "#FFFFFF",
                        margin: "10px",
                        border: "1px solid #140C48",
                        borderRadius: "4px",
                        width: "50%",
                        height: "40px",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#5844D8")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#140C48")
                      }
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
        {showModal && (
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            dialogClassName="custom-modal"
          >
            <Modal.Header>
              <Modal.Title>
                {" "}
                <h2>Détails du transfert</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-content">
              <p>
                {" "}
                <strong>ID Expéditeur :</strong>{" "}
                {selectedTransfert?.id_expediteur}
              </p>
              <p>
                {" "}
                <strong>Référence du transfert :</strong>{" "}
                {selectedTransfert?.reference}
              </p>
              <p>
                {" "}
                <strong>Nom et prénom du benefeciare : </strong>{" "}
                {selectedTransfert?.nom_beneficiaire}
              </p>
              <p>
                {" "}
                <strong>GSM du bénéficiaire : </strong>{" "}
                {selectedTransfert?.GSM_beneficiaire}
              </p>
              <p>
                {" "}
                <strong>Le status du transfert : </strong>
                {selectedTransfert?.status}
              </p>
              <p>
                {" "}
                <strong>Type de transfert : </strong>
                {selectedTransfert?.type_de_transfert}{" "}
              </p>
              <p>
                {" "}
                <strong>Le montant : </strong>
                {selectedTransfert?.montant} DH
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

export default GetALLTransfert;

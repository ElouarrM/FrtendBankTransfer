import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap"; // Imported Modal from react-bootstrap
import Footer from "../components/Footer";
import Header from "../components/Header";

const GetAllUsers = () => {
  const itemsPerPage = 9;
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showBlockModal, setShowBlockModal] = useState(false); // Define showBlockModal state
  const [showUnblockModal, setShowUnblockModal] = useState(false); // Define showUnblockModal state
  {
    /* 
const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch initial users from the backend and set them in the state
  useEffect(() => {
    fetch("http://localhost:8030/backoffice/getUser")
      .then((response) => response.json())
      .then((data) => {
        const combinedUsers = [...data, ...exampleUsers];
        setUsers(combinedUsers);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


 // Block user function
  const handleBlockUser = (userId) => {
    fetch(`http://localhost:8030/backoffice/blockUser?id=${userId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, etat: "Blocked" } : user
        );
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error blocking user:", error));
  };

  // Unblock user function
  const handleUnblockUser = (userId) => {
    fetch(`http://localhost:8030/backoffice/unblockUser?id=${userId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, etat: "Active" } : user
        );
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error unblocking user:", error));
  };

  // Fetch user details function
  const handleDetailsClick = (userId) => {
    fetch(`http://localhost:8030/backoffice/getUser?id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedUser(data);
        setShowModal(true);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  };


*/
  }
  useEffect(() => {
    // Simulating user data retrieval or API call
    const usersArray = [];
    for (let i = 0; i < 25; i++) {
      const user = {
        id: i,
        firstName: `User${i}`,
        lastName: `Doe${i}`,
        email: `User${i}Doe${i}@gmail.com`,
        password: `$dhe${i}2$vkh7986nt${i}jk$chhZhj${i}`,
        balance: `${i}700.0`,
        etat: "Active",
        phone: 21235689787,
        cin: `HH4${i}56${i}`,
        role: "USER",
      };
      usersArray.push(user);
    }
    setUsers(usersArray);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    // Add other fields for filtering if needed...
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#B9BBC7",
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
            Liste des utilisateurs
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
              placeholder="Rechercher par nom, prénom, email..."
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {filteredUsers.slice(startIndex, endIndex).map((user) => (
              <div key={user.id} style={{ width: "30%" }}>
                <div
                  style={{
                    marginBottom: "20px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "10px",
                  }}
                >
                  <strong>Nom :</strong> {user.firstName} {user.lastName}
                  <br />
                  <strong>Email :</strong> {user.email}
                  <br />
                  {/* Add other user details as needed */}
                  {/* ... (other user details) */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowModal(true);
                      }}
                      style={{
                        backgroundColor: "#140C48",
                        color: "#FFFFFF",
                        margin: "10px",
                        border: "1px solid #140C48",
                        borderRadius: "4px",
                        width: "100px",
                        height: "40px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Details
                    </Button>
                    <Button
                      onClick={() => {
                        setShowBlockModal(true);
                      }}
                      style={{
                        backgroundColor: "#140C48",
                        color: "#FFFFFF",
                        margin: "10px",
                        border: "1px solid #140C48",
                        borderRadius: "4px",
                        width: "100px",
                        height: "40px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Blocker
                    </Button>
                    <Button
                      onClick={() => {
                        setShowUnblockModal(true);
                      }}
                      style={{
                        backgroundColor: "#140C48",
                        color: "#FFFFFF",
                        margin: "10px",
                        border: "1px solid #140C48",
                        borderRadius: "4px",
                        width: "100px",
                        height: "40px",
                        transition: "background-color 0.3s",
                      }}
                    >
                      Deblocker
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        {/* User Details Modal */}
        {showModal && selectedUser && (
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
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
              <Modal.Title>Details de l'utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ width: "80%" }}>
              <p>
                <strong>Nom :</strong> {selectedUser.firstName}{" "}
                {selectedUser.lastName}
              </p>
              <p>
                <strong>Email :</strong> {selectedUser.email}
              </p>
              <p>
                <strong>password :</strong> {selectedUser.password}
              </p>
              <p>
                <strong>balance :</strong> {selectedUser.balance}
              </p>
              <p>
                <strong>etat :</strong> {selectedUser.etat}
              </p>
              <p>
                <strong>phone :</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>cin :</strong> {selectedUser.cin}
              </p>
              <p>
                <strong>role :</strong> {selectedUser.role}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        {/* Block Modal */}
        {showBlockModal && selectedUser && (
          <Modal
            show={showBlockModal}
            onHide={() => setShowBlockModal(false)}
            centered
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
          >
            <Modal.Header closeButton>
              <Modal.Title>Bloquer l'utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ width: "80%" }}>
              <p>
                L'utilisateur {selectedUser.firstName} {selectedUser.lastName}{" "}
                est bloqué avec succès.
              </p>
            </Modal.Body> 
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowBlockModal(false)}
              >
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Unblock Modal */}
        {showUnblockModal && selectedUser && (
          <Modal
            show={showUnblockModal}
            onHide={() => setShowUnblockModal(false)}
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
              <Modal.Title>Débloquer l'utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ textAlign: "center" }}>
              <p>
                L'utilisateur {selectedUser.firstName} {selectedUser.lastName}{" "}
                est débloqué avec succès.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowUnblockModal(false)}
              >
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default GetAllUsers;

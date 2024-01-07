import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GetAllUsersAPI = () => {
  const exampleUsers = [
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily@example.com",
      password: "$dhe2$vkh7986nt76jk$chhZhj23",
      balance: 6500.0,
      etat: "Active",
      phone: 2123456789,
      cin: "EF456789",
      role: "User",
    },
    {
      id: 4,
      firstName: "James",
      lastName: "Wilson",
      email: "james@example.com",
      password: "$dhe2$vkh7986nt76jk$chhZhj23",
      balance: 4500.0,
      etat: "En cours",
      phone: 2129876543,
      cin: "GH567890",
      role: "User",
    },
  ];

  const itemsPerPage = 9;
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

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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

        {/* Users list */}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                  }}
                >
                  {/* Buttons for user actions */}
                  <Button onClick={() => handleDetailsClick(user.id)}>
                    Details
                  </Button>
                  <Button onClick={() => handleBlockUser(user.id)}>
                    Blocker
                  </Button>
                  <Button onClick={() => handleUnblockUser(user.id)}>
                    Deblocker
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

        {/* User Details Modal */}
        {showModal && selectedUser && (
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Détails de l'utilisateur</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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

        <Footer />
      </div>
    </>
  );
};

export default GetAllUsersAPI;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = ({ handleNavigateToUsers }) => {
  const navbarLinkStyle = {
    display: "inline-block",
    marginRight: "20px",
    textDecoration: "none",
    color: "white",
    cursor: "pointer", // Adding cursor pointer for better UX
  };

  return (
    <header
      style={{
        background: "#031F45",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <span style={{ color: "white" }}>Transfert National</span>
      <nav>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ display: "inline-block" }}>
            <a href="http://localhost:3000/SendTransfert" style={navbarLinkStyle}>
              Espace utilisateur
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a href="http://localhost:3000/transfertFunction" style={navbarLinkStyle}>
              Services
            </a>
          </li>
          <li style={navbarLinkStyle} onClick={handleNavigateToUsers}>
            <a href="http://localhost:3000/Getalluser" style={navbarLinkStyle}>
            Utilisateurs  
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a href="http://localhost:3000/Getalltransfert" style={navbarLinkStyle}>
              Transactions
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a href="http://localhost:3000/" style={navbarLinkStyle}>
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

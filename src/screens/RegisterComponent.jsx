import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faCreditCard,
  faMobile,
  faIdCard,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);
  const [phone, setPhone] = useState("");
  const [cin, setCin] = useState("");
/*
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
      balance,
      phone,
      cin,
    };

    const response = await axios.post(
      "http://localhost:8090/auth/register",
      data
    );

    if (response.status === 200) {
      alert("Vous avez été enregistré avec succès");
    } else {
      alert("Une erreur s'est produite");
    }
  };
  */
  const handleSignUpClick = () => {
    // Use navigate to navigate to the RegisterComponent
    navigate("/");
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#B9BBC7",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          padding: "150px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "656px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-27px",
            right: "-18px",
            backgroundColor: "#140C48",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "83px",
            right: "849px",
            backgroundColor: "#140C48",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "59px",
            backgroundColor: "#140C48",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        ></div>

        <h2
          style={{
            textAlign: "center",
            color: "#140C48",
            fontFamily: "cursive",
          }}
        >
          Create an intuit account
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#140C48",
            fontFamily: "cursive",
          }}
        >
          Create your own account, to use our services
        </p>
        <Form /*</div>onSubmit={handleSubmit}*/>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    marginBottom: "10px",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  onChange={(event) => setLastName(event.target.value)}
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    marginBottom: "10px",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={(event) => setEmail(event.target.value)}
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    marginBottom: "10px",
                  }}
                />
              </Form.Group>
            </div>

            <div style={{ flex: 1, marginLeft: "20px" }}>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(event) => setPassword(event.target.value)}
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    marginBottom: "10px",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBalance" className="mb-3">
                <Form.Control
                  type="number"
                  name="balance"
                  placeholder="balance"
                  onChange={(event) => setBalance(event.target.value)}
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    marginBottom: "10px",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Control
                  type="number"
                  name="phone"
                  placeholder="phone"
                  onChange={(event) => setPhone(event.target.value)}
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    marginBottom: "10px",
                  }}
                />
              </Form.Group>
            </div>
          </div>

          <div style={{ alignSelf: "center" }}>
            <Form.Group controlId="formCin" className="mb-3">
              <Form.Control
                type="text"
                name="cin"
                placeholder="cin"
                onChange={(event) => setCin(event.target.value)}
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: "4px",
                  width: "50%",
                  height: "40px",
                  marginBottom: "10px",
                  marginLeft: "170px",
                }}
              />
            </Form.Group>
          </div>

          <Button
            type="submit"
            onClick={handleSignUpClick}
            style={{
              backgroundColor: "#140C48",
              color: "#FFFFFF",
              border: "1px solid #140C48",
              borderRadius: "4px",
              width: "100%",
              height: "40px",
              transition: "background-color 0.3s",
              cursor: "pointer", // Add this line to indicate the button is clickable
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5844D8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#140C48")}
          >
            SignUp
          </Button>
          <p
            onClick={handleSignUpClick}
            style={{
              color: "#140C48",
              textAlign: "center",
              marginTop: "10px",
              fontFamily: "cursive",
              cursor: "pointer",
            }}
          >
            Have an account?{" "}
            <span style={{ textDecoration: "underline" }}>SignIn</span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterComponent;

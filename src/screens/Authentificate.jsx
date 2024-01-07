import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Call your authentication API

    fetch("http://localhost:8090/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/Getalltransfert");

        // If the login is successful, redirect the user to the home page
        if (data.success) {
        } else {
          // Otherwise, display an error message
          alert(data.message);
        }
      });
      */
  };

  const handleSignInClick = () => {
    // Use navigate to navigate to the RegisterComponent
    navigate("/SendTransfert");
  };

  const handleSignUpClick = () => {
    // Use navigate to navigate to the RegisterComponent
    navigate("/register");
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
          padding: "113px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "300px",
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
            bottom: "-16px",
            right: "459px",
            backgroundColor: "#140C48",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "351px",
            right: "69px",
            backgroundColor: "#140C48",
            width: "70px",
            height: "70px",
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
          SignIn
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{
                border: "1px solid #ced4da",
                borderRadius: "4px",
                width: "100%",
                height: "40px",
                marginBottom: "10px",
              }}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              style={{
                border: "1px solid #ced4da",
                borderRadius: "4px",
                width: "100%",
                height: "40px",
                marginBottom: "10px",
              }}
            />
          </Form.Group>

          <Button
            type="submit"
            style={{
              backgroundColor: "#140C48",
              color: "#FFFFFF",
              border: "1px solid #140C48",
              borderRadius: "4px",
              width: "100%",
              height: "40px",
              transition: "background-color 0.3s",
            }}
            onClick={handleSignInClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5844D8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#140C48")}
          >
            SignIn
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
            Forgot password?{" "}
            <span style={{ textDecoration: "underline" }}>SignUp</span>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Authenticate;

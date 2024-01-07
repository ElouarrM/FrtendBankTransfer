import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterComponent from "../src/screens/RegisterComponent";
import Authentificate from "../src/screens/Authentificate";
import SendTransferScreen from "../src/screens/SendTransferScreen";
import transfertFunction from "../src/screens/TransferFunctions";
import GetAllTransfert from "../src/screens/GetAllTransfert";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import GetALLTransfert from "../src/screens/GetAllTransfert";
import { Modal } from "react-bootstrap";
import GetAllUsers from "./screens/GetAllUsers";
import TransferFunctions from "../src/screens/TransferFunctions";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Authentificate />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/Getalltransfert" element={<GetAllTransfert />} />
      <Route path="/SendTransfert" element={<SendTransferScreen />} />
      <Route path="/transfertFunction" element={<TransferFunctions />} />
      <Route path="/Getalluser" element={<GetAllUsers />} />
      <Route path="/Modal" element={<Modal />} />






    </Routes>
  </Router>
  );
};  

export default App;

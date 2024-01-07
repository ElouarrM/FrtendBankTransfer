// TransferFunctions.js
import React, { useState } from 'react';
import TransferForm from './TransferForm';
import Modal from './Modal';
import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TransferFunctions = () => {
    const [transferInfo, setTransferInfo] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleFormSubmit = (data) => {
        setTransferInfo(data);
        toggleModal();
    };

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
         <>
        <Header/>

        <div>
            <h1>Suivi de Transfert</h1>
            <TransferForm onSubmit={handleFormSubmit} />
            <Modal isOpen={isModalOpen} onClose={toggleModal} transferInfo={transferInfo} />
        </div>
    
        <Footer/>
    </>);
};

export default TransferFunctions
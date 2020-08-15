import React from "react";
import ReactModal from "react-modal";
import "./styles.css";

const Modal = ({ children, classes, isOpen, onClose }) => {
	const modalStyles = { overlay: { backgroundColor: "rgba(88, 101, 119, 0.8)", overflow: "auto", zIndex: "10" } };

	return (
		<ReactModal className={`modal-card ${classes ? classes : ""}`} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} style={modalStyles}>
			<span className="modal-close" onClick={onClose}>X</span>
			<div>{children}</div>
		</ReactModal>
	);
};

export default Modal;
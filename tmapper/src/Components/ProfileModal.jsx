import React from "react";
import Modal from "react-bootstrap/Modal";

const ProfileModal = ({ show, setShow, profileData }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};
export default ProfileModal;

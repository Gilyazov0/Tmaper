import React from "react";
import Modal from "react-bootstrap/Modal";
import Profile from "../Profile/Profile";
const ProfileModal = ({ show, setShow, profileData }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-25w">
        <Modal.Body>
          <Profile profileData={profileData} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProfileModal;

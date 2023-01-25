import { useState } from "react";
import "../style/person.css";
import ProfileModal from "./ProfileModal";

const Person = ({ data, setData, clustersNum }) => {
  const [showProfile, setShowProfile] = useState(false);
  function handleClick() {
    if (data.subordinates && data.subordinates.length > 0) setData(data);
  }
  const profileData = {
    employeeName: data.employeeName,
    position: data.position,
    department: data.department,
    employeeColor: data.employeeColor,
  };

  return (
    <>
      {showProfile && (
        <ProfileModal
          show={showProfile}
          setShow={setShowProfile}
          profileData={profileData}
        />
      )}
      <div className="node" style={{ borderColor: data.employeeColor }}>
        <div className="pointer noselect" onClick={handleClick}>
          {`${data.position}`}
        </div>
        <div
          className="pointer noselect"
          onClick={() => setShowProfile(true)}
        >{`${data.employeeName}`}</div>
      </div>
    </>
  );
};

export default Person;

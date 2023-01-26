import Dropdown from "react-bootstrap/Dropdown";

function ClustersSelector({ clustersNum, setClustersNum }) {
  return (
    <Dropdown className="me-2">
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        style={{ backgroundColor: "black" }}
      >
        Select number of clusters
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setClustersNum(3)}>3</Dropdown.Item>
        <Dropdown.Item onClick={() => setClustersNum(4)}>4</Dropdown.Item>
        <Dropdown.Item onClick={() => setClustersNum(5)}>5</Dropdown.Item>
        <Dropdown.Item onClick={() => setClustersNum(6)}>6</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ClustersSelector;

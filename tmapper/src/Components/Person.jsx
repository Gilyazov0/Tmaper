import "../style/person.css";

const Person = ({ data, setData }) => {
  function handleClick() {
    if (data.subordinates && data.subordinates.length > 0) setData(data);
  }
  console.log(data);
  return (
    <div
      className="node"
      onClick={handleClick}
      style={{ borderColor: data.employeeColor }}
    >
      <div className="position">{`${data.position}`}</div>
      <div>{`${data.employeeName}`}</div>
    </div>
  );
};

export default Person;

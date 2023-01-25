import "../style/person.css";

const Person = ({ data, setData }) => {
  function handleClick() {
    if (data.subordinates && data.subordinates.length > 0) setData(data);
  }

  return (
    <div className="node" onClick={handleClick}>
      {data.employeeName}
    </div>
  );
};

export default Person;

import Person from "./Person";
import "../style/Stuff.css";

const Stuff = ({ data, setData, clustersNum }) => {
  const stuff = data.map((p) => (
    <Person
      data={p}
      setData={setData}
      key={p.employeeId}
      clustersNum={clustersNum}
    />
  ));
  return <div className="stuff">{stuff}</div>;
};

export default Stuff;

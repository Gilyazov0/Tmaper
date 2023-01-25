import Person from "./Person";
import "../style/Stuff.css";

const Stuff = ({ data, setData }) => {
  const stuff = data.map((p) => <Person data={p} setData={setData} />);
  return <div className="stuff">{stuff}</div>;
};

export default Stuff;

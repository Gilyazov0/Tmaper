import { TreeNode } from "react-organizational-chart";
import isLastLvl from "../lib/isLastLvl";
import Person from "./Person";
import Stuff from "./Stuff";
const Node = ({ data, setData }) => {
  console.log(data);
  const nodes = data.subordinates?.map((v, i) => (
    <Node data={v} setData={setData} key={i} />
  ));
  return (
    <>
      <TreeNode label={<Person data={data} setData={setData} />}>
        {isLastLvl(data) ? (
          <Stuff data={data.subordinates} setData={setData} />
        ) : (
          nodes
        )}
      </TreeNode>
    </>
  );
};

export default Node;

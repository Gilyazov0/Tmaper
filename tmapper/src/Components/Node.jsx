import { TreeNode } from "react-organizational-chart";
import Person from "./Person";
const Node = ({ data, setData }) => {
  return (
    <TreeNode label={<Person data={data} setData={setData} />}>
      {data.subordinates?.map((v, i) => (
        <Node data={v} setData={setData} key={i} />
      ))}
    </TreeNode>
  );
};

export default Node;

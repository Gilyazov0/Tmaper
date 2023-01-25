import { TreeNode } from "react-organizational-chart";
import isLastLvl from "../lib/isLastLvl";
import Person from "./Person";
import Stuff from "./Stuff";
const Node = ({ data, setData, clustersNum }) => {
  const nodes = data.subordinates?.map((v, i) => (
    <Node
      data={v}
      setData={setData}
      key={v.employeeId}
      clustersNum={clustersNum}
    />
  ));
  return (
    <>
      <TreeNode
        label={
          <Person data={data} setData={setData} clustersNum={clustersNum} />
        }
      >
        {isLastLvl(data) ? (
          <Stuff
            data={data.subordinates}
            setData={setData}
            clustersNum={clustersNum}
          />
        ) : (
          nodes
        )}
      </TreeNode>
    </>
  );
};

export default Node;

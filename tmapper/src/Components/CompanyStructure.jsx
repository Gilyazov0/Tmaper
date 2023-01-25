import React, { useEffect, useState } from "react";
import { Tree } from "react-organizational-chart";
import Node from "./Node";
const mockData = {
  id: "some id",
  color: "color that represent culture",
  name: "name0",
  position: "position",

  subordinates: [
    {
      id: "some id",
      color: "color that represent culture",
      name: "name1",
      position: "position",
      subordinates: [
        {
          id: "some id",
          color: "color that represent culture",
          name: "name2",
          position: "position",
        },
        {
          id: "some id",
          color: "color that represent culture",
          name: "name3",
          position: "position",
        },
      ],
    },
  ],
};

const CompanyStructure = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <>
      {data && (
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<div className="node">{`${data.name}`}</div>}
        >
          {data.subordinates &&
            data.subordinates.map((v, i) => (
              <Node data={v} setData={setData} key={i} />
            ))}
        </Tree>
      )}
    </>
  );
};

export default CompanyStructure;

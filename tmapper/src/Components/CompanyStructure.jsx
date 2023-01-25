import React, { useCallback, useEffect, useState } from "react";
import { Tree } from "react-organizational-chart";
import getCompanyData from "../connection/GetCompanyData";
import Node from "./Node";
import Person from "./Person";

const CompanyStructure = () => {
  const [data, setData] = useState();
  const getCompanyStructure = useCallback(async () => {
    const data = await getCompanyData();
    setData(data.structure);
    return;
  }, []);

  useEffect(() => {
    getCompanyStructure();
  }, [getCompanyStructure]);

  function resetData() {
    getCompanyStructure();
  }

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/back.svg `}
        alt="back"
        onClick={() => resetData()}
        className="backImg"
      />
      {data && (
        <Tree
          lineWidth={"2px"}
          lineColor={"black"}
          lineBorderRadius={"10px"}
          label={<Person data={data} setData={setData} />}
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

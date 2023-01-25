import React, { useCallback, useEffect, useState } from "react";
import { Tree } from "react-organizational-chart";
import getCompanyData from "../connection/GetCompanyData";
import Node from "./Node";
import "../style/companyStructure.css";

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
    <div className="structure">
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
          // label={<Person data={data} setData={setData} />}
        >
          <Node data={data} setData={setData} />
          {/* {data.subordinates &&
            data.subordinates.map((v, i) => (
              <Node data={v} setData={setData} key={i} />
            ))} */}
        </Tree>
      )}
    </div>
  );
};

// export default CompanyStructure;

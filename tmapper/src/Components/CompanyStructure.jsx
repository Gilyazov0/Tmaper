import React, { useCallback, useEffect, useState } from "react";
import { Tree } from "react-organizational-chart";
import getCompanyData from "../connection/GetCompanyData";
import Node from "./Node";
import "../style/companyStructure.css";
import ClustersSelector from "./ClustersSelector";

const CompanyStructure = () => {
  const [data, setData] = useState();
  const [rootId, setRootId] = useState();
  const [clustersNum, setClustersNum] = useState(3);

  const getCompanyStructure = useCallback(async () => {
    console.log("clustersNum", clustersNum);
    const data = await getCompanyData(clustersNum);
    setRootId(data.structure.employeeId);
    const newData = { ...data.structure };
    setData(newData);
    return;
  }, [clustersNum]);

  useEffect(() => {
    getCompanyStructure();

    console.log("useEffect", clustersNum);
  }, [getCompanyStructure, clustersNum]);

  function resetData() {
    getCompanyStructure();
  }
  return (
    <div className="structure">
      <div className="d-flex backImg m-2">
        {rootId === data?.employeeId && (
          <ClustersSelector
            setClustersNum={setClustersNum}
            clustersNum={clustersNum}
          />
        )}

        <img
          src={`${process.env.PUBLIC_URL}/back.svg `}
          alt="back"
          onClick={() => resetData()}
        />
      </div>

      {data && (
        <Tree lineWidth={"2px"} lineColor={"black"} lineBorderRadius={"10px"}>
          <Node data={data} clustersNum={4} setData={setData} />
        </Tree>
      )}
    </div>
  );
};

export default CompanyStructure;

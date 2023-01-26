import React from "react";
import "../style/cluster.css";
import cluster from "../media/ezgif.com-gif-maker.gif";

function ClusteringPage() {
  return (
    <div className="container-cluster">
      <div className="clusters-page">
        <img className="gif" src={cluster} alt="nothing" />
      </div>
    </div>
  );
}

export default ClusteringPage;

import React from "react";
import TradingView from "./TradingView";

function GraphandAds() {
  return (
    <div className="GraphandAd">
      <div className="Graph" >
        <TradingView />
      </div>
      <div className="AdSection">
        <div
          style={{ height: "300px", background: "blue", borderRadius: "20px" }}
        ></div>
        <div style={{height:"100px", background:"white", marginTop:"15px"}}>
          <div>Trending Coins(24h)</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Ethereum(ETH)</div>
            <div>Bitcoin(BTC)</div>
            <div>Polygon(MATIC)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GraphandAds;

import React, { useState } from "react";
import TradingView from "./TradingView";
import { useEffect } from "react";
import Frame from "../Frame.png";

function GraphandAds() {
  const [value,setValue]=useState([]);
  const TopTrending = () => {
    fetch("https://api.coingecko.com/api/v3/search/trending", {
      method: "GET",
    })
      .then((res) => {
        // Check if the response is successful
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse JSON data from the response
        return res.json();
      })
      .then((data) => {
        // Log the JSON data to the console
        console.log("response", data.coins);
        let coinData = data.coins;
        let modified = coinData.slice(0, 3);
        setValue(modified);
      })
      .catch((error) => {
        // Log any errors to the console
        console.error("Error", error);
      });
  };

  useEffect(() => {
    TopTrending();
  }, []);
  return (
    <div className="GraphandAd">
      <div className="Graph"><TradingView /></div>
      <div className="AdSection">
        <div
          style={{
            height: "515px",
            background: "#0052FE",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            color: "white",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "700" }}>
            Get Started with KoinX for Free
          </div>
          <div style={{ fontSize: "14px", textAlign: "center" }}>
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </div>
          <div>
            <img src={Frame} style={{ height: "166px" }} />
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "48px",
              padding: "8px 24px 8px 24px",
              borderRadius: "10px",
              color: "black",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Get Started for Free
          </div>
        </div>
        <div
          style={{
            height: "225px",
            background: "white",
            marginTop: "15px",
            padding: "24px",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "600", marginBottom:"30px" }}>
            Trending Coins(24h)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap:"20px" }}>
          {value?.map((data, index) => (
            <div
              style={{
               
              }}
            >
              <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <img src={data.item.thumb} style={{borderRadius:"50%"}} />
                <div>{data.item.name}({data.item.symbol})</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GraphandAds;

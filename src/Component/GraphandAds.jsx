import React, { useState } from "react";
import TradingView from "./TradingView";
import { useEffect } from "react";
import Frame from "../Frame.png";
import Polygon from "../Polygon.png";
import ArrowRight from "../ArrowRight.png";

function GraphandAds() {
  const [value, setValue] = useState([]);
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
    <div style={{ padding: "30px", background: "#ececec" }}>
      <div>Cryptocurriencies {">>"} Bitcoin</div>
      <div className="GraphandAd">
        <div className="Graph">
          <TradingView />
        </div>
        <div className="AdSection">
          <div
            style={{
              height: "550px",
              background: "#0052FE",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              color: "white",
              borderRadius: "20px",
              padding: "10% 15%",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Get Started with KoinX for Free
            </div>
            <div style={{ fontSize: "14px", textAlign: "center" }}>
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </div>
            <div>
              <img src={Frame} style={{ height: "166px" }} alt="" />
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{}}>Get Started for Free</div>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
          <div
            style={{
              height: "250px",
              background: "white",
              marginTop: "15px",
              padding: "24px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              Trending Coins(24h)
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {value?.map((data, index) => (
                <div style={{}}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={data.item.thumb}
                        style={{ borderRadius: "50%" }}
                        alt=""
                      />
                      <div>
                        {data.item.name}({data.item.symbol})
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#c1fbc1",
                        height: "30px",
                        width: "70px",
                        lineHeight: "30px",
                        color: "green",
                      }}
                    >
                      <img src={Polygon} alt="" />
                      -8.21%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GraphandAds;

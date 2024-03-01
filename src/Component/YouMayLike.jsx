import React, { useEffect, useState } from "react";

function YouMayLike() {
  const [coinData, setCoinData] = useState([]);
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
        setCoinData(data.coins);
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
    <div style={{ width: "100vw",padding:"50px" }}>
      <div style={{ overflowX: "scroll", width: "100vw" }}>
        <div style={{fontSize:"24px", fontWeight:"600", marginBottom:"10px"}}>You May Also Like</div>
        <div style={{ display: "flex", gap: "10px" }}>
          {coinData?.map((data, index) => (
            <div
              style={{
                width: "252px",
                height: "160px",
                border: "1px solid grey",
                padding: "10px",
                borderRadius:"10px",
              }}
            >
              <div>
                <img src={data.item.thumb} />
                {data.item.symbol}
              </div>
              <div>{data.item.data.price}</div>
              <div>
                <img
                  src={data.item.data.sparkline}
                  style={{ width: "200px", height: "60px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ overflowX: "scroll", width: "100vw", marginTop:"20px" }}>
        <div style={{fontSize:"24px", fontWeight:"600", marginBottom:"10px"}}>Trending Coins</div>
        <div style={{ display: "flex", gap: "10px" }}>
          {coinData?.map((data, index) => (
            <div
              style={{
                width: "252px",
                height: "160px",
                border: "1px solid grey",
                padding: "10px",
                borderRadius:"10px",
              }}
            >
              <div>
                <img src={data.item.thumb} />
                {data.item.symbol}
              </div>
              <div>{data.item.data.price}</div>
              <div>
                <img
                  src={data.item.data.sparkline}
                  style={{ width: "200px", height: "60px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YouMayLike;

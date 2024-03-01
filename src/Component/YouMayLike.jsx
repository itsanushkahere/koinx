import React, { useEffect, useState, useRef } from "react";
import Polygon from "../Polygon.png";
import Vector from "../Vector.png";

function YouMayLike() {
  const [coinData, setCoinData] = useState([]);
  const scrollContainerRef1 = useRef();
  const scrollContainerRef2 = useRef();

  const TopTrending = () => {
    fetch("https://api.coingecko.com/api/v3/search/trending", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCoinData(data.coins);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    TopTrending();
  }, []);

  const handleScrollLeft1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollLeft -= 200; // Adjust scroll amount as needed
    }
  };

  const handleScrollRight1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollLeft += 200; // Adjust scroll amount as needed
    }
  };

  const handleScrollLeft2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollLeft -= 200; // Adjust scroll amount as needed
    }
  };

  const handleScrollRight2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollLeft += 200; // Adjust scroll amount as needed
    }
  };

  return (
    <div style={{ width: "100vw", padding: "50px" }}>
      <div>
        <div style={{ fontSize: "24px", fontWeight: "600", marginBottom: "10px" }}>You May Also Like</div>
        <div style={{ display: "flex", gap: "10px", position: "relative" }}>
          <div onClick={handleScrollLeft1}
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: '30px', height: '30px', borderRadius: '50%', background: '#c9c9c9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Vector} style={{ transform: "rotate(180deg)" }} alt="" />
          </div>
          <div style={{ width: 'calc(100vw - 85px)', overflowX: 'auto', display: 'flex', gap: '20px' }} ref={scrollContainerRef1}>
            {coinData?.map((data, index) => (
              <div
                key={index}
                style={{
                  width: "252px",
                  height: "160px",
                  border: "1px solid #c7c7c7",
                  padding: "10px 25px 0px 25px",
                  borderRadius: "10px",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <img src={data.item.thumb} style={{ borderRadius: "50%" }} alt="" />
                  <div>{data.item.symbol}</div>
                  <div style={{
                    background: '#c1fbc1',
                    height: '30px',
                    width: '70px',
                    lineHeight: '30px',
                    color: 'green'
                  }}>
                    <img src={Polygon} alt="" />-8.21%
                  </div>
                </div>
                <div>{data.item.data.price}</div>
                <div>
                  <img
                    src={data.item.data.sparkline}
                    style={{ width: "200px", height: "60px" }}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div onClick={handleScrollRight1}
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: '30px', height: '30px', borderRadius: '50%', background: '#c9c9c9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Vector} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: "24px", fontWeight: "600", marginBottom: "10px", marginTop: '40px' }}>Trending Coins</div>
        <div style={{ display: "flex", gap: "10px", position: "relative" }}>
          <div onClick={handleScrollLeft2}
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: '30px', height: '30px', borderRadius: '50%', background: '#c9c9c9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Vector} style={{ transform: "rotate(180deg)" }} alt="" />
          </div>
          <div style={{ width: 'calc(100vw - 85px)', overflowX: 'auto', display: 'flex', gap: '20px' }} ref={scrollContainerRef2}>
            {coinData?.map((data, index) => (
              <div
                key={index}
                style={{
                  width: "252px",
                  height: "160px",
                  border: "1px solid #c7c7c7",
                  padding: "10px 25px 0px 25px",
                  borderRadius: "10px",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  <img src={data.item.thumb} style={{ borderRadius: "50%" }} alt="" />
                  <div>{data.item.symbol}</div>
                  <div style={{
                    background: '#c1fbc1',
                    height: '30px',
                    width: '70px',
                    lineHeight: '30px',
                    color: 'green'
                  }}>
                    <img src={Polygon} alt="" />-8.21%
                  </div>
                </div>
                <div>{data.item.data.price}</div>
                <div>
                  <img
                    src={data.item.data.sparkline}
                    style={{ width: "200px", height: "60px" }}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div onClick={handleScrollRight2}
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: '30px', height: '30px', borderRadius: '50%', background: '#c9c9c9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouMayLike;
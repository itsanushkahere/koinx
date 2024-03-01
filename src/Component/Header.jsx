import React, { useState, useEffect } from "react";
import hamburger from "../Shape.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        padding: "0 20px 0 20px",
        height: "70px",
        border: "1px solid #cbcbcb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="icon">
        <img
          src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg"
          style={{ height: "20px" }}
          alt=""
        />
      </div>
      {width > "900" ? (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div>Crypto Taxes</div>
          <div>Free Tools</div>
          <div>Resource Center</div>
          <div
            style={{
              background: "blue",
              borderRadius: "5px",
              color: "white",
              padding: "12px",
            }}
          >
            Get Started
          </div>
        </div>
      ) : (
        <div className="dropdown-container">
          <img
            className="hamburger-icon"
            src={hamburger}
            onClick={toggleDropdown}
            alt=""
          />
          {isOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Crypto Taxes</div>
              <div className="dropdown-item">Free tools</div>
              <div className="dropdown-item">Resource Counter</div>
              <div className="dropdown-item">Get Started</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;

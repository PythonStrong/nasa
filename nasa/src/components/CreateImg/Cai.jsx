import React, { useState } from "react";
import "../CreateImg/Cai.css";
import Navbar from "../Navbar/Navbar";

export default function Cai() {
  const [inputValue, setInputValue] = useState("");
  const [imgSrc, setImgSrc] = useState(
    "https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery"
  );

  const tabs = [
    { id: "Oceanic", label: "Oceanic" },
    { id: "Desert", label: "Desert" },
    { id: "Forested", label: "Forested" },
    { id: "Ice", label: "Ice" },
    { id: "Gas", label: "Gas" },
    { id: "Volcanic", label: "Volcanic" },
    { id: "Rocky ", label: "Rocky" },
  ];
  const handleGenerate = () => {
    if (inputValue.length >= 8) {
      const imgURL = `https://picsum.photos/seed/${inputValue}/600/400`;
      setImgSrc(imgURL);
    } else {
      alert("Input value must be at least 8 characters long.");
    }
  };
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };
  return (
    <div>
      <Navbar />
      <div className="cai">
        <img src={imgSrc} alt="Generated" />
        <div className="formCai">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create Image"
          />

          <div className="app">
            <h3>select your planet</h3>
            <div className="tab-container">
              <div
                className={`tab ${selectedTab === "Oceanic" ? "active" : ""}`}
                onClick={() => handleTabChange("Oceanic")}
              >
                Oceanic
              </div>
              <div
                className={`tab ${selectedTab === "Desert" ? "active" : ""}`}
                onClick={() => handleTabChange("Desert")}
              >
                Desert
              </div>
              <div
                className={`tab ${selectedTab === "Forested" ? "active" : ""}`}
                onClick={() => handleTabChange("Forested")}
              >
                Forested
              </div>
              <div
                className={`tab ${selectedTab === "Rocky" ? "active" : ""}`}
                onClick={() => handleTabChange("Rocky")}
              >
                Rocky
              </div>
              <div
                className={`tab ${selectedTab === "Ice" ? "active" : ""}`}
                onClick={() => handleTabChange("Ice")}
              >
                Ice
              </div>
              <div
                className={`tab ${selectedTab === "Gas" ? "active" : ""}`}
                onClick={() => handleTabChange("Gas")}
              >
                Gas
              </div>
              <div
                className={`tab ${selectedTab === "Volcanic" ? "active" : ""}`}
                onClick={() => handleTabChange("Volcanic")}
              >
                Volcanic
              </div>
            </div>
          </div>

          <button onClick={handleGenerate}>Generate</button>
        </div>
      </div>
    </div>
  );
}

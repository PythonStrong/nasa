import React from "react";
import "../Hero/Hero.css";
import Jupiter from "../Jupiter/Jupiter";

export default function Hero() {
    return (
      <div className="hero">
        <Jupiter />
        <div>
          <div className="heroCards">
            <h1 className="title">Start our Journey</h1>
          </div>
          <div className="TextsCard">
            {/* text 1 */}
            <h2>
              An exoplanet (or extrasolar planet) is a planet that orbits a star
              outside our solar system. These planets can vary widely in size,
              composition, and distance from their host stars. Exoplanets are of
              great interest in the field of astronomy because they may provide
              insights into planetary formation and the potential for life
              beyond Earth.
            </h2>
          </div>
        </div>
      </div>
    );
}

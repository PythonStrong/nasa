import React from "react";
import "../Hero/Hero.css";
import Jupiter from "../Jupiter/Jupiter";

export default function Hero() {
    return (
        <div className="hero">
            <Jupiter />
            <div>
                <div className="TextsCard">
                    {/* text 1 */}
                    <div className="textCard">
                        <h2>Explore Planet</h2>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at
                            enim nobis commodi. Aspernatur, iste quia magni hic at nulla!
                        </h3>
                    </div>
                    {/* text 2 */}
                    <div className="textCard">
                        <h2>Explore Planet</h2>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at
                            enim nobis commodi. Aspernatur, iste quia magni hic at nulla!
                        </h3>
                    </div>
                    {/* text 3 */}
                    <div className="textCard">
                        <h2>Explore Planet</h2>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at
                            enim nobis commodi. Aspernatur, iste quia magni hic at nulla!
                        </h3>
                    </div>
                </div>

                <div className="heroCards">
                    <h1 className="title">Start our Journey</h1>
                </div>
            </div>
        </div>
    );
}

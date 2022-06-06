import React from 'react';
import Spinner from "../UIKit/Spinner/Spinner";
import {Fade} from "react-awesome-reveal";
import Carousel2 from "../RoadMap-2/Carousel2/Carousel2";
import {LegendariesStyle} from "./Legendaries.style";

const Legendaries = () => {
  return (
    <LegendariesStyle className='wrapper'>
      <div className="container">

        <div className="content">
          <div className="left">
            <Spinner className='spinner' />
            <div className="bottom">
              <Fade
                triggerOnce
                cascade
                direction={"up"}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <h1 className="title">Special DRIVERS</h1>
                <p className="text">
                  We created 10 Legendaries, which will be 1/1 racers with their own unique traits. The Legendaries are not only aesthetically perfect, they are also the most rare Racers of the collection, and perhaps have some extra benefits for you as a holder. Owning one of the legendary NFT’s of Racing Social Club will be the ultimate goal.
                </p>
              </Fade>
            </div>
          </div>
          <div className="right">
            <Carousel2 />
          </div>
        </div>


      </div>

    </LegendariesStyle>
  );
};

export default Legendaries;

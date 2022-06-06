import React from 'react';
import Spinner from "../UIKit/Spinner/Spinner";
import {Fade} from "react-awesome-reveal";
import Carousel1 from "../RoadMap-2/Carousel1/Carousel1";
import {DriverStyle} from "./Driver.style";

const Driver = () => {
  return (
    <DriverStyle className="wrapper">
      <div className="container">
        <div className="content">
          <div className="left">
            <Spinner />
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
              duration={1000}
              delay={100}
            >
              <h4 className="title text-shadow">YOUR DRIVER</h4>
              <div className="text">
                <p>
                  Once all drivers are revealed, you can finally rock the NFT as your profile picture. We like to see all the different Racers across the socials and show the world what the RSC community is made off.
                </p>
                <p>
                  If you did not make the mint, you can pick up your own Racer on the secondary market, and choose one you really identify yourself with.
                </p>
              </div>
            </Fade>
          </div>
          <div className="right">
            <Carousel1 />
          </div>
        </div>

      </div>
    </DriverStyle>
  );
};

export default Driver;

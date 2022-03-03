import React from "react"
import Spinner from "../UIKit/Spinner/Spinner"
import { Fade } from "react-awesome-reveal"

const Carousel1 = () => {
  return (
    <div className="carousel-1">
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
          <h3 className="title">YOUR DRIVER</h3>
          <p className="text">
            Once all drivers are revealed, there will also be an exclusive
            collection of 10 Legendary
          </p>
        </Fade>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Carousel1

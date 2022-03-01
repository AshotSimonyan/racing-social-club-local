import React, { forwardRef } from "react"
import { RoadMapStyle } from "./RoadMap.style"
import RunningText from "../UIKit/RunningText/RunningText"
import { Fade } from "react-awesome-reveal"
import Carousel1 from "./Carousel1"

const RoadMap = forwardRef(({ onScreen }, ref) => {
  return (
    <RoadMapStyle id='roadmap' ref={ref} roadMapImage="/assets/roadmap/roadmap">
      <RunningText image="/assets/roadmap/running" withBorder />
      <div className="content-wrapper">
        <div className="content content1">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
            >
              <h1>Free </h1>
              <h1>Practice</h1>
            </Fade>
          </div>
          <div className="text">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
            >
            <p>A small group of friends, with an extreme passion for racing, decided to take on the NFT space. With our experience, and many contacts, in the racing industry, we are creating a community with loads of benefits and special forms of utility. </p>
            <p>We at RSC, are not only creating a great community, but are also trying to create awareness for the cruel problems in the racing industry. As in any race weekend, we need to build up our momentum, to prepare for the qualification, as best as we can! With the help of many events, such as crazy marketing stunts, giveaways, AMAs and other unique activities, we will build a crazy community! </p>
            </Fade>
          </div>
        </div>
        <div className="content content2">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
              delay={100}
            >
              <h1>IT’S TIME FOR</h1>
              <h1>Qualification</h1>
            </Fade>
          </div>
          <div className="text">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
            >
            <p>We need to qualify for the race as best as we can, we need to start on POLE POSITION! We have been working very hard to create a unique and outstanding collection of 7878 racers.</p>
            <p>Each racer has its own unique characteristics, but can still be identified as a real racing driver! The artworks will be provided with the highest possible quality, even the smallest details will be taken care off, as the traits will be a centerpiece for one of our unique forms of utility. </p>
            <p>During the qualification a racing driver has one or two opportunities to set a flawless lap, which will put them in the perfect position to start the race. This lap, is as important as the race itself, as it sets the tone of the rest of the race.</p>
            </Fade>
          </div>
        </div>
        <div className="content content3">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
            >
              <h1>Raceday</h1>
            </Fade>
          </div>
          <div className="text">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
            >
            <p>After a very successful qualification, there is only one thing left: Win the race! There is only one thing left after the launch, the reveal! Sit tight, and experience a spectacular reveal, where you get to know.</p>
            <p>Every holder will be a member of our community, a community that has loads of different benefits for every single holder, starting with celebrating the race victory and reveal at the Podium Ceremony! </p>
            </Fade>
          </div>
        </div>
        <div className="content content4">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
            >
              <h1>podium</h1>
              <h1>ceremony</h1>
            </Fade>
          </div>
          <div className="text">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={1}
              duration={1000}
              delay={100}
            >
            <p>We started the season with an amazing victory in style! It is time for a celebration! Starting with the first real-life race event, hosted by RSC.  We will also host a monthly online racing event. Every month, new online racing events, with prizes to be won. </p>
            <p>All this will be decided by our community themselves. When the champagne arrives, we have an amazing event scheduled, the same week we host our first race event. </p>
            <p>Every single holder will have free access to the event, and a couple of holders will even receive a full stay, so they can attend to the meet-up.</p>
            </Fade>
          </div>
        </div>
      </div>
      <Carousel1 />
    </RoadMapStyle>
  )
})

export default RoadMap

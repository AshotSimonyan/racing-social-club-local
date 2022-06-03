import React, { forwardRef, memo, useRef, useState } from "react"
import { RoadMapStyle } from "./RoadMap.style"
import RunningText from "../UIKit/RunningText/RunningText"
import { Fade } from "react-awesome-reveal"
import Carousel1 from "./Carousel1/Carousel1"
import Spinner from "../UIKit/Spinner/Spinner"
import Carousel2 from "./Carousel2/Carousel2"
import data from "./data"
import Collapsible from "react-collapsible"

const RoadMap = forwardRef(({}, ref) => {
  const [openPosition, setOpenPosition] = useState(0)

  const handleTriggerClick = position => {
    if (openPosition === position) {
      setOpenPosition(null)
    } else {
      setOpenPosition(position)
    }
  }

  return (
    <RoadMapStyle ref={ref} roadMapImage="/assets/roadmap/roadmap">
      <RunningText image="/assets/roadmap/running" withBorder />
      <div className="content-wrapper">
        <div className="content content1">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
              duration={800}
            >
              <h1>Free </h1>
            </Fade>
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
              delay={200}
              duration={800}
            >
              <h1>Practice</h1>
            </Fade>
          </div>
          <div className="text">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
              duration={1000}
            >
              <p>
                  Racing Social Club aims to take an exclusive place in the NFT and racing industry. The goal is to build a likeminded community of racing fans and NFT enthusiasts. We will build the RSC brand by adding partnerships with professional racers and growing our network in the industry.
              </p>
              <p>
                  We will build up the momentum to prepare for the qualification as best as we can. Growing the community during the free practice will be done by adding real value and getting the right attention. This will be done through events like crazy marketing stunts, professional content, giveaways, AMA’s and many more!
              </p>
            </Fade>
          </div>
        </div>
        <div className="content content2">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
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
              fraction={0.5}
              duration={1000}
            >
              <p>
                  To start the race in pole position, we need to qualify as best as we can. We have been working very hard to create an outstanding collection of 7878 racers.
              </p>
              <p>
                  Each racer has its own unique characteristics. We focused on the smallest details in order to  make each Racer top notch. The traits are the center focus for one of our unique utility forms.
              </p>
              <p>
                  During the qualification, each RSC member has two opportunities for a flawless lap, which will put them in the best position for the race. A Rookie can qualify itself, by earning a WL spot or by participating in the raffle before the race starts.
              </p>
            </Fade>
          </div>
        </div>
        <div className="content content3">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
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
              fraction={0.5}
              duration={1000}
            >
              <p>
                  After a successful qualification, the only thing left, is to win the race! To become a real Racer, our Rookies can mint one of the RSC NFT’s and gain access to all benefits of the Racing Social Club brand. After the launch, the Racers only have to wait for the Podium Ceremony, where all Racers will be revealed.
              </p>
              <p>
                  Some racers might end up being lucky, since some traits will be directly connected to certain benefits. So make sure you don’t lose patience. Holding your Racer will be the only right decision to make.
              </p>
            </Fade>
          </div>
        </div>
        <div className="content content4">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
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
              fraction={0.5}
              duration={1000}
              delay={100}
            >
              <p>
                  We started the season with an amazing victory in style. It is time for a celebration. Soon we will organize the first real-life race event hosted by RSC. Also we will start the first online event, where we will create competitions, and prizes can be won. Besides that, we will organize the first meet-up where EVERY holder gains access to. This is where the fun starts.
              </p>
              <p>
                  However, there are many more races to come. Racing Social Club is only getting started. As we organize multiple events, and keep partnering up with a variety of Racers and racing companies, we will turn eyes and grow the brand globally.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="carousel-block">
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
      <div className="text-block">
        <Fade
          triggerOnce
          cascade
          direction={"up"}
          fraction={0.5}
          duration={1000}
          delay={100}
        >
          <h2>RSC FUND</h2>
          <p className="text">
            The RSC fund is an initiative started by RSC, in order to create
            more attention for the financial hurdle that exists in racing. A lot
            of talented racers struggle with this during their career. We want to
            create attention, raise money and give money from the project back
            to the racers with this fund.
          </p>
        </Fade>
      </div>
      <div className="carousel-2-block">
        <div className="left">
          <Spinner />
          <div className="bottom">
            <Fade
              triggerOnce
              cascade
              direction={"up"}
              fraction={0.5}
              duration={1000}
              delay={100}
            >
              <h2 className="title">Special DRIVERS</h2>
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
      <div className="text-block-2">
        <div className="left">
          <Fade
            triggerOnce
            cascade
            direction={"up"}
            fraction={0.5}
            duration={1000}
            delay={100}
          >
            <h2>RSC Utility</h2>
            <p className="text">
                We, at Racing Social Club, consider our community as top priority. We aim to provide as much value as we can, therefore our utility contains multiple layers. We have divided the utility in two different forms. The first form of utility we offer, are Membership utilities, and the second form of utility we offer are Trait Utilities.
            </p>
          </Fade>
        </div>
        <div className="right">
          {data.map(({ title, description }, i) => {
            return (
              <Collapsible
                key={"Collapsible" + i}
                handleTriggerClick={handleTriggerClick}
                transitionTime={500}
                accordionPosition={i}
                open={openPosition === i}
                trigger={
                  <Fade
                    triggerOnce
                    cascade
                    direction={"down"}
                    fraction={0.5}
                    duration={800}
                  >
                    <div className="trigger-inner">{title}</div>
                  </Fade>
                }
              >
                {description}
              </Collapsible>
            )
          })}
        </div>
      </div>
    </RoadMapStyle>
  )
})

export default RoadMap

import React, { forwardRef } from 'react'
import { RoadmapStyle } from './Roadmap.style'
import RunningText from '../UIKit/RunningText/RunningText'
import { Fade } from 'react-awesome-reveal'

const Roadmap = forwardRef(({ onScreen }, ref) => {
  return (
    <RoadmapStyle ref={ref}>
      <div className="running-text-wrapper">
        <RunningText image="/assets/roadmap/running" />
      </div>

      <div className="wrapper wrapper-1">
        <div className="container">
          <div className="content">
            <div className="img mr-6">
              <img src="/assets/roadmap/roadmap-1.svg" alt="FREE PRACTICE" />
            </div>


            <div className="content__text">
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <h1>FREE PRACTICE</h1>

                <div className="text">
                  <p>
                    Racing Social Club aims to take an exclusive place in the
                    NFT
                    and racing industry. The goal is to build a likeminded
                    community of racing fans and NFT enthusiasts. We will build
                    the RSC brand by adding partnerships with professional
                    racers
                    and growing our network in the industry.
                  </p>

                  <p>
                    We will build up the momentum to prepare for the
                    qualification
                    as best as we can. Growing the community during the free
                    practice will be done by adding real value and getting the
                    right attention. This will be done through events like crazy
                    marketing stunts, professional content, giveaways, AMA’s and
                    many more!
                  </p>
                </div>
              </Fade>
            </div>

          </div>
        </div>
      </div>

      <div className="wrapper wrapper-2">
        <div className="container">
          <div className="content">

            <div className="content__text mr-6">
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <h1>IT’S TIME FOR QUALIFICATION</h1>

                <div className="text">
                  <p>
                    To start the race in pole position, we need to qualify as
                    best
                    as we can. We have been working very hard to create an
                    outstanding collection of 7878 racers.
                  </p>

                  <p>
                    Each racer has its own unique characteristics. We focused on
                    the smallest details in order to make each Racer top notch.
                    The traits are the center focus for one of our unique
                    utility
                    forms.
                  </p>

                  <p>
                    During the qualification, each RSC member has two
                    opportunities for a flawless lap, which will put them in the
                    best position for the race. A Rookie can qualify itself, by
                    earning a WL spot or by participating in the raffle before
                    the
                    race starts.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="img">
              <img src="/assets/roadmap/roadmap-2.svg"
                   alt="IT’S TIME FOR QUALIFICATION" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-3">
        <div className="container">
          <div className="content">
            <div className="img mr-6">
              <img src="/assets/roadmap/roadmap-3.svg" alt="RACEDAY" />
            </div>


            <div className="content__text">
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <h1>RACEDAY</h1>

                <div className="text">
                  <p>
                    After a successful qualification, the only thing left, is to
                    win the race! To become a real Racer, our Rookies can mint
                    one
                    of the RSC NFT’s and gain access to all benefits of the
                    Racing
                    Social Club brand. After the launch, the Racers only have to
                    wait for the Podium Ceremony, where all Racers will be
                    revealed.
                  </p>

                  <p>
                    Some racers might end up being lucky, since some traits will
                    be directly connected to certain benefits. So make sure you
                    don’t lose patience. Holding your Racer will be the only
                    right
                    decision to make.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-4">
        <div className="container">
          <div className="content">
            <div className="content__text mr-6">
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <h1>PODIUM CEREMONY</h1>

                <div className="text">
                  <p>
                    We started the season with an amazing victory in style. It
                    is
                    time for a celebration. Soon we will organize the first
                    real-life race event hosted by RSC. Also we will start the
                    first online event, where we will create competitions, and
                    prizes can be won. Besides that, we will organize the first
                    meet-up where EVERY holder gains access to. This is where
                    the
                    fun starts.
                  </p>

                  <p>
                    However, there are many more races to come. Racing Social
                    Club
                    is only getting started. As we organize multiple events, and
                    keep partnering up with a variety of Racers and racing
                    companies, we will turn eyes and grow the brand globally.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="img">
              <img src="/assets/roadmap/roadmap-4.svg"
                   alt="PODIUM CEREMONY" />
            </div>
          </div>
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap

import React, { forwardRef } from 'react'
import { RoadmapStyle } from './Roadmap.style'
import RunningText from '../UIKit/RunningText/RunningText'

const Roadmap = forwardRef(({ onScreen }, ref) => {
  return (
    <RoadmapStyle ref={ref}>
      <div className="running-text-wrapper">
        <RunningText image="/assets/roadmap/running" />
      </div>

      <div className="wrapper wrapper-1">
        <div className="roadmap-step">
          <div className="img">
            <img src="/assets/roadmap/roadmap-1.svg" alt="FREE PRACTICE" />
          </div>

          <div className="content">
            <h1>FREE PRACTICE</h1>

            <div className="text">
              <p>
                Racing Social Club aims to take an exclusive place in the NFT
                and racing industry. The goal is to build a like-minded
                community of racing fans and NFT enthusiasts. We will build
                the RSC brand by adding partnerships with professional racers
                and growing our network in the industry, as the 2022 season
                starts.
              </p>

              <p>
                We will build up the momentum to prepare for the qualification
                as best as we can. This will be done through events like crazy
                marketing stunts, professional content, giveaways, Ama’s and
                many more!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-2">
        <div className="roadmap-step">
          <div className="content">
            <h1>IT’S TIME FOR QUALIFICATION</h1>

            <div className="text">
              <p>
                To stay in Pole Position, we need to qualify for the race as
                best as we can. We have been working very hard to create an
                outstanding collection of 7878 racers.
              </p>

              <p>
                Each racer has its own unique characteristics and can be
                identified as a real racer. We focused on the smallest
                details, in order to create the highest quality traits and
                make each racer top notch. The traits are the center focus for
                one of our unique utility forms.
              </p>

              <p>
                A Rookie can qualify itself, by earning a WL spot or
                participate in the Raffle before the race starts
              </p>
            </div>
          </div>

          <div className="img">
            <img src="/assets/roadmap/roadmap-2.svg"
                 alt="IT’S TIME FOR QUALIFICATION" />
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-3">
        <div className="roadmap-step">
          <div className="img">
            <img src="/assets/roadmap/roadmap-3.svg" alt="RACEDAY" />
          </div>

          <div className="content">
            <h1>RACEDAY</h1>

            <div className="text">
              <p>
                After a successful qualification, the only thing to do is to win
                the race! To become a real Racer, our Rookies can mint one of
                the RSC NFTs and gain access to all benefits of Racing Social
                Club. After the launch, the racers only have to wait for the
                Podium Ceremony, where all racers will be revealed.
              </p>

              <p>
                Every holder will gain utility access with loads of benefits,
                but only specific racers will get access to the special
                Trait-Based Utilities. After this, we start the celebration of
                the race victory and reveal at the Podium Ceremony.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper-4">
        <div className="roadmap-step">
          <div className="content">
            <h1>PODIUM CEREMONY</h1>

            <div className="text">
              <p>
                We started the season with an amazing victory in style. Soon we
                will organize the first real-life race event hosted by RSC. Also
                we will start the first online event, and organize the first
                meet-up where EVERY holder gets access to. This is where the fun
                starts.
              </p>

              <p>
                However, we only had the first race of the season. Racing Social
                Club is only getting started. As we organize multiple events,
                and keep partnering up with a variety of racers and racing
                companies, we will turn eyes and grow the brand globally. Get
                ready for Roadmap 2.0...
              </p>
            </div>
          </div>

          <div className="img">
            <img src="/assets/roadmap/roadmap-4.svg"
                 alt="PODIUM CEREMONY" />
          </div>
        </div>
      </div>
    </RoadmapStyle>
  )
})

export default Roadmap

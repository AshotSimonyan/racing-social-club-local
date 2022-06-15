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
                <h1>Pre-season</h1>

                <div className="text">
                  <p>
                    Racing Social Club (RSC) is established.
                  </p>

                  <p>
                    RSC aims to take an exclusive place in the Web3 space and
                    Racing industry, by building a community of racing fans and
                    NFT enthusiasts. Strategic partnerships are being
                    established to support the growth of a strong community.
                  </p>

                  <p>
                    RSC will show the community their plans for online and IRL
                    racing events, exclusive merchandise, community meetups and
                    the RSC fund. Unique 3D NFT’s are generated and ready to
                    race. The iconic collection of racers is finalized and shown
                    to the public in the months prior to the mint.
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
                <h1>Qualification</h1>

                <div className="text">
                  <p>
                    We have been working hard on our collection of 3333 racers.
                    In this phase before the mint, we grow the community by
                    doing different activities, hosting events and doing
                    giveaways of F1 GP tickets, merchandise and free NFT’s.
                  </p>

                  <p>
                    Development on the latest smart contract is completed to
                    efficiently fuel your racers and reduce the gas fees
                    (ERC-721A). We have whitelisted members to ensure they will
                    be the first to get their hands on one of our racers.
                  </p>

                  <p>
                    Furthermore big collaborations and partnerships are achieved
                    to raise awareness for the Racing Social Club brand.
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
                <h1>RACE DAY</h1>

                <div className="text">
                  <p>
                    It is time to mint! After a long period of building, it is
                    finally gametime. We will launch our collection for a
                    reasonable price, to make our utilities accessible for as
                    many people as possible.
                  </p>

                  <p>
                    We will continue to build the brand and realize the
                    utilities we offer. We are looking to plan our first
                    in-real-life event in 2022. We will also launch our official
                    merchandise which will be available for all.
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
                <h1>Championship</h1>

                <div className="text">
                  <p>
                    2023, We will grow the Racing Social Club brand as big as
                    possible now the project has an established name in the
                    space. More racers, more partners and more exciting
                    utilities. As the brand and our community grow, we will have
                    more ways for new people to join the Racing Social Club
                    Ecosystem.
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

import { AboutStyle } from './About.style'
import { forwardRef, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

const About = forwardRef(({ onScreen }, ref) => {
  return (
    <AboutStyle ref={ref}>
      <div className="wrapper">
        <div className="container-md">
          <div className="content text-center">
            <Fade
              triggerOnce
              cascade
              direction={'up'}
              fraction={0.5}
              duration={1000}
              delay={100}
            >
              <h1>3333 unique racers are waiting for you</h1>

              <div className="content__text">
                <p>
                  Racing Social Club is a collection of 3333 Racers who are
                  randomly generated on the Ethereum blockchain. The NFT comes
                  with access to different utilities. These utilities include
                  race weekends, eSports events, entertainment, VIP experiences,
                  voting rights for our fund, giveaways and more!
                </p>

                <p>
                  We will organize different events and partner up with the best
                  racers, to grow the Racing Social Club brand and get the most
                  exclusive benefits for our community. We are building the
                  biggest Web3 racing brand, and we take our Racers on this
                  journey.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src="/assets/about/racing-banner.jpg" alt="banner" />
      </div>
    </AboutStyle>
  )
})

export default About

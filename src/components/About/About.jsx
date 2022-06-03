import { AboutStyle } from './About.style'
import { forwardRef, useEffect, useState } from 'react'

const About = forwardRef(({ onScreen }, ref) => {
  return (
    <AboutStyle ref={ref}>
      <div className="wrapper">
        <div className="container-md">
          <div className="content text-center">
            <h1>7,878 Unique Racers Are Waiting For You </h1>

            <div className="content__text">
              <p>
                Racing Social Club is a community of 7878 Racers which are randomly
                generated on the Ethereum blockchain. The community of racing fans
                and
                NFT enthusiasts will gain access to our most exclusive events, which
                we will organize multiple times a year.
              </p>

              <p>
                The events will give our Rookies the opportunity to feel like a real
                racer. This includes fast cars, race weekends, Esports events,
                entertainment, VIP experiences, giveaways and more! We prioritize
                quality of both the artworks and utilities of the Racing Social Club
                brand.
              </p>
            </div>
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

import React, { forwardRef } from 'react'
import { RSCUtilityStyle } from './RSCUtility.style'
import Spinner from '../UIKit/Spinner/Spinner'
import { Fade } from 'react-awesome-reveal'

const RscUtility = forwardRef(({ onScreen }, ref) => {
  return (
    <RSCUtilityStyle className="wrapper">
      <div className="container-title container-md">

        <div className="content text-center">
          <Fade
            triggerOnce
            cascade
            direction={'up'}
            fraction={0.5}
            duration={1000}
            delay={100}
          >
            <h1>RSC UTILITY</h1>

            <p>
              We, at Racing Social Club, consider our community as top priority.
              We aim to provide as much value as we can, therefore our utility
              contains multiple layers. We have divided the utility in two
              different forms. The first form of utility we offer, are
              Membership
              utilities, and the second form of utility we offer are Trait
              Utilities.
            </p>
          </Fade>
        </div>

      </div>

      <div className="wrapper-utilities">
        <div className="container-utilities container">
          <div className="content">
            <div className="membership">
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <div className="title">
                  <Spinner size="sm" />
                  <h4>MEMBERSHIP UTILITIES</h4>
                </div>

                <div className="text">
                  <div className="block">
                    <h4>Metaracing</h4>

                    <p>
                      Metaracing is an online event which is available for all
                      RSC
                      NFT holders. This event will be filled with games,
                      tournaments, entertainment and various prizes.
                    </p>
                  </div>

                  <div className="block">
                    <h4>RSC Race</h4>

                    <p>
                      The RSC Race will be one of a kind. Hosted on a real
                      racetrack, there will be fast cars, real racing drivers
                      and
                      multiple giveaways.
                    </p>
                  </div>

                  <div className="block">
                    <h4>RSC Meet-up</h4>

                    <p>
                      The community meet-up will be available for all RSC NFT
                      holders. Besides some nice cars, we will also have music,
                      public speakers, good food and more!
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="trait">
              <Fade
                triggerOnce
                cascade
                direction={'up'}
                fraction={0.5}
                duration={1000}
                delay={100}
              >
                <div className="title">
                  <Spinner size="sm" />
                  <h4>TRAIT UTILITIES</h4>
                </div>

                <div className="text">
                  <p>
                    The trait utilities are introduced by RSC as a very unique
                    way
                    to provide utility. This way of providing utility will be
                    very
                    dynamic. We will announce some of the trait utilities before
                    mint, but we also will announce some after mint. In the
                    future
                    we might even transfer the utility from one trait category
                    to
                    another one… We will change the game, people will be blown
                    away by this new, innovative way of providing value to
                    holders.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </RSCUtilityStyle>
  )
})

export default RscUtility

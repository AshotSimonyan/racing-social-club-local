import React, { forwardRef } from 'react'
import { RSCUtilityStyle } from './RSCUtility.style'
import Spinner from '../UIKit/Spinner/Spinner'

const RscUtility = forwardRef(({ onScreen }, ref) => {
  return (
    <RSCUtilityStyle>
      <div className="container-title container-md">
        <div className="content text-center">
          <h1>RSC UTILITY</h1>

          <p>
            We, at Racing Social Club, consider our community as top priority.
            We aim to provide as much value as we can, and therefore our utility
            contains multiple layers. The first form of utility we offer are the
            Membership Utilities, and the second form of utility we offer are
            the Trait-Based Utilities.
          </p>
        </div>
      </div>

      <div className="wrapper-utilities">
        <div className="container-utilities container">
          <div className="content">
            <div className="membership">
              <div className="title">
                <Spinner size="sm" />
                <h4>MEMBERSHIP UTILITIES</h4>
              </div>

              <div className="text">
                <div className="block">
                  <h4>Metaracing</h4>

                  <p>Metaracing is an online event which is available for ALL RSC
                     NFT holders. This event is filled with, games, tournaments,
                     entertainment and prizes
                  </p>
                </div>

                <div className="block">
                  <h4>RSC Race</h4>

                  <p>The RSC Race will be one of a kind. We will have fast cars
                     and real racers on a racetrack! This event is for the real
                     speed devils. An exclusive event that is available to some of
                     the RSC NFT holders.
                  </p>
                </div>

                <div className="block">
                  <h4>RSC Meet-up</h4>

                  <p>The community meetup of RSC will be available for every RSC
                     NFT holder. Besides some nice cars, we will also have music,
                     public speakers, entertainment, good food and more!
                  </p>
                </div>
              </div>
            </div>

            <div className="trait">
              <div className="title">
                <Spinner size="sm" />
                <h4>TRAIT UTILITIES</h4>
              </div>

              <div className="text">
                <p>
                  The trait utilities are introduced by RSC as a very unique way
                  to provide utility. This way of providing utility will be very
                  dynamic. We will announce some of the trait utilities before
                  mint, but we also will announce some after mint. In the future
                  we might even transfer the utility from one trait category to
                  another one… We will change the game, people will be blown away
                  by this new, innovative way of providing value to holders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RSCUtilityStyle>
  )
})

export default RscUtility

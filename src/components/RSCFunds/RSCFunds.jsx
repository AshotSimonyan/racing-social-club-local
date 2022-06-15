import React, { forwardRef } from 'react'
import { RSCFundsStyle } from './RSCFunds.style'
import { Button } from '../UIKit'
import { Fade } from 'react-awesome-reveal'

const RscFunds = forwardRef(({ onScreen }, ref) => {
  return (
    <RSCFundsStyle className="wrapper">
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
            <h2>RSC FUND</h2>

            <p>
              The RSC fund is an initiative started by RSC, in order to create
              more attention for the financial hurdle that exists in racing. A
              lot of talented racers struggle with this during their career. We
              want to raise awareness and will therefore reserve 30% of all
              royalties for our own RSC fund, that will be given to racers
              chosen by our community.
            </p>

            <Button>
              JOIN OUR DISCORD
            </Button>
          </Fade>
        </div>
      </div>
    </RSCFundsStyle>
  )
})

export default RscFunds

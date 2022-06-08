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
              lot
              of talented racers struggle with this during their career. We want
              to create attention, raise money and give money from the project
              back to the racers with this fund.
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

import React, { forwardRef } from 'react'
import { RSCFundsStyle } from './RSCFunds.style'
import { Button } from '../UIKit'

const RscFunds = forwardRef(({ onScreen }, ref) => {
  return (
    <RSCFundsStyle>
      <div className="wrapper">
        <div className="container">
          <h2>RSC FUND</h2>

          <p>
            The RSC fund is an initiative started by RSC, in order to create
            more attention for the financial hurdle that exists in racing. A lot
            of talented races struggle with this during their career. We want to
            create attention, raise money and give money from the project back
            to the racers with this fund.
          </p>

          <Button>
            JOIN OUR DISCORD
          </Button>
        </div>
      </div>
    </RSCFundsStyle>
  )
})

export default RscFunds

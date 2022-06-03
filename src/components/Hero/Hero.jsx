import { HeroStyle } from "./Hero.style"
import { forwardRef, useEffect, useState } from "react"
import { Button } from '../UIKit'
import RunningText from '../UIKit/RunningText/RunningText'

const Hero = forwardRef(({ onScreen }, ref) => {
  return (
    <HeroStyle ref={ref}>
      <div className="running-text-wrapper">
        <RunningText image="/assets/hero/running" withFlag />
      </div>

      <div className="content">
        <Button
          variant="primary"
        > JOIN OUR DISCORD </Button>
      </div>
    </HeroStyle>
  )
})

export default Hero

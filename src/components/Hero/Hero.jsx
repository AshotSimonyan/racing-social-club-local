import { HeroStyle } from "./Hero.style"
import { Button } from "../UIKit"
import { forwardRef, useEffect, useState } from "react"
import { Title } from "../Animations"
import { Fade, Rotate } from "react-awesome-reveal"

const Hero = forwardRef(({ onScreen }, ref) => {
  const [animationClass, setAnimationClass] = useState("")
  const title1 = "Welcome to"
  const title2 = "Camp Pluto"

  const showNextAnimation = () => {
    if (!animationClass) {
      setAnimationClass("fade-in")
    }
  }

  return (
    <HeroStyle ref={ref}>
      <div className="content">
        <div className="left">
          <div className="title" onAnimationEnd={showNextAnimation}>
            <Title startAnim={onScreen}>
              <span>Welcome to </span>
              <span className="color-primary"> Camp Pluto</span>
            </Title>
          </div>
          <Fade triggerOnce direction={"down"} delay={3600} duration={800}>
            <p className="text">
              Camp Pluto is the first ever members-only campground where
              memberships are bought on the Ethereum blockchain as NFTs
            </p>
          </Fade>

          <Button target="_blank" href="https://discord.gg/VcpBh2af">
            JOIN OUR DISCORD
          </Button>
        </div>
        <div className="right">
          <ul className="img-list">
            {[...Array(9)].map((_, index) => {
              return (
                <li key={index}>
                  <picture>
                    <source
                      srcSet={`/assets/hero-images/${index + 1}.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`/assets/hero-images/${index + 1}.png`}
                      alt="camp-pluto"
                    />
                  </picture>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </HeroStyle>
  )
})

export default Hero

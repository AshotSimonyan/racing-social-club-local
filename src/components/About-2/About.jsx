import { AboutStyle } from "./About.style"
import { forwardRef, useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import RunningText from "../UIKit/RunningText/RunningText"
import { Button } from "../UIKit"

const About = forwardRef(({ onScreen }, ref) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (onScreen) {
      setStart(true)
    }
  }, [onScreen])

  return (
    <AboutStyle ref={ref} startAnim={start}>
      <RunningText image="/assets/about/running" withFlag />
      <div className="content-wrapper">
        <div className="content-1">
          <div className="img-wrapper">
            <picture>
              <source
                media="(min-width: 480px)"
                srcSet="/assets/about/about1.webp"
              />
              <source
                media="(max-width: 479px)"
                srcSet="/assets/about/about1-mobile.png"
                type="image/webp"
              />
              <img src="/assets/about/about1.png" alt="racing" />
            </picture>
          </div>
        </div>
        <div className="content-2">
          <div className="title">
            <Fade
              triggerOnce
              cascade
              direction={"right"}
              fraction={0.2}
              duration={1000}
              delay={2000}
            >
              <h2 className="first">7,878 Unique</h2>
              <h2 className="second">Racers are</h2>
              <h2 className="third">Waiting For YOU</h2>
            </Fade>
          </div>

          <Fade
            triggerOnce
            direction={"right"}
            fraction={0}
            duration={1000}
            delay={3500}
          >
            <div className="text">
              <p>Racing Social Club is a collection of 7878 Racers who are randomly generated on the Ethereum blockchain. The community of racing fans and NFT enthusiasts will gain access to our most exclusive events, which we will organize multiple times a year. The events will give our Rookies the opportunity to feel like a real Racer. This includes fast cars, race weekends, eSports events, entertainment, VIP experiences, giveaways and more!</p>
              <p>The Rookies in our community can gain access to the Racing Social Club benefits, by holding one of the unique NFT’s. We prioritize the quality of both the artworks and utilities of the Racing Social Club brand.</p>
            </div>
            <div className="button-wrapper">
              {/*<Button*/}
              {/*  variant="primary"*/}
              {/*  href="#"*/}
              {/*  target="_blank"*/}
              {/*  withIcon={false}*/}
              {/*>*/}
              {/*    REGISTER FOR RAFFLE*/}
              {/*</Button>*/}
                <Button
                    variant="primary"
                    href="https://discord.com/invite/racingsocialclubnft"
                    target="_blank"
                >
                    JOIN OUR DISCORD
                </Button>
            </div>
          </Fade>
        </div>
        <div className="content-3">
          <div className="img-wrapper">
            <picture>
              <source srcSet="/assets/about/about2.webp" type="image/webp" />
              <img src="/assets/about/about2.png" alt="racing" />
            </picture>
          </div>
        </div>
      </div>
    </AboutStyle>
  )
})

export default About

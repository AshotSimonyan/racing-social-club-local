import { AboutStyle } from "./About.style"
import { forwardRef, useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import RunningText from "../UIKit/RunningText/RunningText"
import { Parallax } from "react-scroll-parallax"
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
              <source srcSet="/assets/about/about1.webp" type="image/webp" />
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
              fraction={0.3}
              duration={1000}
              delay={3800}
            >
              <Parallax
                className="transition"
                translateX={[-45, 0]}
                onEnter={e => console.log(e)}
              >
                <h1>7,878 Unique</h1>
              </Parallax>
              <Parallax className="transition" translateX={[-30, 0]}>
                <h1>Racers are</h1>
              </Parallax>
              <Parallax className="transition" translateX={[-15, 0]}>
                <h1>Waiting For YOU</h1>
              </Parallax>
            </Fade>
          </div>

          <Fade
            triggerOnce
            direction={"right"}
            fraction={0}
            duration={1000}
            delay={5200}
          >
            <Parallax
              className="transition"
              speed={0}
              onEnter={e => console.log(e)}
            >
              <div className="text">
                <p>
                  The Racing Social CLub is a collection of 7,878 Racers with
                  hundreds of elements.
                </p>
                <p>
                  Each artwork is original, with its own color palette and
                  creation. The objective was to make each Racer unique in order
                  to prioritize quality above quantity.
                </p>
                <Button variant="outlined">JOIN OUR DISCORD</Button>
              </div>
            </Parallax>
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

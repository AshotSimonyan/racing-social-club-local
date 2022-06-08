import React, { memo, useMemo, useState } from "react"
import { Carousel2Style } from "./Carousel2.style"
import {Arrow, Carousel, Icon} from "../UIKit"
import { theme } from "../../styles/theme"

const Carousel2 = () => {
  const [current, setCurrent] = useState(1)

  const settings = useMemo(() => {
    return {
      infinite: true,
      arrows: true,
      nextArrow: <Arrow direction={"next"} color={theme.colors.white} />,
      prevArrow: <Arrow direction={"prev"} color={theme.colors.white} />,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      fade: true,
    }
  }, [])

  const handleBeforeChange = async (oldIndex, newIndex) => {
    setCurrent(newIndex + 1)
  }

  return (
    <Carousel2Style>
      <Carousel settings={settings} beforeChange={handleBeforeChange}>
        {[...Array(10)].map((item, index) => {
          return (
            <div className="carousel-item" key={`carousel-${index}`}>
              <picture>
                <source
                  // srcSet={`/assets/carousel/carousel${index + 1}.webp`}
                  srcSet={`/assets/carousel/carousel-default.webp`}
                  type="image/webp"
                />
                <img
                  // src={`/assets/carousel/carousel${index + 1}.png`}
                  src={`/assets/carousel/carousel-default.png`}
                  alt="racing"
                />
              </picture>
            </div>
          )
        })}
      </Carousel>
      <div className="count">{current} / 10</div>
    </Carousel2Style>
  )
}

export default memo(Carousel2)

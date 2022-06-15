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
        {[...Array(2)].map((item, index) => {
          return (
            <div className="carousel-item" key={`carousel-${index}`}>
              <picture>
                {/*<source*/}
                {/*  media="(max-width: 575px)"*/}
                {/*  srcSet={`/assets/carousel/standard-${index + 1}.jpg`}*/}
                {/*/>*/}

                <img src={`/assets/carousel/legendary-${index + 1}.jpg`} alt="racing" />
              </picture>
            </div>
          )
        })}
      </Carousel>
      <div className="count">{current} / 2</div>
    </Carousel2Style>
  )
}

export default memo(Carousel2)

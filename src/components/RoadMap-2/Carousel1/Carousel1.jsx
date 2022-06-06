import React, { memo, useMemo, useState } from "react"
import { Carousel1Style } from "./Carousel1.style"
import { Carousel } from "../../UIKit"

const Carousel1 = () => {
  const [percent, setPercent] = useState(0)
  const [current, setCurrent] = useState(1)
  const settings = useMemo(() => {
    return {
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      fade: true,
    }
  }, [])

  const handleBeforeChange = async (oldIndex, newIndex) => {
    setCurrent(newIndex + 1)
    setPercent(((newIndex + 1) / 5) * 100)
  }

  return (
    <Carousel1Style>
      <Carousel settings={settings} beforeChange={handleBeforeChange}>
        {[...Array(5)].map((item, index) => {
          return (
            <div className="carousel-item" key={`carousel-${index}`}>
              <picture>
                <source
                  media="(max-width: 575px)"
                  srcSet={`/assets/carousel/mobile${index + 1}.jpg`}
                />
                <img src={`/assets/carousel/${index + 1}.jpg`} alt="racing" />
              </picture>
            </div>
          )
        })}
      </Carousel>
      <div className="progress-wrapper">
        <div className="count">{current} - 5</div>
        <div className="progress">
          <span style={{ height: `${percent}%` }} />
        </div>
      </div>
    </Carousel1Style>
  )
}

export default memo(Carousel1)

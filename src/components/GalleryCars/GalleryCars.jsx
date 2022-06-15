import React, { useEffect, useMemo, useState } from 'react'
import { GalleryCarsStyle } from './GalleryCars.style'
import { Fade } from 'react-awesome-reveal'
import { Button, Carousel, Icon } from '../UIKit'
import { theme } from '../../styles/theme'
import { Arrow } from '../UIKit'
import { projImgList } from './data'


function GalleryCars(props) {
  const [members, setMembers] = useState(null)

  useEffect(() => {
    fetch('https://discord.com/api/v9/invites/racingsocialclubnft?with_counts=true&with_expiration=true')
      .then(response => response.json())
      .then(data => setMembers(data.approximate_member_count))
  }, [])
  console.log(members)

  const settings = useMemo(() => {
    return {
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 600,
      centerMode: true,
      centerPadding: '40px',
      focusOnSelect: true,
      nextArrow: <Arrow direction={'next'} color={theme.colors.white} />,
      prevArrow: <Arrow direction={'prev'} color={theme.colors.white} />,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            centerPadding: '80px'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '60px'
          }
        }
      ]
    }
  }, [])

  return (
    <GalleryCarsStyle>
      {/*carousel*/}
      <div className="wrapper wrapper-carousel">
        <Carousel
          settings={settings}
          className="carousel"
        >
          {projImgList.map((img, index) => {
            return (
              <div className="item" key={index}>
                <img src={img} alt="" />
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className="wrapper wrapper-members">
        <div className="container">
          <div className="content">
            <Fade
              triggerOnce
              cascade
              direction={'up'}
              fraction={0.5}
              duration={1000}
            >
              <p className="ls-10 fw-bold">JOIN TO DISCORD COMMUNITY</p>

              <h1 className="title">{members || '29603'}MEMBER</h1>

              <p className="text text-center">
                Racing Social Club builds a loyal and strong community. Become a
                part of it, and we will show you what the brand is all about.
              </p>

              <Button
                variant="outlined"
                href="https://discord.com/invite/racingsocialclubnft"
                target="_blank"
              >
                JOIN OUR DISCORD
              </Button>
            </Fade>
          </div>
        </div>
      </div>

      <div className="flag" />
    </GalleryCarsStyle>
  )
}

export default GalleryCars

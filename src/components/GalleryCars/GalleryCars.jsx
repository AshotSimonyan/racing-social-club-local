import React, {useEffect, useMemo, useState} from 'react'
import { GalleryCarsStyle } from './GalleryCars.style'
import { Fade } from 'react-awesome-reveal'
import {Button, Carousel, Icon} from '../UIKit'
import { theme } from "../../styles/theme"
import {Arrow} from "../UIKit";
import {projImgList} from  "./data"




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
      centerPadding: "20px",
      focusOnSelect: true,
      nextArrow: <Arrow direction={"right"} color={theme.colors.white} />,
      prevArrow: <Arrow direction={"left"} color={theme.colors.white} />,
      responsive: [
        {
          breakpoint: theme.breakpoints.xl,
          settings: {
            slidesToShow: 2,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: theme.breakpoints.md,
          settings: {
            slidesToShow: 1,
            centerPadding: "140px",
          },
        },
        {
          breakpoint: theme.breakpoints.sm,
          settings: {
            slidesToShow: 1,
            centerPadding: "40px",
          },
        },
      ],
    }
  }, [])

  return (
    <GalleryCarsStyle>
      {/*carousel*/}
      <div className="wrapper wrapper-carousel">
        <Carousel
          settings={settings}
          className='carousel'
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
              <p className="lt-0">JOIN TO DISCORD COMMUNITY</p>

              <h1 className="title">{members || '29603'}MEMBER</h1>

              <p className="text text-center">
                Racing Social Club will have a loyal and strong community,
                heading in to a very important part of the race.
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

import React, {forwardRef, memo, useMemo} from "react"
import { TeamStyle } from "./Team.style"
import { theme } from "../../styles/theme"
import RunningText from "../UIKit/RunningText/RunningText"
import {Arrow, Carousel, Icon} from "../UIKit"

const teamList = [
  {
    name: "Jeroen",
    position: "Business Director",
    img: "/assets/team/1.jpg",
    twitter: '#'
  },
  {
    name: "Luuk",
    position: "Creative Director",
    img: "/assets/team/2.jpg",
    twitter: '#'
  },
  {
    name: "JP",
    position: "Development Director",
    img: "/assets/team/3.jpg",
    twitter: '#'
  },
  {
    name: "Anri",
    position: "Marketing Director",
    img: "/assets/team/4.jpg",
    twitter: '#'
  }
]


const Team = forwardRef(({ onScreen }, ref) => {
  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      speed: 500,
      autoplaySpeed: 2000,
      autoplay: true,
      nextArrow: <Arrow direction={"next"} color={theme.colors.white} />,
      prevArrow: <Arrow direction={"prev"} color={theme.colors.white} />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  }, []);
  return (
    <TeamStyle ref={ref}>
      <div className="running-text-wrapper">
        <RunningText image="/assets/team/running" />
      </div>
      <div className="container">
        <div className="content wrapper">
          <Carousel settings={settings} >
            {teamList.map(({ img, url,  name, twitter, position, description }, index) => {
              return (
                <div className="team-card" key={index}>
                  <div className="img-wrapper">
                    <img src={img} alt={name} />
                  </div>
                  <p className="name">
                    {name}
                    {twitter &&
                    <a
                      href={twitter}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon name="twitter" color={theme.colors.white} size={24} />
                    </a>
                    }
                  </p>
                  <p className="position">{position}</p>
                </div>
              );
            })}
            <div className="team-card">
              <div className="img-wrapper">
                <img src="/assets/team/nft-stack.jpg" alt="" />
              </div>
              <div className="name">
                <img src="/assets/NFTstack-logo.svg" alt="NFTstack" />
                <a
                  href="https://www.nftstack.info/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon name="link" color={theme.colors.white} size={24} />
                </a>
              </div>
              <p className="position">Art & Smart Contract</p>
            </div>
          </Carousel>
        </div>
      </div>
    </TeamStyle>
  )
})

export default memo(Team)

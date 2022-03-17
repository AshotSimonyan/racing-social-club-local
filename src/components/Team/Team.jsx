import React, { forwardRef, memo } from "react"
import { TeamStyle } from "./Team.style"
import { theme } from "../../styles/theme"
import RunningText from "../UIKit/RunningText/RunningText"
import { Icon } from "../UIKit"

const teamList = [
  {
    name: "The Nightrider",
    position: "Founder",
    img: {
      png: "/assets/team/team1.png",
      webp: "/assets/team/team1.webp",
    },
  },
  // {
  //   name: "Lorem Ipsum",
  //   position: "Marketing",
  //   img: {
  //     png: "/assets/team/team2.png",
  //     webp: "/assets/team/team2.webp",
  //   },
  // },
  {
    name: "Nitro",
    position: "Founder",
    img: {
      png: "/assets/team/team3.png",
      webp: "/assets/team/team3.webp",
    },
  },
  // {
  //     name: "Lorem Ipsum",
  //     position: "Marketing",
  //     img: {
  //         png: "/assets/team/team3.png",
  //         webp: "/assets/team/team3.webp",
  //     },
  // },
]

const Team = forwardRef(({ onScreen }, ref) => {
  return (
    <TeamStyle ref={ref}>
      <RunningText image="/assets/team/running" withBorder />
      <div className="content-wrapper">
        <div className="content2">
          <div className="img-wrapper">
            <picture>
              <source srcSet="/assets/team/team-big.webp" type="image/webp" />
              <img src="/assets/team/team-big.jpg" alt="racing" />
            </picture>
          </div>
        </div>
        <div className="content3">
          <ul className="team-list">
            {teamList.map(({ name, position, img }) => {
              return (
                <li className="team-card" key={name}>
                  <div className="img-wrapper">
                    <picture>
                      <source srcSet={img.webp} type="image/webp" />
                      <img src={img.png} alt={position} />
                    </picture>
                  </div>
                  <p className="name">
                    {name}{" "}
                    <a href="#">
                      <Icon name="twitter" color={theme.colors.white} />
                    </a>
                  </p>
                  <p className="position">{position}</p>
                </li>
              )
            })}
            <li className="team-card">
              <div className="img-wrapper">
                <picture>
                  <source srcSet="/assets/team/team4.webp" type="image/webp" />
                  <img src="/assets/team/team4.png" alt="" />
                </picture>
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
            </li>
          </ul>
        </div>
      </div>
    </TeamStyle>
  )
})

export default memo(Team)

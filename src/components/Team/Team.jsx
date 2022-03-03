import React, { forwardRef, memo, useState } from "react"
import { TeamStyle } from "./Team.style"
import { Title } from "../Animations"
import { Fade } from "react-awesome-reveal"
import RunningText from "../UIKit/RunningText/RunningText"

const teamList = [
  {
    name: "Nathan K.",
    position: "Project Lead",
    img: {
      png: "/assets/team/team.png",
      webp: "/assets/team/team.webp"
    }
  },
  {
    name: "Barbare S.",
    position: "Art",
    img: {
      png: "/assets/team/team.png",
      webp: "/assets/team/team.webp"
    }
  },
  {
    name: "Scott N.",
    position: "Art & Technology",
    img: {
      png: "/assets/team/team.png",
      webp: "/assets/team/team.webp"
    }
  },
  {
    name: "NFT Stack",
    position: "Smart Contract & Website",
    img: {
      png: "/assets/team/team.png",
      webp: "/assets/team/team.webp"
    }
  },
]

const Team = forwardRef(({ onScreen }, ref) => {
  return (
    <TeamStyle ref={ref}>
      <RunningText image="/assets/team/running" withBorder />
      <div className="content-wrapper">
        <div className="content1">
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ornare erat. Ut
            ultricies nunc in quam tincidunt, in blandit sapien euismod. </p>
        </div>
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
                      <img src={img.png} alt="camp-pluto" />
                    </picture>
                  </div>
                  {/*<p className="name">{name}</p>*/}
                  {/*<p className="position">{position}</p>*/}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </TeamStyle>
  )
})

export default memo(Team)

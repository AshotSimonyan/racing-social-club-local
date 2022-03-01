import React, { forwardRef, useState } from "react"
import { TeamStyle } from "./Team.style"
import { Title } from "../Animations"
import { Fade } from "react-awesome-reveal"

const teamList = [
  {
    name: "Nathan K.",
    position: "Project Lead",
    img: {
      png: "/assets/hero-images/1.png",
      webp: "/assets/hero-images/1.webp",
    },
  },
  {
    name: "Barbare S.",
    position: "Art",
    img: {
      png: "/assets/hero-images/2.png",
      webp: "/assets/hero-images/2.webp",
    },
  },
  {
    name: "Scott N.",
    position: "Art & Technology",
    img: {
      png: "/assets/hero-images/3.png",
      webp: "/assets/hero-images/3.webp",
    },
  },
  {
    name: "NFT Stack",
    position: "Smart Contract & Website",
    img: {
      png: "/assets/hero-images/5.png",
      webp: "/assets/hero-images/5.webp",
    },
  },
  {
    name: "Mike K.",
    position: "Marketing",
    img: {
      png: "/assets/hero-images/7.png",
      webp: "/assets/hero-images/7.webp",
    },
  },
]

const Team = forwardRef(({ onScreen }, ref) => {
  return (
    <TeamStyle ref={ref}>
      <div className="container">
        <div className="content">
          <Title className="title" as="h2" startAnim={onScreen}>
            <span>Team</span>
          </Title>
          <Fade
            triggerOnce
            cascade
            direction={"down"}
            fraction={0}
            duration={700}
            delay={100}
          >
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
                    <p className="name">{name}</p>
                    <p className="position">{position}</p>
                  </li>
                )
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </TeamStyle>
  )
})

export default Team

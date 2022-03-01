import React, { forwardRef, useState } from "react"
import { FAQStyle } from "./FAQ.style"
import Collapsible from "react-collapsible"
import { Button, Icon } from "../UIKit"
import { Title } from "../Animations"
import { Fade } from "react-awesome-reveal"
import RunningText from "../UIKit/RunningText/RunningText"

const data = [
  {
    question: "WHAT IS AN NFT?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ornare erat. Ut ultricies nunc in quam tincidunt, in blandit sapien euismod."
  },
  {
    question: "HOW CAN I BUY A RACER NFT?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ornare erat. Ut ultricies nunc in quam tincidunt, in blandit sapien euismod."
  },
  {
    question: "WHAT DOES “MINT” MEAN?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ornare erat. Ut ultricies nunc in quam tincidunt, in blandit sapien euismod."
  },
  {
    question: "HOW MUCH DOES IT COST TO BUY ONE OF THE RACERS?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ornare erat. Ut ultricies nunc in quam tincidunt, in blandit sapien euismod."
  },
  {
    question: "WHY DID YOU CHOOSE RACERS?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ornare erat. Ut ultricies nunc in quam tincidunt, in blandit sapien euismod."
  }
]
const FAQ = forwardRef(({ onScreen }, ref) => {
  const [openPosition, setOpenPosition] = useState(null)

  const handleTriggerClick = position => {
    if (openPosition === position) {
      setOpenPosition(null)
    } else {
      setOpenPosition(position)
    }
  }
  return (
    <FAQStyle ref={ref}>
      <RunningText image="/assets/faq/running" withBorder />
      <div className="faq-content">
        {data.map((q, i) => {
          return (
            <Collapsible
              key={"Collapsible" + i}
              handleTriggerClick={handleTriggerClick}
              transitionTime={500}
              accordionPosition={i}
              open={openPosition === i}
              trigger={
                <Fade
                  triggerOnce
                  cascade
                  direction={"down"}
                  fraction={0.8}
                  duration={800}
                >
                  <div className="trigger-inner">
                    <p>{q.question}</p>
                  </div>
                </Fade>
              }
            >
              <p>{q.answer}</p>
            </Collapsible>
          )
        })}
      </div>
      <div className="contact-block">
        <div className="contact-content">
          <Fade
            triggerOnce
            cascade
            direction={"up"}
            fraction={1}
            duration={1000}
          >
            <p>JOIN TO DISCORD COMMUNITY</p>
            <h1 className='title'>4567MEMBER</h1>
            <p className='text'>Racing Social Club will have a loyal and strong community, heading in to a very important part of the
              race.</p>
            <Button variant='outlined'>JOIN OUR DISCORD</Button>
          </Fade>

        </div>
      </div>
      <img src="/assets/faq/flag.svg" alt="" />
    </FAQStyle>
  )
})

export default FAQ

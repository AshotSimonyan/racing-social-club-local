import React, { forwardRef, useState } from "react"
import { FAQStyle } from "./FAQ.style"
import Collapsible from "react-collapsible"
import { Button } from "../UIKit"
import { Fade } from "react-awesome-reveal"
import RunningText from "../UIKit/RunningText/RunningText"

const data = [
  {
    question: "WHAT IS AN NFT?",
    answer:
      "An NFT is a Non-Fungible Token, which is a digital asset that is interchangeable through the internet. Ownership of the digital asset can be verified through the blockchain. The verifiable ownership makes it easier to give utility to the holder with the underlying smart contract. The world is getting more digital over time, and NFTs will become one of the center points of life.",
  },
  {
    question: "HOW CAN I BUY a RSC NFT?",
    answer:
      "You can mint one of our NFT’s in pre-sale when you earned a whitelist spot or won the raffle. After that you can try your luck at the public sale to mint one. If you are not able to mint a NFT, you can buy one on Opensea. Minting is only done on our OFFICIAL site. We will release a video in our discord on how to mint the NFT and which wallet to use.",
  },
  {
    question: "WHAT DOES “MINT” MEAN?",
    answer:
      "In simple terms, minting an NFT is the process of turning a digital file into a digital asset. When you mint an NFT, you ‘buy’ a collectible that is stored on the blockchain and will appear in your wallet.",
  },
  {
    question: "HOW DOES IT COST TO BUY ONE OF THE RACERS?",
    answer:
      "The mint price of our Racer NFTs is yet to be determined. We will make sure that the price of the NFT will reflect the value of the NFT. We added a lot of utilities to our NFT’s. We want to make the NFTs accessible for everyone, but we also do not want to subtract too much from our future potential.",
  },
  {
    question: "WHY DID THE TEAM CHOSE RACERS FOR THE NFT? 1.0",
    answer:
      "Racing is one of the most exciting sports in the world. Speed, danger, emotion, competition. A race has everything to entertain a big crowd. The team consists of real racing fans who decided to express their passion in an NFT collection. The innovative technology behind NFTs are perfectly aligned with the ideas that Racing Social Club brand has in store.",
  },
  {
    question: "WHY DID YOU CHOOSE RACERS FOR NFT? 2.0",
    answer:
      "As one of the first racing NFTs, we have a head start to make use of the massive potential. Next to our amazing utility, we will keep adding partnerships and grow as a brand. For the long term, we see RSC becoming a household name in the racing industry. We appreciate our early supporters the most. They will get the chance to benefit from the brand that we aim to build.",
  },
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
                  fraction={0.5}
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
            fraction={0.5}
            duration={1000}
          >
            <p>JOIN TO DISCORD COMMUNITY</p>
            <h1 className="title">4567MEMBER</h1>
            <p className="text">
              Racing Social Club will have a loyal and strong community, heading
              in to a very important part of the race.
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
      <img src="/assets/faq/flag.svg" alt="" />
    </FAQStyle>
  )
})

export default FAQ

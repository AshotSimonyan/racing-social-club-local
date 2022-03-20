import React, {forwardRef, useState} from "react"
import {FAQStyle} from "./FAQ.style"
import Collapsible from "react-collapsible"
import {Button} from "../UIKit"
import {Fade} from "react-awesome-reveal"
import RunningText from "../UIKit/RunningText/RunningText"
import data from "./dataFAQ";

const FAQ = forwardRef(({onScreen}, ref) => {
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
            <RunningText image="/assets/faq/running" withBorder/>
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
                            {q.answer}
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
            <img src="/assets/faq/flag.svg" alt=""/>
        </FAQStyle>
    )
})

export default FAQ

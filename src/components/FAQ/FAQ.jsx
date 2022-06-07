import React, {forwardRef, useState} from 'react';
import { FAQStyle } from './FAQ.style'
import Collapsible from 'react-collapsible'
import { Fade } from 'react-awesome-reveal'
import data from './data-faq'

const Faq = forwardRef((props , ref) => {
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
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>FAQ</h1>
          </div>

          <div className="content__faq">
            {data.map((q, i) => {
              return (
                <Collapsible
                  key={'Collapsible' + i}
                  handleTriggerClick={handleTriggerClick}
                  transitionTime={500}
                  accordionPosition={i}
                  open={openPosition === i}
                  trigger={
                    <Fade
                      triggerOnce
                      cascade
                      direction={'down'}
                      fraction={0.5}
                      duration={800}
                    >
                      <div className="trigger-inner">
                        <p>{q.question}</p>
                      </div>
                    </Fade>
                  }
                >
                  <div className="answer">
                    {q.answer}
                  </div>
                </Collapsible>
              )
            })}
          </div>
        </div>
      </div>
    </FAQStyle>
  )
})

export default Faq

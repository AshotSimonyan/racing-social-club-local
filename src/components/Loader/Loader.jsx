import { LoaderStyle } from "./Loader.style"
import { Fade } from "react-awesome-reveal"
import { useEffect, useState } from "react"

const number = '100'
const duration = '8.5'
const MyComponent = ({ className }) => {
  const [count, setCount] = useState("0")
  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0,4))
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;
    let timer

    setTimeout( () => timer = setInterval(() => {
      start += 4;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)
    }, incrementTime), 1000);

  }, [number, duration]);
  return (

    <LoaderStyle className={className}>
      <div className="progress">
      <Fade
        triggerOnce
        cascade
        direction={"right"}
        fraction={1}
        delay={400}
        duration={600}
        damping={2}
      >
        {/*<div className="progress">049%</div>*/}
        <p>{(count === number || count === '0') ? count : `0${count}`}%</p>
      </Fade>
      </div>
    </LoaderStyle>

  )
}

export default MyComponent

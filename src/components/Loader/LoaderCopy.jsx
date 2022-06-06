import { LoaderStyle } from "./Loader.style"
import { Fade } from "react-awesome-reveal"
import { useEffect, useRef, useState } from "react"

const Loader = ({ onLoad }) => {
  const [value, setValue] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const counter = useRef(0)

  useEffect(() => {
    let images = document.querySelectorAll("img")
    images.forEach(img => {
      if (img.complete) {
        incrementCounter(images.length)
      } else {
        img.addEventListener("load", () => incrementCounter(images.length))
      }
    })
    return () => {
      setValue(0)
      counter.current = 0
    }
  }, [])

  function incrementCounter(len) {
    counter.current++
    if (counter.current === len) {
      setValue(100)
      setTimeout(() => {
        setLoaded(true)
        onLoad()
      }, 500)
    } else {
      setValue((100 / len) * counter.current)
    }
  }

  return (
    <LoaderStyle className={loaded ? "hide-loader" : ""}>
      <div className="progress">
        <Fade
          triggerOnce
          cascade
          direction={"up"}
          fraction={0.5}
          delay={400}
          duration={600}
          damping={2}
        >
          <p>{value.toFixed()}%</p>
        </Fade>
      </div>
    </LoaderStyle>
  )
}

export default Loader

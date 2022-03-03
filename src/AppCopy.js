import { useEffect, useState, useRef } from "react"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import { useOnScreen } from "./hooks/useOnScreen"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Team from "./components/Team/Team"
import HorizontalScroll from "react-scroll-horizontal"
import NavBar from "./components/Navbar/NavBar"
import RoadMap from "./components/RoadMap/RoadMap";

function App() {
    const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(5);
  const [, setLocked] = useLockedBody(true)
  const [scrollTo, setScrollTo] = useState(null)
  const parentRef = useRef(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null);
  const roadMapRef = useRef(null);
  const [animValues, setAnimValues] = useState(0);

  const aboutScreen = useOnScreen(aboutRef)
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  const refMapping = {
    "#about": aboutRef,
    "#roadMap": roadMapRef,
    "#faq": faqRef,
    "#team": teamRef,
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3500)
  })

    // useEffect(() => {
    //     if (scrollTo) {
    //         refMapping[scrollTo]?.current?.scrollIntoView({
    //             behavior: "smooth",
    //         })
    //         setScrollTo(false)
    //     }
    // }, [scrollTo])

  useEffect(() => {
    if (scrollTo) {
        refMapping[scrollTo]?.current?.scrollIntoView();

        const parent = document.querySelector('.parent >div')
        const pageWidth = parseInt(window.getComputedStyle(parent).width);
        setAnimValues(parseInt(refMapping[scrollTo]?.current.offsetLeft))

        let percent = Math.round(refMapping[scrollTo]?.current.offsetLeft / pageWidth * 100);
        if(percent < 5) {
            percent = 5;
        }
        if(percent <= 100 && percent >= 5) {
            setProgress(percent)
        }
        setScrollTo(false)
    }
  }, [scrollTo])

  const handleLinkClick = to => {
    setScrollTo(to)
  }

  const handleScroll = () => {
    let parent = document.querySelector('.parent >div')
    const pageWidth = parseInt(window.getComputedStyle(parent).width);
    const animValues = Math.abs(parentRef.current?.state?.animValues);

    let percent = Math.round(((animValues + parentRef.current.hScrollParent.clientWidth) / pageWidth * 100));
    if(percent < 5) {
      percent = 5;
    }
    if(percent <= 100 && percent >= 5) {
      setProgress(percent);
    }
  }


  return (
    <main

    >
      <Loader className={loading ? "" : "hide-loader"} />
      <div
        className="main-wrapper"
        onWheel={handleScroll}
      >
        <HorizontalScroll
          className='parent'
          reverseScroll
          config={{ stiffness: 100 }}
          ref={parentRef}
          animValues={animValues}
        >
            <About  ref={aboutRef} onScreen={aboutScreen && !loading} />
            <RoadMap ref={roadMapRef} />
            <Team  ref={teamRef} />
            <FAQ  ref={faqRef} />
        </HorizontalScroll>
      </div>

      <NavBar onLinkClick={handleLinkClick} progress={progress} onScroll={handleScroll}   />
    </main>
  )
}

export default App

import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import About from 'components/About/About'
import { useOnScreen } from './hooks/useOnScreen'
import Loader from './components/Loader/LoaderCopy'
import { useLockedBody } from './hooks/useLockedBody'
import Team from './components/Team/Team'
import HorizontalScroll from 'react-scroll-horizontal'
import NavBar from './components/Navbar/NavBar'
import Hero from 'components/Hero/Hero'
import Roadmap from './components/Roadmap/Roadmap'
import RSCFunds from './components/RSCFunds/RSCFunds'
import RscUtility from './components/RSCUtility/RSCUtility'
import GalleryCars from './components/GalleryCars/GalleryCars'
import FAQ from './components/FAQ/FAQ'

function App() {
  // const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(5)
  const [animValues, setAnimValues] = useState(0)
  const [touchDevice, setTouchDevice] = useState(false)
  const parentRef = useRef(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const roadMapRef = useRef(null)
  const [, setLocked] = useLockedBody(false)

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
      if (
          typeof window !== "undefined" &&
          window?.matchMedia("(pointer: coarse)").matches
      ) {
          setTouchDevice(true)
      }
  }, [])
  //
  // // useEffect(() => {
  // //     setTimeout(() => {
  // //         setLoading(false)
  // //         setLocked(false)
  // //     }, 3500)
  // // }, [])
  //
  // const calculateProgress = useCallback(offsetLeft => {
  //     const parent = document.querySelector(".parent >div")
  //     const pageWidth = parseInt(window.getComputedStyle(parent).width)
  //     let percent = Math.round(
  //         ((offsetLeft + parentRef.current.hScrollParent.clientWidth) / pageWidth) *
  //         100
  //     )
  //     if (percent < 5) {
  //         percent = 5
  //     }
  //     return percent
  // }, [])
  //
  const handleLinkClick = to => {
      const offsetLeft = parseInt(refMapping[to]?.current.offsetLeft)
      const animValues = Math.abs(parentRef.current?.state.animValues)
      if (touchDevice) {
          refMapping[to]?.current.scrollIntoView({
              inline: "start",
          })
      } else {
          setAnimValues(animValues - offsetLeft)
          // setProgress(calculateProgress(offsetLeft))
      }
  }
  //
  // const handleScroll = () => {
  //     const animValues = Math.abs(parentRef.current?.state?.animValues)
  //     setProgress(calculateProgress(animValues))
  // }
  //
  // const handleLoad = () => {
  //     setLoaded(true)
  // }

  return (
    <>
      {/*<Loader onLoad={handleLoad} />*/}
      <NavBar
          onLinkClick={handleLinkClick}
          // progress={progress}
          // onScroll={handleScroll}
          // touchDevice={touchDevice}
      />
      <div className="main-wrapper">
        <Hero />
        <About />
        <Roadmap />
        <RSCFunds />
        <RscUtility />
        <FAQ />
        <GalleryCars />
        {/*<HorizontalScroll*/}
        {/*    reverseScroll*/}
        {/*    className="parent"*/}
        {/*    config={{ stiffness: 50 }}*/}
        {/*    ref={parentRef}*/}
        {/*    animValues={animValues}*/}
        {/*>*/}
        {/*    <About ref={aboutRef} onScreen={aboutScreen && loaded} />*/}
        {/*    <RoadMap ref={roadMapRef} />*/}
        {/*    <Team ref={teamRef} />*/}
        {/*    <FAQ ref={faqRef} />*/}
        {/*</HorizontalScroll>*/}
      </div>
    </>
  )
}

export default App

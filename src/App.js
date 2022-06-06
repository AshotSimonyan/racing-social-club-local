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
import Legendaries from "./components/Legendaries/Legendaries";
import Driver from "./components/Driver/Driver";
const scrollIntoView = require("scroll-into-view")

function App() {
  const [loaded, setLoaded] = useState(false)
  const [scrollTo, setScrollTo] = useState(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const roadMapRef = useRef(null)
  const [, setLocked] = useLockedBody(false)


  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  useEffect(() => {
    if (scrollTo) {
      scrollIntoView(refMapping[scrollTo]?.current, {
        align: {
          top: 0,
        },
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  const refMapping = {
    // "#hero": heroRef,
    // "#about": aboutRef,
    // "#roadmap": roadmapRef,
    // "#utilities": utilitiesRef,
    "#team": teamRef,
    // "#faq": faqRef,
  }

  const handleLinkClick = to => {
    setScrollTo(to)
  }

  const handleLoad = () => {
      setLoaded(true)
  }

  return (
    <>
      <Loader onLoad={handleLoad} />
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
        <Driver />
        <RSCFunds />
        <Legendaries />
        <RscUtility />
        <Team ref={teamRef}/>
        <FAQ />
        {/*<GalleryCars />*/}


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

import { useEffect, useState, useRef } from 'react'
import About from 'components/About/About'
import Loader from './components/Loader/Loader'
import { useLockedBody } from './hooks/useLockedBody'
import Team from './components/Team/Team'
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
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const roadMapRef = useRef(null)
  const [, setLocked] = useLockedBody(true)


  useEffect(() => {

    window.history.scrollRestoration = "manual"
  }, [])

  useEffect(() => {
    if (scrollTo) {
      scrollIntoView(refMapping[scrollTo]?.current, {
        align: {
          top: 0,
          topOffset: 60
        },
      })
      setScrollTo(false)
    }
  }, [scrollTo])


  const refMapping = {
    "#hero": heroRef,
    "#about": aboutRef,
    "#roadMap": roadMapRef,
    "#team": teamRef,
    "#faq": faqRef,
  }

  const handleLinkClick = to => {
    setScrollTo(to)
  }

  const handleLoad = () => {
      setLoaded(true)
      setLocked(false)
  }

  return (
    <>
      <Loader onLoad={handleLoad} loaded={loaded} />
      <NavBar
          onLinkClick={handleLinkClick}
      />
      <div className="main-wrapper">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Roadmap ref={roadMapRef} />
        <Driver />
        <RSCFunds />
        <Legendaries />
        <RscUtility />
        <Team ref={teamRef}/>
        <FAQ ref={faqRef}/>
        <GalleryCars />
      </div>
    </>
  )
}

export default App

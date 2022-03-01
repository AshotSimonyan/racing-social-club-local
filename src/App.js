import { useEffect, useState, useRef, useCallback } from "react"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import { useOnScreen } from "./hooks/useOnScreen"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Team from "./components/Team/Team"
import HorizontalScroll from "react-scroll-horizontal"
import NavBar from "./components/Navbar/NavBar"
import RoadMap from "./components/RoadMap/RoadMap"

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(5);
  const [, setLocked] = useLockedBody(true)
  const parentRef = useRef(null);
  const faqRef = useRef(null);
  const aboutRef = useRef(null);
  const roadMapRef = useRef(null);
  const teamRef = useRef(null);

  const aboutScreen = useOnScreen(aboutRef);
  const roadMapScreen = useOnScreen(roadMapRef);
  const faqScreen = useOnScreen(faqRef);
  // const teamScreen = useOnScreen(teamRef);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3500)
  })

  const refMapping = {
    "#about": aboutRef,
    "#roadmap": roadMapRef,
    "#faq": faqRef,
    "#team": teamRef,
  }

  const handleWheel = useCallback(
    (e) => {
      const left = parentRef.current.scrollLeft - (e.nativeEvent.wheelDelta / 2);
      parentRef.current.scrollTo({
        left: left,
        behavior: "auto"
      });
      let progress = (left + parentRef.current.clientWidth) / parentRef.current.scrollWidth * 100;
      if(left <= 0) {
        progress = 5;
      }
      setProgress(progress);
    },
    []
  );

  const handleLinkClick = useCallback((to) => {
    const left = refMapping[to]?.current.offsetLeft;
    parentRef.current.scrollTo({
      left: left
    });
    setProgress((left + parentRef.current.clientWidth) / parentRef.current.scrollWidth * 100);
  }, [])

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const left = parentRef.current.scrollLeft;
      let progress = (left + parentRef.current.clientWidth) / parentRef.current.scrollWidth * 100;
      if(left <= 0) {
        progress = 5
      }
      setProgress(progress);
    })
  }, [])

  return (
    <main>
      <Loader className={loading ? "" : "hide-loader"} />
      <div
        className="main-wrapper"
        onWheel={handleWheel}

      >
        <div
          className='horizontal-scroll'
          ref={parentRef}
          onScroll={handleScroll}
        >
          <About  ref={aboutRef} onScreen={aboutScreen && !loading} />
          <RoadMap ref={roadMapRef} onScreen={roadMapScreen && !loading}/>
          {/*<Team  ref={teamRef} onScreen={teamScreen && !loading} />*/}
          <FAQ  ref={faqRef} onScreen={faqScreen && !loading} />
        </div>

      </div>

      <NavBar onLinkClick={handleLinkClick} progress={progress} onScroll={handleScroll}   />
    </main>
  )
}

export default App

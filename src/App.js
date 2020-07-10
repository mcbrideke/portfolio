import React, { useRef, useEffect, useState } from "react"
import Home from "./pages/Home"
//import { Switch, Route } from "react-router-dom"
import Projects from "./pages/Projects"
import About from "./pages/About"
//import { useSpring } from 'react-spring'
import NavBar from "./components/NavBar"
import "./App.css"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("down")

  useEffect(() => {
   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener("scroll", handleScroll)
  },[])

  function handleScroll() {
    setIsScrolling(true)
    const position = window.pageYOffset
    setScrollPosition(position)
    let isScrolling
    window.clearTimeout( isScrolling );
	  isScrolling = setTimeout(function() {
      setIsScrolling(false)
    }, 66);
  }
  const prevRef= useRef();
   useEffect(() => {
     prevRef.current = scrollPosition;
   }, [scrollPosition]);
   const prevScrollPosition = prevRef.current;

   useEffect(() => {
    const direction = scrollPosition > prevScrollPosition ? "down" : scrollPosition < prevScrollPosition ?  "up" : "none"
    if(direction!=="none") {
      setScrollDirection(direction)
    }
  }, [scrollPosition]);

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const executeScroll = (myRef) => scrollToRef(myRef)

  const playState = isScrolling ? "running" : "paused"
  const transform = scrollDirection === "down" ? "rotate(180deg) scaleY(-1)" : "rotate(0deg)"

  return (
    <div style={{backgroundColor:"green"}}>
      <div className="Menu">
        <NavBar>
            <div className="tang"></div>
            <a onClick={() => executeScroll(homeRef)}>Home</a>
            <a onClick={() => executeScroll(aboutRef)}>About</a>
            <a onClick={() => executeScroll(projectsRef)}>Projects</a>
        </NavBar>
        <div className="diver" style={{animationPlayState:playState, transform:transform}}></div>
      </div>
      
      <div className="Container">
        <div className="Content">
          <Home refProp={homeRef} />
          <Projects refProp={projectsRef} />
          <About refProp={aboutRef} />
        </div>
      </div>
      <div style={{backgroundColor:"green"}}></div>
    </div>
  )
}

export default App
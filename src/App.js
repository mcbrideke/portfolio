import React, { useRef, useEffect, useState } from "react"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NavBar from "./components/NavBar"
import "./App.css"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("down")
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener("scroll", handleScroll)
  },[])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click',handleClick)
   },[])

   function handleClick(e) {
    setCoords({ x: e.clientX, y: e.pageY })
    setIsActive(true)
    let isClicking
    window.clearTimeout( isClicking );
	  isClicking = setTimeout(function() {
      setIsActive(false)
    }, 1000);
  }

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
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const executeScroll = (myRef) => scrollToRef(myRef)
  console.log(coords)
  const playState = isScrolling ? "running" : "paused"
  const transform = scrollDirection === "down" ? "rotate(180deg) scaleY(-1)" : "rotate(0deg)"
  const showNav = scrollPosition > 600 ? "block" :"none";
  const bubblesAnimation = isActive ? "running" : "paused"

  return (
    <div>
      {isActive && <div className="bubbles" style = {{position:"absolute", animationPlayState:bubblesAnimation, top:coords.y-150 + "px", left:coords.x-96 + "px"}}></div>}
      <div className="Menu"  style={{display:showNav}}>
        <NavBar>
            <a onClick={() => executeScroll(homeRef)}>Home</a>
            <a onClick={() => executeScroll(projectsRef)}>Projects</a>
            <a onClick={() => executeScroll(contactRef)}>Contact</a>
        </NavBar>
        <div className="diver" style={{animationPlayState:playState, transform:transform}}></div>
      </div>
        <section id="header">
          <div className="header-grid-container">
            <div className="sun"></div>
            <div className="header-title">
              <h1>Hello,</h1>
              <h1>My name is Kevin,</h1>
              <h1>I'm a web developer</h1>
            </div>
          </div>
        </section>
          <Home refProp={homeRef} />
          <Projects refProp={projectsRef} />
          <Contact refProp={contactRef} />
          <section id="footer">
                <p style={{color:"green"}}> Thanks for visiting my website!</p>
          </section>
    </div>
  )
  
}

export default App
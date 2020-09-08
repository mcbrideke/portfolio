import React, { useRef, useEffect, useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import { useSpring, useTrail, animated } from 'react-spring'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const items = ['Hello,', 'my name is Kevin,', "I'm a web developer."]	
const config = { mass: 5, tension: 2000, friction: 200 }


function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [toggle, set] = useState(true);
  const [lights, setLights] = useState(false);
  
  const trail = useTrail(items.length, {	
    config,	
    opacity: toggle ? 1 : 0,	
    x: toggle ? 0 : 20,	
    height: toggle ? 40 : 0,	
    from: { opacity: 0, x: 20, height: 0 },	
  })

  useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click',handleClick);
   })

  function handleClick(e) {
    if(!isActive){
      setCoords({ x: e.clientX, y: e.pageY });
      setIsActive(true);
      let isClicking;
      window.clearTimeout( isClicking );
      isClicking = setTimeout(function() {
        setIsActive(false);
      }, 1500);
     }
     else {
       setIsActive(false);
     }
  }

  function handleScroll() {
    setIsScrolling(true);
    const position = window.pageYOffset;
    setScrollPosition(position);
    let isScrolling;
    window.clearTimeout( isScrolling );
	  isScrolling = setTimeout(function() {
      setIsScrolling(false);
    }, 66);
  }

  const prevRef= useRef();
  
  useEffect(() => {
    prevRef.current = scrollPosition;
  }, [scrollPosition]);
  
  const prevScrollPosition = prevRef.current;

  useEffect(() => {
    const direction = scrollPosition > prevScrollPosition ? 'down' : scrollPosition < prevScrollPosition ?  'up' : 'none';
    if(direction!=='none') {
      setScrollDirection(direction);
    }
  }, [scrollPosition]);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const executeScroll = (myRef) => scrollToRef(myRef);
  const playState = isScrolling ? 'running' : 'paused';
  const transform = scrollDirection === 'down' ? 'rotate(180deg) scaleY(-1)' : 'rotate(0deg)';
  const showNav = scrollPosition > 600 ? '' :'none';
  const bubblesAnimation = isActive ? '' : 'none';

  return (
    <div>
      {isActive && <div className='bubbles' style = {{position:'absolute', animation:{bubblesAnimation}, top:coords.y-150 + 'px', left:coords.x-96 + 'px'}}></div>}
      <div className='menu' style={{display:showNav}}>
        <nav>
          <a href='#0' onClick={() => executeScroll(homeRef)}>Home</a>
          <a href='#0' onClick={() => executeScroll(projectsRef)}>Projects</a>
          <a href='#0' onClick={() => executeScroll(contactRef)}>Contact</a>
        </nav>
        <div className='diver' style={{animationPlayState:playState, transform:transform}}></div>
      </div>
      <section id='header'>
        <div className='header-grid-container'>
          <div className='sun'></div>
          <div className='header-title'>
            <div className="trails-main" onClick={() => set(state => !state)}>	            
              {trail.map(({ x, height, ...rest }, index) => (	   
                <animated.div	              
                  key={items[index]}	              
                  className="trails-text"	
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>	
                  <animated.h1 style={{ height }}>{items[index]}</animated.h1>	
                </animated.div>	
              ))}
          </div>
        </div>
        </div>
      </section>
      <Home refProp={homeRef} />
      <Projects refProp={projectsRef} />
      <Contact refProp={contactRef} />
      <section id='footer'>
        <div className='footer-content'>
          {!lights && <button className = 'angler-fish' onClick={() => setLights(state => !state)}></button>}
          {lights &&
            <div> 
              <button className = 'angler-fish-dark' onClick={() => setLights(state => !state)}></button>
              <div className='lights-out-text'><h1>Thanks for visiting my website!</h1></div>
            </div>
          }
        </div>
      </section>
    </div>
  )
  
}

export default App
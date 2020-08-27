import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const pages = [
    ({ style }) => <animated.div style={{ ...style }} >
        <p>
  
        </p>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style}}>
        <p>
          
        </p>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style}}>
        
        <p>
           
        </p>
    </animated.div>,
]

const config = { mass: 5, tension: 1000, friction: 200 }

function Contact({ refProp }) {
    const [index, set] = useState(0)
    const transitions = useTransition(index, p => p, {
        config,
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0},
    })
    const activeStyle = {
        opacity:1
    }

    const inactiveStyle = {
        opacity: 0.6
    }

    function showParagraph(i) {
       set(i);
    }

    return (
        <section ref={refProp} id="contact">
            <div className="grid-container">
                <div className="title" style={{backgroundColor:"#83BF5F", color:"#D2ECC5"}}>
                    <h1>Contact</h1>
                </div>
                <div className="about-items" style={{backgroundColor:"#83BF5F", color:"#D2ECC5"}}>
                    <ul>
                        <li className="icon3" style = { index == 0 ? activeStyle : inactiveStyle }>
                            <a 
                                href="#0" 
                                style = { index == 0 ? activeStyle : inactiveStyle } 
                                onClick={() => showParagraph(0)} 
                                className="about-nav"
                            > 
                                Links
                            </a>
                        </li>
                        <li className="icon3" style = { index == 1 ? activeStyle : inactiveStyle }>
                            <a 
                                href="#0" 
                                style = { index == 1 ? activeStyle : inactiveStyle } 
                                onClick={() => showParagraph(1)} 
                                className="about-nav"
                            > 
                                Email Me
                            </a>
                        </li>
                        <li className="icon3" style = { index == 2 ? activeStyle : inactiveStyle }>
                            <a 
                                href="#0" 
                                style = { index == 2 ? activeStyle : inactiveStyle } 
                                onClick={() => showParagraph(2)} 
                                className="about-nav"
                            > 
                                Social Media
                            </a> 
                        </li>
                    </ul>
                </div>
                <div className="content" style={{color:"#83BF5F", backgroundColor:"#D2ECC5"}}>
                    <div className="simple-trans-main" >
                        {transitions.map(({ item, props, key }) => {
                            const Page = pages[item]
                            return <Page key={key} style={props} />
                        })}
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Contact
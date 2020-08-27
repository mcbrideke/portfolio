import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import enthuse from '../images/enthuse-min.png'

const pages = [
    ({ style }) => <animated.div style={{ ...style,  display:'block'}} >
        <div className="img-container">
            <img src={enthuse} className="enthuse-img" />
        </div>
        <p>
        Enthuse was a social media application that
			I worked on with a group for our senior project.
			Our motivation for making Enthuse was to build an app 
			for community based hobbies and interests
			that would have multi-level filters for both the 
			category of the community and the geograpical closeness
			of the group, so that we could provide a place for both 
			general discussions and local  meetups.<br />
            <br />
			<a href="https://github.com/jensenrrr/Enthuse" target="_blank">GitHub</a><br />

			Role: frontend and UI design<br />

			Technologies: React, Redux, CSS
        </p>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style}}>
        <p>
        University Chat was my first venture into mobile 
			development as I worked with a group to make a
			chat application for college students. Our idea
			for University Chat was to have students verify their
			id then be automatically added to a chat for each of 
			their courses. Some features we implemented were: direct messages,
			account management, pinned announcements, and file upload.<br />
            <br />
			<a href="https://github.com/jensenrrr/University-Chat" target="_blank">GitHub</a><br />

			Role: frontend and UI design<br />

			Technologies: React Native, Gifted Chat
        </p>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style}}>
        <p>

        </p>
    </animated.div>,
]

function Projects({ refProp }) {
    const [index, set] = useState(0)
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,50%,0)' },
    })
    console.log(transitions)
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
        <section ref={refProp} id="projects">
            <div className="grid-container">
                <div className="title" style={{backgroundColor:"#F49364", color:"#FCDCBF "}}> 
                    < h1 > Projects</h1>
                </div>
                <ul className="about-items" style={{backgroundColor:"#F49364", color:"#FCDCBF "}}>
                    <li className="icon2" style = { index == 0 ? activeStyle : inactiveStyle }>
                        <a 
                            href="#0" 
                            style = { index == 0 ? activeStyle : inactiveStyle } 
                            onClick={() => showParagraph(0)} 
                            className="about-nav"
                        > 
                            Enthuse
                        </a>
                    </li>
                    <li className="icon2" style = { index == 1 ? activeStyle : inactiveStyle }>
                        <a 
                            href="#0" 
                            style = { index == 1 ? activeStyle : inactiveStyle } 
                            onClick={() => showParagraph(1)} 
                            className="about-nav"
                        > 
                            University Chat
                        </a>
                    </li>
                    <li className="icon2" style = { index == 2 ? activeStyle : inactiveStyle }>
                        <a 
                            href="#0" 
                            style = { index == 2 ? activeStyle : inactiveStyle } 
                            onClick={() => showParagraph(2)} 
                            className="about-nav"
                        > 
                            Portfolio Website
                        </a> 
                    </li>
                </ul>
                <div className="content" style={{color:"#F49364", backgroundColor:"#FCDCBF "}}>
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

export default Projects
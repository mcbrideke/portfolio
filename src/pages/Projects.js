import React, { useState } from 'react';
import enthuse from '../images/enthuse-min.png';
import uc from '../images/university-chat-min.png'
import dc from '../images/digital-collection-min.PNG'
import menu from '../images/menu.svg';
import close from '../images/close.svg';
import { useTransition, animated } from 'react-spring'

const pages = [
    <div>
        <div className='img-container'>
            <img src={enthuse} className='enthuse-img' alt = 'enthuse project'/>
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
            <a href='https://github.com/jensenrrr/Enthuse' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />

			Role: frontend and UI design<br />

			Technologies: React, Redux, CSS
        </p>
    </div>,
    <div>
        <div className='img-container'>
            <img src={uc} className='enthuse-img' alt = 'chat project'/>
        </div>
        <p>
            University Chat was my first venture into mobile 
                development as I worked with a group to make a
                chat application for college students. Our idea
                for University Chat was to have students verify their
                id then be automatically added to a chat for each of 
                their courses. Some features we implemented were: direct messages,
                account management, pinned announcements, and file upload.<br />
            <br />
            <a href='https://github.com/jensenrrr/University-Chat' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />

            Role: frontend and UI design<br />

            Technologies: React Native, Gifted Chat
        </p>
    </div>,
    <div>
        <p>
            This website. A static website to display information about me
			and projects that may be relevant to employers. I used Figma to layout
			the structure. All the pixel art is created by me in Aseprite.<br />
            <br />
            <a href='https://github.com/mcbrideke/portfolio' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />


			Technologies: React
        </p>
    </div>,
    <div>
         <div className='img-container'>
            <img src={dc} className='enthuse-img' alt = 'chat project'/>
        </div>
       <p>
            This was the first project I built after completing the React Bootcamp on <a href='https://scrimba.com/course/greact' target='_blank' rel = 'noopener noreferrer'>Scrimba</a>.<br />
            Its a simple site that accesses allows a user to add movies from a movie database
            in a collection. I focused heavily on implementing as many concepts of React I had just learned,
            and kept the functionality and design of the site minimal. Principles of React used in this 
            project are: hooks, context, props, 
			functional components, routing, states, inline styling, useEffect api calls.<br />
            <br />
            <a href='' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />
            
			<a href='https://awesome-mccarthy-f778c9.netlify.app' target='_blank' rel = 'noopener noreferrer'>Live Demo</a><br />

			Technologies: React
        </p>
    </div>,
    <div>
        <p>
            My first web development project, this was created as a team for a school project.
            We made a baseball card shop for a real life client who had a large collection of
            baseball cards. We worked closely with the client and used an agile framework to 
            complete all of our major goals. Some features implemented: persistent shopping cart, 
            email contact, administrator mangement options, a way for the client to scan and upload cards to 
            the database, user login and authentication, pagination, etc.<br />
            <br />

            Role: Frontend Developer<br />

            Technologies: MEAN Stack
			
        </p>
    </div>,
 <div>
 <p>
      
  </p>
</div>
];

function Projects({ refProp }) {
    const [index, set] = useState(0);
    const [menuOpen, toggleMenu] = useState(false);
    const activeStyle = {
        opacity: 1,
        fontSize:"18px"
    };
    const inactiveStyle = {
        opacity: 0.6,
        fontSize:"18px"
    };
    function showParagraph(i) {
        set(i);
        toggleMenu(false);
    };
    const transitions = useTransition(index, null, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0, display:'none'},
    })

    return (
        <section id='projects'>
            <div ref={refProp} className='scroll-to'></div>
            <div className='grid-container'>
                <div className='title' style={{ backgroundColor: '#F49364', color: '#FCDCBF ' }}>
                    <h1>Projects</h1>
                </div>
                <div className='about-items' style={{ backgroundColor: '#F49364', color: '#FCDCBF ' }}>
                    <div className='mobile'>
                    {!menuOpen && <img src={menu} onClick={() => toggleMenu(true)} className='mobile-menu' alt = 'menu icon'/>}
                        {menuOpen &&
                         <ul >
                             <li>
                                <img src={close} onClick={() => toggleMenu(false)} className='mobile-close' alt='close menu'/>
                             </li>
                         <li style={index === 0 ? activeStyle : inactiveStyle}>
                             <a
                                 href='#0'
                                 style={index === 0 ? activeStyle : inactiveStyle}
                                 onClick={() => showParagraph(0)}
                                 className='about-nav'
                             >
                                 Enthuse
                             </a>
                         </li>
                         <li  style={index === 1 ? activeStyle : inactiveStyle}>
                             <a
                                 href='#0'
                                 style={index === 1 ? activeStyle : inactiveStyle}
                                 onClick={() => showParagraph(1)}
                                 className='about-nav'
                             >
                                 University Chat 
                             </a>
                         </li>
                         <li  style={index === 2 ? activeStyle : inactiveStyle}>
                             <a
                                 href='#0'
                                 style={index === 2 ? activeStyle : inactiveStyle}
                                 onClick={() => showParagraph(2)}
                                 className='about-nav'
                             >
                                 Portfolio Website
                             </a>
                         </li>
                         <li style={index === 3 ? activeStyle : inactiveStyle}>
                             <a
                                 href='#0'
                                 style={index === 3 ? activeStyle : inactiveStyle}
                                 onClick={() => showParagraph(3)}
                                 className='about-nav'
                             >
                                 Movie Collection
                             </a>
                         </li>
                         <li  style={index === 4 ? activeStyle : inactiveStyle}>
                             <a
                                 href='#0'
                                 style={index === 4 ? activeStyle : inactiveStyle}
                                 onClick={() => showParagraph(4)}
                                 className='about-nav'
                             >
                                 Baseball Card Shop
                             </a>
                         </li>
                     </ul>}
                    </div>
                    <div className='non-mobile'>
                        <ul >
                            <li className='icon2' style={index === 0 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 0 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(0)}
                                    className='about-nav'
                                >
                                    Enthuse <span className = "tag">React</span> <span  className = "tag">Full Stack</span>
                                </a>
                            </li>
                            <li className='icon2' style={index === 1 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 1 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(1)}
                                    className='about-nav'
                                >
                                    University Chat <span className = "tag">React Native</span>
                                </a>
                            </li>
                            <li className='icon2' style={index === 2 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 2 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(2)}
                                    className='about-nav'
                                >
                                    Portfolio Website <span  className = "tag">React</span>
                                </a>
                            </li>
                            <li className='icon2' style={index === 3 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 3 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(3)}
                                    className='about-nav'
                                >
                                    Movie Collection <span  className = "tag">React</span>
                                </a>
                            </li>
                            <li className='icon2' style={index === 4 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 4 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(4)}
                                    className='about-nav'
                                >
                                    Baseball Card Shop <span className = "tag">MEAN</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content' style={{ color: '#F49364', backgroundColor: '#FCDCBF ' }}>
                {transitions.map(({ item, key, props  }) => 
                        <animated.div
                            key={key}
                            style={{ ...props }}
                        >
                            {pages[item]}
                        </animated.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects
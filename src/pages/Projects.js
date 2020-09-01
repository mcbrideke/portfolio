import React, { useState } from 'react';
import enthuse from '../images/enthuse-min.png';
import menu from '../images/menu.svg';

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
        <p>
            This website. A static website to display information about me
			and projects that may be relevant to employers. I used Figma to layout
			the structure. All the pixel art is created by me in Aseprite.<br />
            <br />
            <a href='' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />


			Technologies: React
        </p>
    </div>,
    <div>
       <p>
            This was the first project I built after completing the React Bootcamp.
			I really wanted to implement as many of the principles I learned as 
			possible. Principles of React used in this project are: hooks, context, props, 
			functional components, routing, states, inline styling, useEffect api calls.<br />
            <br />
            <a href='' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />

			Live Demo<br />

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
         <a href='' target='_blank' rel = 'noopener noreferrer'>GitHub</a><br />

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
    };

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
                         <li style={index === 5 ? activeStyle : inactiveStyle}>
                             <a
                                 href='#0'
                                 style={index === 5 ? activeStyle : inactiveStyle}
                                 onClick={() => showParagraph(5)}
                                 className='about-nav'
                             >
                                 Pirate Game
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
                                    Enthuse <span className = "tag">React</span> <span  className = "tag">Full Stack</span> <span  className = "tag">Frontend</span>
                                </a>
                            </li>
                            <li className='icon2' style={index === 1 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 1 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(1)}
                                    className='about-nav'
                                >
                                    University Chat <span  className = "tag">React</span>
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
                            <li className='icon2' style={index === 5 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 5 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(5)}
                                    className='about-nav'
                                >
                                    Pirate Game
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content' style={{ color: '#F49364', backgroundColor: '#FCDCBF ' }}>
                    {pages[index]}
                </div>
            </div>
        </section>
    )
}

export default Projects
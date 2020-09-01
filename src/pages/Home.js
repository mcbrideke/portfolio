import React, { useState } from 'react'
import menu from '../images/menu.svg'

const pages = [
    <p>
        I went into college looking for a major that would give me
        the opportunity to design and build. My first choice, computer engineering
        seemed like a perfect fit. With circuits and solder I could build things,
        like, real world objects that could entertain me or automate some tedious task. It was great.
        Convinced this was the path for me, I was looking to just ease past my
        required programming classes. But once in those classes, I found something greater.
        The lessons were engaging, learning the language of code was fun, and, even though the school assigned
        projects were mostly boring, I could see the potential. From that point on,
        I would make the transition from a hardware guy to a software guy, swapping circuit
            components for web components.<br />
        <br />
            Web development to me presents a whole dimension of opportunities that no other form of engineering does,
            an ability to package information I think is important,
            into an application that everyone can use,
            and take it and spread it to the whole world in an instant.
        </p>,
    <p>
        Currently I am looking for a job where I can apply my skills and
        find a good balance of creativity and effeciency. Right now I have career-ready proficiency
        with popular frameworks like React, but I am well aware of the vast world of web development frameworks, and would love
        the chance to learn and work with anything new. I am also flexible enough to work with
            other forms of app development and already have some experience with developing for mobile. <br />
        <br />
            Outside of my professional life I like to fish and dive; play basketball, video games, and board games with my friends;
            and work on those fun, little side projects that first enticed me towards programming.
        </p>,
    <p>
        <a 
            href='https://drive.google.com/file/d/1fcbYv1gSH-veQcI00zRkaMzRo9eyObXH/view?usp=sharing' 
            target = '_blank' 
            rel = 'noopener noreferrer'
        >
            Resume</a><br />
        <br />
        <a 
            href='https://github.com/mcbrideke' 
            target = '_blank' 
            rel = 'noopener noreferrer' 
        >
            GitHub
        </a><br />
        <br />
            HTML, CSS, JavaScript <br />
        <br />
            React, Svelte, Angular, C++, C <br />
        <br />
            Git, Trello, Illustrator, <br />
        <br />Affinity Designer, Unity, Aesprite, Figma
        </p>
]

function Home({ refProp }) {
    const [index, set] = useState(0);
    const activeStyle = { opacity: 1 };
    const inactiveStyle = { opacity: 0.6 };
    const [menuOpen, toggleMenu] = useState(false);
    function showParagraph(i) {
        set(i);
    }

    return (
        <section ref={refProp} id='home'>
            <div className='grid-container'>
                <div className='title'>
                    <h1>ME</h1>
                </div>
                <div className='about-items'>
                    <div className='mobile'>
                        {!menuOpen && <img src={menu} onClick={() => toggleMenu(true)} className='mobile-menu' alt = 'menu icon'/>}
                        {menuOpen &&
                        <ul>
                            <li style={index === 0 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 0 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(0)}
                                    className='about-nav'
                                >
                                    Why Web Development?
                                </a>
                            </li>
                            <li style={index === 1 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 1 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(1)}
                                    className='about-nav'
                                >
                                    Personal Goals
                                </a>
                            </li>
                            <li style={index === 2 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 2 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(2)}
                                    className='about-nav'
                                >
                                    Skills Overview
                                </a>
                            </li>
                        </ul>
                        }
                    </div>
                    <div className='non-mobile'>
                        <ul>
                            <li className='icon' style={index === 0 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 0 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(0)}
                                    className='about-nav'
                                >
                                    Why Web Development?
                                </a>
                            </li>
                            <li className='icon' style={index === 1 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 1 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(1)}
                                    className='about-nav'
                                >
                                    Personal Goals
                                </a>
                            </li>
                            <li className='icon' style={index === 2 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 2 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(2)}
                                    className='about-nav'
                                >
                                    Skills Overview
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content'>
                    {pages[index]}
                </div>
            </div>
        </section>
    )
}

export default Home
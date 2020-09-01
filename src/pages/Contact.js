import React, { useState } from 'react';
import menu from '../images/menu.svg';

const pages = [
    <div >
        <p>
xczv
        </p>
    </div>,
    <div >
        <p>
zxcv
        </p>
    </div>,
    <div>

        <p>
vzxc
        </p>
    </div>,
]


function Contact({ refProp }) {
    const [index, set] = useState(0);
    const [menuOpen, toggleMenu] = useState(false);
    const activeStyle = {
        opacity: 1
    };
    const inactiveStyle = {
        opacity: 0.6
    };
    function showParagraph(i) {
        set(i);
    }

    return (
        <section id='contact'>
            <div ref={refProp} className='scroll-to'></div>
            <div className='grid-container'>
                <div className='title' style={{ backgroundColor: '#83BF5F', color: '#D2ECC5' }}>
                    <h1>Contact</h1>
                </div>
                <div className='about-items' style={{ backgroundColor: '#83BF5F', color: '#D2ECC5' }}>
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
                                Links
                        </a>
                        </li>
                        <li style={index === 1 ? activeStyle : inactiveStyle}>
                            <a
                                href='#0'
                                style={index === 1 ? activeStyle : inactiveStyle}
                                onClick={() => showParagraph(1)}
                                className='about-nav'
                            >
                                Email Me
                        </a>
                        </li>
                        <li style={index === 2 ? activeStyle : inactiveStyle}>
                            <a
                                href='#0'
                                style={index === 2 ? activeStyle : inactiveStyle}
                                onClick={() => showParagraph(2)}
                                className='about-nav'
                            >
                                Social Media
                        </a>
                        </li>
                    </ul>}
                        
                    </div>
                    <div className='non-mobile'>
                        <ul>
                            <li className='icon3' style={index === 0 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 0 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(0)}
                                    className='about-nav'
                                >
                                    Links
                            </a>
                            </li>
                            <li className='icon3' style={index === 1 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 1 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(1)}
                                    className='about-nav'
                                >
                                    Email Me
                            </a>
                            </li>
                            <li className='icon3' style={index === 2 ? activeStyle : inactiveStyle}>
                                <a
                                    href='#0'
                                    style={index === 2 ? activeStyle : inactiveStyle}
                                    onClick={() => showParagraph(2)}
                                    className='about-nav'
                                >
                                    Social Media
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content' style={{ color: '#83BF5F', backgroundColor: '#D2ECC5' }}>
                    {pages[index]}
                </div>
            </div>
        </section>
    )
}

export default Contact
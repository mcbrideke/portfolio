import React, { useState } from 'react';

function Contact({ refProp }) {

    return (
        <section id='contact'>
            <div ref={refProp} className='scroll-to'></div>
            <div className='contact-grid-container'>
                <div className='title' style={{ backgroundColor: '#83BF5F', color: '#D2ECC5' }}>
                    <h1>Contact</h1>
                </div>
                <div className='content' style={{ color: '#83BF5F', backgroundColor: '#D2ECC5' }}>
                <div><p>I'm best reached by email, but feel free to contact me through any of these other links</p></div>
                    <ul>
                        <li style={{ display: "flex", alignContent: "center" }}>
                        <a href="mailto:kevj.m13@gmail.com"><i className="fas fa-envelope-square fa-5x"></i></a><h1 style={{ display: 'inline', paddingLeft: '20px' }}><a href="mailto:kevj.m13@gmail.com">kevj.m13@gmail.com</a></h1>
                        </li>
                        <li style={{ display: "flex", alignContent: "center" }}>
                            <i className="fas fa-phone-square fa-5x"></i><p style={{ display: 'inline', paddingLeft: '20px' }}>(727) 463 - 0533</p>
                        </li>
                        <li style={{ display: "flex", alignContent: "center" }}>
                            <a href="https://github.com/mcbrideke"><i className="fab fa-github-square fa-5x"></i> <p style={{ display: 'inline', paddingLeft: '20px' }}>GitHub</p></a>
                        </li>
                        <li style={{ display: "flex", alignContent: "center" }}>
                        <a href="https://www.linkedin.com/in/kevin-mcbride-5b67031b6/"><i className="fab fa-linkedin fa-5x"></i><p style={{ display: 'inline', paddingLeft: '20px' }}>LinkedIn</p></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact

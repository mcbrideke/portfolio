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
                </div>
            </div>
        </section>
    )
}

export default Contact
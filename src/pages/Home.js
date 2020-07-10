import React from 'react'

function Home({refProp}) {
    return (
        <div ref={refProp} style={{height:"1500px"}}>
            <span><h1>Kevin McBride</h1></span>
            <p>Hello, my name is Kevin and I am a Software Developer</p>
            <p>I graduated from the University of Florida with a Bachelor's degree in Computer Science
            </p>
        </div>
    )
}

export default Home
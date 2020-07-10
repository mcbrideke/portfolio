import React from 'react'

 function About({refProp}) {
    return (
        <div ref={refProp}>
            <h1>About</h1>
           <div>
               
               <h2>classes</h2>
               <h2>frameworks</h2>
               <h2>personal</h2>
           </div>
           <div>
               <h1>Contact Info</h1>
           </div>
        </div>
    )
}

export default About


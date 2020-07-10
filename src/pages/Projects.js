import React from 'react'

function Projects({ refProp }) {
    return (
        <div style={{height:"1500px"}} ref={refProp}>
            <h1>Projects</h1>
            <div>
                <div >
                    <h2>Enthuse</h2>
                    <h3>Description</h3>
                </div>
                <div>
                    <h2>University Chat</h2>
                    <h3>Description</h3>
                </div>
                <div>
                    <h2>Baseball Card Shop</h2>
                    <h3>Description</h3>
                </div>
                <div>
                    <h2>Advanced Ray Tracer</h2>
                    <h3>Description</h3>
                </div>
                <div>
                    <h2>Flower Database</h2>
                    <h3>Description</h3>
                </div>
                <div>
                    <h2>React Bootcamp Final Project - Picsome</h2>
                    <h3>Description</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects

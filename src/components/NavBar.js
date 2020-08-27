import React from "react"
import "./NavBar.css"

function NavBar(props) {
    return (
            <nav >
                    {props.children}
            </nav>
    )
}

export default NavBar
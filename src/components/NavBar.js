import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar(props) {
    return (
            <nav >
                    {props.children}
            </nav>
    )
}

export default NavBar
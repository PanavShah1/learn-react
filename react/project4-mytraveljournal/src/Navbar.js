import React from "react"
import logo from "./images/logo.svg"

export default function Navbar(){
    return (
        <div className="Navbar">
            <img src={logo}></img>
            <h3>my travel journal.</h3>
        </div>
    )
}
import React from "react"
import reactLogo from "../images/ReactIcon.png"

export default function Navbar(){
    return (
        <nav>
            <img src={reactLogo} alt="React logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Part 1</h4>
        </nav>
    )
}
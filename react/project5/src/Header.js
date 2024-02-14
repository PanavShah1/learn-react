import React from "react"
import trollface from "./images/Troll Face.svg"

export default function Header(){
    return(
        <div className="header">
            <img src={trollface}></img>
            <h2>Meme generator</h2>
            <h4>React Course - Project 3</h4>
        </div>
    )
}
import React from "react"
import location from "./images/location.svg"

export default function Card(props){
    return (
        <div className="card">
            <img src={props.img}></img>
            <div className="card--right">
                <div className="card--header">
                    <img src={location}></img>
                    <h5>{props.country}</h5>
                    <p>View on Google Maps</p>
                </div>
                <h1>{props.name}</h1>
                <p className="card--date">{props.date}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}
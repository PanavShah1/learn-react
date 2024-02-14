import React from "react"
// import img1 from "../images/image1.png"
import star from "../images/Star 1.png"

export default function Card(props){
    let badgeText 
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location == "Online"){
        badgeText = "ONLINE"
    }
    console.log(badgeText)


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image"></img>
            <div className="card--stats">
                <img src={star} className="card--star"></img>
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) &#x2022; </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold card--price">From ${props.price}</span> / person</p>
        </div>
    )
}
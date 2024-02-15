import React from "react";

export default function Die(props){
    // function hold(){
    //     props.die.isHeld = !props.die.isHeld
    //     console.log(props.die.isHeld)
    // }
    
    const style = {
        backgroundColor : props.die.isHeld? "#59E391" : "white"
    }
    // console.log(props)

    return(
        <div className="die" onClick={() => props.holdDice(props.die.id)} style={style}>
            {props.die.number}
        </div>
    )
}
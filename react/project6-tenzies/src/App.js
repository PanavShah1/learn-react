import React from "react";
import Die from "./Die";
import Text from "./Text";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App(){

    const [diceList, setDiceList] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [ctr, setCtr] = React.useState(0)
    const [highScore, setHighScore] = React.useState(0)

    localStorage.setItem("highscore", highScore)

    React.useEffect(() => {
        console.log(diceList)
    }, [diceList])

    function allNewDice(){
        console.log("new game")
        const newDiceList = []
        for (var i = 0; i < 10; i++){
            newDiceList.push({
                number: Math.floor(Math.random()*6)+1, 
                isHeld: false,
                id: nanoid(),
                // holdDice : {holdDice}
            })
        }
        console.log(newDiceList)
        return(newDiceList)
    }

    function rollDice(){
        if (tenzies == false){
            setCtr(prevCtr => prevCtr+1)
            setDiceList(oldDiceList => oldDiceList.map(die => {
                return die.isHeld==false? {...die, number: Math.floor(Math.random()*6)+1} : die
            }))
            console.log(diceList)
        }
        else{
            setCtr(0)
            setDiceList(allNewDice())
        }
    }

    const diceElements = diceList.map((die) => <Die die={die} holdDice={holdDice}/>)

    function holdDice(id){
        setDiceList(oldDiceList => oldDiceList.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
        console.log(diceList)
        console.log("dice held")
    }

    React.useEffect(function checkTenzies(){
        var ctr1 = 0
        var num = 0
        for(var i = 0; i < 10; i++){
            if(diceList[i].isHeld == true){
                num = diceList[i].number
                break
            }   
        }

        for(var i = 0; i < 10; i++){
            if(diceList[i].number == num && diceList[i].isHeld)
            ctr1++;
        }

        if(ctr1 == 10){
            setTenzies(true)
            console.log("tenzie got all 10")
            console.log("tenzies : "+tenzies)
            if(ctr < highScore) setHighScore(ctr)
            localStorage.setItem("highscore", highScore)
            console.log(localStorage.getItem("highscore"))
        }
        else{
            setTenzies(false)
            console.log("tenzie not finished "+ctr1)
        }
    }, [diceList])

    return(
        <main>
            {tenzies && <div><Confetti width={window.width} height={window.height}/></div>}
            <div className="main-cont">
                <Text />
                <div className="die-cont">
                    {diceElements}
                </div>
                <button className="roll-dice-but" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
                <p>Turns : {ctr}</p>
                <p>highScore : {highScore}</p>
            </div>        
        </main>
    )
}
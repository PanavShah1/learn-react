import React from "react"

export default function Meme(){


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [but, setBut] = React.useState(0)

    // function getMemeImage(){
    //     const memesArray = memesData.data.memes
    //     const randomNumber = Math.floor(Math.random()*memesArray.length)
    //     const url  = memesArray[randomNumber].url
    //     console.log(url)
    //     setMeme(prevMeme => ({
    //         ...prevMeme,
    //         randomImage: url
    //     }))
    // }  
    
    React.useEffect(function(){
        console.log("effect ran")
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => {
                const randomNum = Math.floor(Math.random()*100)
                console.log(data["data"]["memes"][randomNum]["url"])
                setMeme(prevMeme => ({
                ...prevMeme,
                // topText:data["data"]["memes"][randomNum]["name"],
                randomImage: data["data"]["memes"][randomNum]["url"]
            }))})
        
    }, [but])


    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            // [name] : type==="checbox" ? checked : value
            [name] : value
        }))
        console.log(meme)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log("submitted")
    }

    
    
    return(
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />

                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
            
            <button 
                className="form--button"
                onClick={() => setBut(prevBut => prevBut+1)}
                >
                    Get a new meme image 🖼️
            </button>
            </form>
            <div className="img-cont">
                <p className="img-top-text">{meme.topText}</p>
                <img src={meme.randomImage}></img>
                <p className="img-bottom-text">{meme.bottomText}</p>
            </div>

        </div>
    )
}
import React from "react";
import Meme from "./Meme";
import data from "../components/Meme"
import { useState } from "react";
import memesData from "../memesData.js";

export default function Main() {

    //const memesArray= memesData.data.memes
    //const randomNumber = Math.floor(Math.random() * memesArray.length)


    React.useEffect(function(){
        console.log("Effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes))


            /* 
                async function getMemes() {
                    const res = await fetch("https://api.imgflip.com/get_memes")
                    const data = await res.json()
                    setAllMemes(data.data.memes)
                }
                getMemes()
            */

    }, [])

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })


    const [allMemes, setAllMemes] = React.useState(memesData)

    function changeImg() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMemeImage => {
            return {
                ...prevMemeImage,
                [name]: value
            }
        })
    }


    return(
        <div>
            <form>
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                        value={memeImage.topText}
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeImage.bottomText}
                    />
                </div>
            <button type="button" onClick={changeImg}>Get a new image 🖼️ </button>
            </form>
            <div className="meme">
                <img
                src={memeImage.randomImage}
                className="img-result">
                </img> 
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </div>
    )
}

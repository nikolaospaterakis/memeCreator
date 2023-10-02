import React from "react";
import Meme from "./Meme";
import data from "../components/Meme"
import { useState } from "react";
import memesData from "../memesData.js";

export default function Main() {

    const memesArray= memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const [memeImage, setMemeImage] = React.useState()
    console.log(memeImage)

    function changeImg() {
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <div>
            <form>
                <div className="inputs">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom Text"></input>
                </div>
            <button type="button" onClick={changeImg}>Get a new image 🖼️ </button>
            </form>
            <img
            src={memeImage}
            className="img-result">
            </img>
        </div>
    )
}

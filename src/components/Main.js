import React from "react";
import Meme from "./Meme";
import data from "../components/Meme"
import { useState } from "react";
import memesData from "../memesData.js";

export default function Main() {

    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url

    const [isShown, setIsShown] = useState(false);

    const clickSmthn = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
    };
    
    return(
        <div>
            <form>
                <div className="inputs">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom Text"></input>
                </div>
            <button type="button" onClick={clickSmthn}>Get a new image 🖼️ </button>
            </form>
            <h1>{url}</h1>
        </div>
    )
}

function Box() {
    return (
      <div>
        <h2>Box</h2>
      </div>
    );
  }


 // {/* 👇️ show elements on click */}
  //{isShown && (
    //<div>
        //<h2>Some content here</h2>
    //</div>
    //)}

   // {/* 👇️ show component on click */}
   // {isShown && <h1>{randomNumber}</h1>}
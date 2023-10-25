import React from "react";
import trollFace from "../images/troll-face.png"

export default function Header(props) {
    return(
        <nav>
            <div className="leftSide">
                <img alt="meme"
                src={trollFace}>
                </img>
                <h2>Meme Generator</h2>
            </div>
            <h4>React Course - Project 3</h4>
        </nav>
    )
}


//Meme Generator
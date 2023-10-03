import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Body from "./components/Body";
import boxes from "./boxes"
import Box from "./components/Box";

export default function App(props) {
    
    const [box, setBox] = React.useState(boxes)

    const squareElements = box.map(square => (
        <Box key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}/>
    ))

    function toggle(id){
        setBox(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    return(
        <main>
           {squareElements}
        </main>
    )
}

/*<div>
            <Header 
            name={user}/>
            <Body 
            name={user}/>
        </div>
*/
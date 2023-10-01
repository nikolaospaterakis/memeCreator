import React from "react";

export default function Testing() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    const okay = thingsArray.map(item => <p>item</p>)

    function addNumber() {
        const newNumber = "Thing" + (thingsArray.length + 1)
        const newAdd = newNumber
        thingsArray.push(newAdd)
        console.log(thingsArray)
    }

    let check

    return(
        <div>
            <button onClick={addNumber}>Add item</button>
            {okay}
        </div>
    )
}
import React from "react";


export default function NewTesting() {

    return(
        greeting("Nikos")
    )
    
    
    
}

function greeting(name) {

    const date = new Date()
    const hours = date.getHours()
    let nowTime

    if (hours >= 4  && hours < 12) {
         nowTime = "morning"
    } else if (hours >= 12  && hours < 17) {
         nowTime = "afternoon"
    } else if (hours >= 17  && hours < 20) {
         nowTime = "evening"
    } else {
         nowTime = "night"
    } 

    return(
    <h1>Good {nowTime} {name}! </h1>
    )
}
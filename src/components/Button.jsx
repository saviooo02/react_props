import React from "react";

function Button(){
const handleClick = (name) =>{
    console.log(`${name} clicked me`)
}

    return(
       <button onClick={()=>handleClick("Savio")}>Click me</button>
    )
}


export default Button;
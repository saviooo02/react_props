import React from "react";

function List(){

    const Fruits = ["Apple","Orange","Banana","Cherry","Grape"]
    
    const listItems = Fruits.map((fruit) => 
        <li>{fruit}</li>
    )
    return(
        <div>
          <ol>{listItems}</ol>
        </div>
    )
}

export default List;
import React from "react";
import SmallGallery from "./smallGallery";
import "../style/galleryParent.css"

const smallSnakes = [{
    name:"Kingsnakes",
    description:"Kingsnakes are colubrid New World members of the genus Lampropeltis, which includes 26 species. Among these, about 45 subspecies are recognized. They are nonvenomous and ophiophagous in diet.",
    img : "https://upload.wikimedia.org/wikipedia/commons/5/5b/Lampropeltis_elapsoides.jpg"
},
{
    name:'Corn Snake',
    description:"The corn snake is a North American species of rat snake that subdues its small prey by constriction. It is found throughout the southeastern and central United States.",
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CornSnake.jpg/1280px-CornSnake.jpg'
}]

const smallMap = smallSnakes.map(snake => <SmallGallery name = {snake.name} img = {snake.img} description = {snake.description}/> )

function SmallSnakes(){
    return(
    <div>
       <h2><i>Gallery of small snakes</i></h2>
        <div className="Gallery">
            {smallMap}
        </div>
    </div>
    )
}

export default SmallSnakes;
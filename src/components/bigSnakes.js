import React from "react";
import BigGallery from "./biggallery";
import "../style/galleryParent.css"
 
const bigSnakes = [{
    name : "Python",
    img :"https://upload.wikimedia.org/wikipedia/commons/3/32/Python_molurus_molurus_2.jpg",
    description:"The Pythonidae, commonly known as pythons, are a family of nonvenomous snakes found in Africa, Asia, and Australia. Among its members are some of the largest snakes in the world. Ten genera and 42 species are currently recognized."
},
{
    name:"Green anaconda",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sucuri_verde.jpg/220px-Sucuri_verde.jpg",
    description:"The green anaconda, also known as the giant anaconda, common anaconda, common water boa or sucuri, is a boa species found in South America. It is the heaviest and one of the longest known extant snake species. Like all boas, it is a non-venomous constrictor."
}]

let makeSnake = bigSnakes.map(snake => <BigGallery name = {snake.name} img = {snake.img} description = {snake.description}/> )

function BigSnakes(){
    return(
        <div>
            <h2><i>Gallery of big snakes!</i></h2>
        <div className="Gallery">
         {makeSnake}
        </div>
        </div>
    )
}

export default BigSnakes;
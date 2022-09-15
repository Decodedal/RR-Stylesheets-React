import React from "react";
import "../style/gallery.css"


function BigGallery(prop){
    return(
    <div>
        <h1>{prop.name}</h1>
        <img src= {prop.img}/>
        <p>{prop.description}</p>
    </div>
    )
}

export default BigGallery;
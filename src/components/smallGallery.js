import React from "react";
import "../style/gallery.css"

function SmallGallery(prop){
    return(
    <div className="container">
    <h1>{prop.name}</h1>
    <img src= {prop.img} alt="small snake"/>
    <p>{prop.description}</p>
</div>
)
}

export default SmallGallery;
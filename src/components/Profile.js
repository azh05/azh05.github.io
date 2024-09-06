import React from "react";

// Vertical Profile, text
export default function Profile( { image, imageCSS, alt, caption, captionCSS } ) {
    console.log(image);
    return(
        <div>
            <img src={image} alt={alt} className={imageCSS}/>
            <p className={captionCSS}>{caption ? caption : ''}</p>
        </div>
    )
}

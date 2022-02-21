import React from 'react';

/*
 * This funciton returns a random gif from a currated list.
 * Using the whole URL as a string allows me to choose multiple CDNs in the future.
 * Currently using Gifer to host gifs
 * I decided to use an off site GIF hosting site for two reasons,
 * 1. GIFER probably has some sort of CDN in place while, I do not.
 * 2. Off loading componenets from an application has security benifits.
 */

export default function HeaderGifs(){
    // Add more links here if desired
    const gifArray = [
        "https://i.gifer.com/ho.gif",
        "https://i.gifer.com/4SHX.gif",
        "https://i.gifer.com/XiPu.gif",
        "https://i.gifer.com/xy.gif",
        "https://i.gifer.com/naT.gif",
        "https://i.gifer.com/XOsX.gif",
        "https://i.gifer.com/4MO.gif",
        "https://i.gifer.com/6oa.gif",
        "https://i.gifer.com/2GU.gif"

    ]

    const chosenGif = gifArray[Math.floor(Math.random() * gifArray.length)]

    return(
        <>
            <img  src={chosenGif} alt="wow" />
        </>
    );
}
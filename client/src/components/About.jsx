import React from "react";

import "./About.css"

import Image from "./images/chara_01.jpg"

export default function About(){

    //const imagePath = "images/johny-goerend-t1j-1GdWNgo-unsplash.jpg";
    const linkPath = "https://github.com/";

    return(
            <div id="aboutSection">
                <div id="aboutImage">
                    <img src={Image}/>
                </div>
                <div id="aboutDescription">
                    <h1>Some Text</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae unde quidem facilis dolorum sint corporis, accusantium veritatis sit animi, minus labore nobis?</p>
                    <a href={linkPath}>[GitHub]</a>
                </div>
            </div>
    );
}
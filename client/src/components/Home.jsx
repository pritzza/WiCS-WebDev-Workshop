import React from "react";

import "./Home.css"

import Image from "./images/chara_01.jpg"

export default function About(){

    return(
        <div>
             <p>Hello World!</p>
             <img src={Image}></img>   
        </div>
    );
}
import React, { useState } from 'react';

import "./Home.css"

import Image from "./images/chara_01.jpg"

export default function Home()
{
    function getSmiles()
    {
        fetch('http://localhost:8888/getSmiles')
            .then(response => response.json())
            .then(data => setSmileCount(data));
    }

    function incrementSmiles()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Message : "Clicked!"})
        };  
        
        fetch('http://localhost:8888/postSmile', requestOptions)
            .then(response => response.json())
            .then(data => setSmileCount(data));
    }

    const [smileCount, setSmileCount] = useState(0);
    getSmiles();

    return(
        <div>
             <p>Hello World!</p>
             
             <img src={Image}></img>
             
             <br></br>
             
             <p>Total Smiles: {smileCount}</p>
             <button onClick={incrementSmiles}> :) </button>
        </div>
    );
}
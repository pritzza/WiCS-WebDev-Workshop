import React from "react";

import "./Footer.css"

export default function Footer({time}) 
{
  return (
    <div id="footerBox">
        That's all we got so far...
        <br></br>
        <br></br>
        {time}
    </div>
  );
}
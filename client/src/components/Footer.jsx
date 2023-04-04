import React from "react";

import "./Footer.css"

export default function Footer({foo}) 
{
  return (
    <div id="footerBox">
        That's all we got so far...

        <br></br>
        <br></br>

        {foo}
        
        <form>
          <input type="text" placeholder="secret code"></input>  
          <input value="Enter"></input>
        </form>
        
    </div>
  );
}

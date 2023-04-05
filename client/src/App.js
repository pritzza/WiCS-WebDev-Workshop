import React, { useState } from 'react';

// all of the different components of the front end
// are included them their respective files
import Home from './components/Home';

// App() is like our main()
function App() 
{
  // https://react.dev/reference/react/useState
  // [var, setVar] = useState(varInitialValue)
  const [backendData, setBackendData] = useState();
  const [isFirstLoad, setFirstLoad] = useState(false);

  if (!isFirstLoad)
  {
    fetch("http://localhost:8888/getSmiles")
      .then(response => response.json())
      .then(data => {setBackendData(data)});
      
    setFirstLoad(true);
  }

  console.log(backendData);

  const HTML =
    (
      <div>
        <Home></Home>
      </div>
    );

  return HTML;
}

// App() is like our main() because we export it as our default function
export default App;
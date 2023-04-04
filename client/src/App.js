import React, { useEffect, useState } from 'react';

// all of the different components of the front end
// are included them their respective files
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';

// App() is like our main()
function App() 
{
  // https://react.dev/reference/react/useState
  // [var, setVar] = useState(varInitialValue)
  const [backendData, setBackendData] = useState();
  const [isFirstLoad, setFirstLoad] = useState(false);

  if (!isFirstLoad)
  {
    fetch("http://localhost:5000/nonsense/rng")
      .then(response => response.json())
      .then(data => {setBackendData(data)});
      
    setFirstLoad(true);
  }

  console.log(backendData);

  const HTML =
    (
      <div>
        <NavBar></NavBar>
        <About></About>
        <Projects></Projects>
        <Footer foo={backendData}></Footer>
      </div>
    );

  return HTML;
}

// App() is like our main() because we export it as our default function
export default App;
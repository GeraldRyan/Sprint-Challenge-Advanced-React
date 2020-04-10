import React from 'react'
import {useDarkMode} from './useDarkMode'

const Navbar = () =>
{

  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e =>
  {
    e.preventDefault()
    setDarkMode(!darkMode)
    if(darkMode){
    alert("Obi Wan spoke very highly of you")
    }
    else{
      alert("Now, fulfill your destiny")
    }
  }
  const player=""
  return (
    <div>
      <button onClick={toggleMode}> Toggle Dark Mode</button>
      <br />
      <button>Fetch Data</button>
      <br />
      <input id="filter" type="text" placeholder="filter player" />
      <label htmlFor="filter">Filter</label>
    </div>
  )
}

export default Navbar
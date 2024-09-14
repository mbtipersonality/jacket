import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `http://127.0.0.1:9117/UI/Dashboard#search=${randSearch}&category=1000,1010,1020,1030,1040,1050,1080,1090,1110,1180,2000,2010,2020,2030,2040,2045,2060,2070,3000,3010,3020,3030,3040,3050,4000,4010,4030,4040,4050,4060,4070,5000,5010,5030,5040,5045,5050,5060,5070,5080,7000,7020,7030,7050,8000,8010&filter=all`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App

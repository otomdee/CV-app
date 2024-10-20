import { useState } from 'react'
import EditComps from './editComps'
import './App.css'

function App() {

  return (
    <>
      <div className='main'>
      <div className='editDiv'>
        <header className='header'>CV Generator</header>
        < EditComps />
      </div>
      <div className='cvDiv'>

      </div>
       </div>
    </>
  )
}

export default App

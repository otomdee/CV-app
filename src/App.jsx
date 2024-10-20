import { useState } from 'react'
import EditComps from './editComps'
import './App.css'
import CVPage from './CVPage'

function App() {

  //use App state
  const [nameText, setText] = useState("");

  function handleNameChange(event) {
    setText(event.target.value);
}


  return (
      <div className='main'>
        <div className='editDiv'>
          <header className='header'>CV Generator</header>
          < EditComps 
          nameText={nameText}
          handleNameChange={handleNameChange}
          />
        </div>

        <div className='cvDiv'>
          <CVPage 
          nameText={nameText}/>
        </div>
       </div>
  )
}

export default App

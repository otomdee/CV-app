import { useState } from 'react'
import EditComps from './editComps'
import './App.css'
import CVPage from './CVPage'
import CVEducation from './CVEducation'
import CVExperience from './CVExperience'

function App() {

  //use App state
  const [nameText, setText] = useState(["","",""]);
  const [eduArr, setEduArr] = useState([]);
  const [expArr, setExpArr] = useState([]);

  function handleNameChange(event, id) {

    let newText = [...nameText];
    newText[id] = event.target.value;

    setText(newText);
}

  function handleEduChange(event, eduObj) {
    let newArr = [...eduArr];
    newArr.push(< CVEducation eduObj={eduObj} />)

    setEduArr(newArr);
  }

  function handleExpChange(event, expObj) {
    let newArr = [...expArr];
    newArr.push(< CVExperience expObj={expObj} />)

    setExpArr(newArr);
  }

  return (
      <div className='main'>
        <div className='editDiv'>
          <header className='header'>CV Generator</header>
          < EditComps 
          nameText={nameText}
          handleNameChange={handleNameChange}
          handleEduChange={handleEduChange}
          handleExpChange={handleExpChange}
          />
        </div>

        <div className='cvDiv'>
          <CVPage 
          nameText={nameText}
          eduArr={eduArr}
          expArr={expArr}
          />
        </div>
      </div>
  )
}

export default App

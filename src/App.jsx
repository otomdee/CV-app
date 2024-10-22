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
  const [editableArr, setEditableArr] = useState([[],[]]);

  function handleNameChange(event, id) {

    let newText = [...nameText];
    newText[id] = event.target.value;

    setText(newText);
}

  function handleEduChange(event, eduObj) {
    const thisID = crypto.randomUUID();
    let newArr = [...eduArr];
    const newEdu = {content:< CVEducation eduObj={eduObj} />, id: thisID}
    newArr.push(newEdu);

    setEduArr(newArr);

    //set a new array for edits since extracting content from CVEducation component is stressful
    let newEditableArr = [...editableArr];
    //copy eduObj with id
    let newEduObj = {...eduObj};
    newEduObj.id = thisID;
    newEditableArr[0].push(newEduObj);

    setEditableArr(newEditableArr);
  }

  function handleExpChange(event, expObj) {
    let newArr = [...expArr];
    const newExp = {content: < CVExperience expObj={expObj} />, id: crypto.randomUUID()}
    newArr.push(newExp);

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
          editableEduArr={editableArr[0]}
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

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
  const [eduExpStates, setEduExpStates] = useState(["formState", ""])

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

    let newEduExpStates = [...eduExpStates];
    newEduExpStates[0] = "editState";
    setEduExpStates(newEduExpStates);
  }

  function eduNewForm() {
    let newEduExpStates = [...eduExpStates];
    newEduExpStates[0] = "formState";
    setEduExpStates(newEduExpStates);
  }
  
  function handleExpChange(event, expObj) {
    let newArr = [...expArr];
    const newExp = {content: < CVExperience expObj={expObj} />, id: crypto.randomUUID()}
    newArr.push(newExp);

    setExpArr(newArr);
  }

  function handleEduDelete(id) {
    let newEduArr = [...eduArr];
    let newEditableArr = [...editableArr];

    newEduArr = newEduArr.filter((obj) => {
      return (obj.id !== id) 
    })

    newEditableArr[0] = newEditableArr[0].filter((obj) => {
      return (obj.id !== id)
    })

    setEduArr(newEduArr);
    setEditableArr(newEditableArr);
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
          handleEduDelete={handleEduDelete}
          eduExpStates={eduExpStates}
          eduNewForm={eduNewForm}
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

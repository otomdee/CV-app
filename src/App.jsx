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
  const [eduExpStates, setEduExpStates] = useState(["formState", "formState"])

  function handleNameChange(event, id) {

    let newText = [...nameText];
    newText[id] = event.target.value;

    setText(newText);
}

  //edu functions
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
  
  function handleEduEdit(idObj) {
    //copy obj and take out ID
    let eduObj = {...idObj};
    const thisID = idObj.id;

    delete eduObj.id;

    //create new obj for eduArr and replace old one
    const newObj = {content:< CVEducation eduObj={eduObj} />, id: thisID}
    let newArr = [...eduArr];

    newArr.forEach((item, index) => {
      if(item.id === newObj.id) {
        newArr[index] = newObj
      }
    })

    setEduArr(newArr);

    //do same change on editableArr
    let newEditableArr = [...editableArr];

    newEditableArr[0].forEach((item, index) => {

      if(item.id === idObj.id) {
        newEditableArr[0][index] = idObj;
      }
    })

    setEditableArr(newEditableArr);

    let newEduExpStates = [...eduExpStates];
    newEduExpStates[0] = "editState";
    setEduExpStates(newEduExpStates);
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

  //exp functions
  function handleExpChange(event, expObj) {
    const thisID = crypto.randomUUID();
    let newArr = [...expArr];
    const newExp = {content: < CVExperience expObj={expObj} />, id: thisID}
    newArr.push(newExp);

    setExpArr(newArr);

    let newEditableArr = [...editableArr];
    //copy expObj with id
    let newExpObj = {...expObj};
    newExpObj.id = thisID;
    newEditableArr[1].push(newExpObj);

    setEditableArr(newEditableArr);

    let newEduExpStates = [...eduExpStates];
    newEduExpStates[1] = "editState";
    setEduExpStates(newEduExpStates);
  }

  function expNewForm() {
    let newEduExpStates = [...eduExpStates];
    newEduExpStates[1] = "formState";
    setEduExpStates(newEduExpStates);
  }

  function handleExpEdit(idObj) {
    //copy obj and take out ID
    let expObj = {...idObj};
    const thisID = idObj.id;

    delete expObj.id;

    //create new obj for expArr and replace old one
    const newObj = {content:< CVExperience expObj={expObj} />, id: thisID}
    let newArr = [...expArr];

    newArr.forEach((item, index) => {
      if(item.id === newObj.id) {
        newArr[index] = newObj;
      }
    })

    setExpArr(newArr);

    //do same change on editableArr
    let newEditableArr = [...editableArr];

    newEditableArr[1].forEach((item, index) => {

      if(item.id === idObj.id) {
        newEditableArr[1][index] = idObj;
      }
    })

    setEditableArr(newEditableArr);

    let newEduExpStates = [...eduExpStates];
    newEduExpStates[1] = "editState";
    setEduExpStates(newEduExpStates);
  }

  function handleExpDelete(id) {
    let newExpArr = [...expArr];
    let newEditableArr = [...editableArr];

    newExpArr = newExpArr.filter((obj) => {
      return (obj.id !== id) 
    })

    newEditableArr[1] = newEditableArr[1].filter((obj) => {
      return (obj.id !== id)
    })

    setExpArr(newExpArr);
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
          handleEduEdit={handleEduEdit}
          expNewForm={expNewForm}
          handleExpEdit={handleExpEdit}
          handleExpDelete={handleExpDelete}
          editableExpArr={editableArr[1]}
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

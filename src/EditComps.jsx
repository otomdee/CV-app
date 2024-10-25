import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange, handleEduChange, handleExpChange, editableEduArr, handleEduDelete, eduExpStates, eduNewForm, handleEduEdit}) {

    return (
        <div className='editComps'>
        <Personal 
        nameText={nameText}
        handleNameChange={handleNameChange} />
        <Education handleEduChange={handleEduChange} 
                    editableEduArr={editableEduArr} 
                    handleEduDelete={handleEduDelete}
                    eduState={eduExpStates[0]}
                    eduNewForm={eduNewForm}
                    handleEduEdit={handleEduEdit}
                    />
        <Experience handleExpChange={handleExpChange}/>
        </div>
    )
}
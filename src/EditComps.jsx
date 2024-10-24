import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange, handleEduChange, handleExpChange, editableEduArr, handleEduDelete, eduExpStates, eduNewForm}) {

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
                    />
        <Experience handleExpChange={handleExpChange}/>
        </div>
    )
}
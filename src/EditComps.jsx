import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange, handleEduChange, handleExpChange, editableEduArr}) {

    return (
        <div className='editComps'>
        <Personal 
        nameText={nameText}
        handleNameChange={handleNameChange} />
        <Education handleEduChange={handleEduChange} editableEduArr={editableEduArr}/>
        <Experience handleExpChange={handleExpChange}/>
        </div>
    )
}
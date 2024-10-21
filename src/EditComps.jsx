import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange, handleEduChange, handleExpChange}) {

    return (
        <div className='editComps'>
        <Personal 
        nameText={nameText}
        handleNameChange={handleNameChange} />
        <Education handleEduChange={handleEduChange}/>
        <Experience handleExpChange={handleExpChange}/>
        </div>
    )
}
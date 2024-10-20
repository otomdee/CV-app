import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange, handleEduChange}) {


    return (
        <div className='editComps'>
        <Personal 
        nameText={nameText}
        handleNameChange={handleNameChange} />
        <Education handleEduChange={handleEduChange}/>
        <Experience />
        </div>
    )
}
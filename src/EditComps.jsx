import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange}) {


    return (
        <div className='editComps'>
        <Personal 
        nameText={nameText}
        handleNameChange={handleNameChange} />
        <Education/>
        <Experience />
        </div>
    )
}
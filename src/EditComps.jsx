import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps() {
    return (
        <div className='editComps'>
        <Personal />
        <Education/>
        <Experience />
        </div>
    )
}
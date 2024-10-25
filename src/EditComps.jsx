import Personal from "./Personal"
import Education from "./Education"
import Experience from "./Experience"

export default function EditComps({nameText, handleNameChange, 
                                handleEduChange, handleExpChange, 
                                editableEduArr, handleEduDelete, 
                                eduExpStates,
                                eduNewForm, handleEduEdit,
                                expNewForm, handleExpEdit,
                                handleExpDelete, editableExpArr}) {

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
        <Experience handleExpChange={handleExpChange}
                    editableExpArr={editableExpArr}
                    handleExpDelete={handleExpDelete}
                    expState={eduExpStates[1]}
                    expNewForm={expNewForm}
                    handleExpEdit={handleExpEdit}
        />
        </div>
    )
}
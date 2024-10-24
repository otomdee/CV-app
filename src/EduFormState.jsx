export default function EduFormState({visible, handleVisibleChange, handleSubmit, formValues, handleCancel, handleSetFormValues}) {


    return (
        <div className="edu-visible">
    <div className="edu-header-container">
        <header>Education</header>
        <span className="caret" onClick={handleVisibleChange}>&#8964;</span>
    </div>

    <form className={"educationForm" + " " + visible} onSubmit={handleSubmit}>

            <div className="edu-degree">
            <label htmlFor="degree">Degree*</label>
            <input type="text" className="degree" id="degree" required 
            value={formValues.degree}
            onChange={(event) => handleSetFormValues({...formValues, degree: event.target.value})}/>
            </div>

            <div className="edu-major">
                <label htmlFor="major">Major</label>
                <input type="text" className="major" id="major"
                value={formValues.major}
                onChange={(event) => handleSetFormValues({...formValues, major: event.target.value})}/>
            </div>

            <div className="edu-school">
                <label htmlFor="school">School*</label>
                <input type="text" className="school" id="school" required
                value={formValues.school}
                onChange={(event) => handleSetFormValues({...formValues, school: event.target.value})}/>
            </div>

            <div className="edu-startDate">
                <label htmlFor="schoolStart">Start Date*</label>
                <input type="date" id="schoolStart" required
                value={formValues.startDate}
                onChange={(event) => handleSetFormValues({...formValues, startDate: event.target.value})}/>
            </div>

            <div className="edu-endDate">
                <label htmlFor="eduEndDate">End Date*</label>
                <input type="date" id="eduEndDate" required
                value={formValues.endDate}
                onChange={(event) => handleSetFormValues({...formValues, endDate: event.target.value})}/>
            </div>

            <div className="edu-buttons">
                <button id="educationSubmit" type="submit">Save</button>
                <button id="educationCancel" type="button" onClick={handleCancel}>Cancel</button>
            </div>
    </form>
                    </div>
    )
}
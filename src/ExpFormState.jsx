export default function ExpFormState({visible, handleVisibleChange, handleSubmit, formValues, handleCancel, handleSetFormValues}) {


    return (<div className="exp-visible">
    <div className="exp-header-container">
        <header>Experience</header>
        <span className="caret" onClick={handleVisibleChange}>&#8964;</span>
    </div>
    <form className={"experienceForm" + " " + visible} onSubmit={handleSubmit}>

        <div className="exp-jobTitle">
            <label htmlFor="jobTitle">Job Title*</label>
            <input type="text" id="jobTitle" className="jobTitle" required
            value={formValues.jobTitle}
            onChange={(event) => handleSetFormValues({...formValues, jobTitle: event.target.value})}/>
        </div>

        <div className="exp-employer">
            <label htmlFor="employer">Employer*</label>
            <input type="text" className="employer" id="employer" required
            value={formValues.employer}
            onChange={(event) => handleSetFormValues({...formValues, employer: event.target.value})}/>
        </div>

    <div className="exp-startDate">
        <label htmlFor="jobStart">Start Date*</label>
            <input type="date" id="jobStart" required
            value={formValues.startDate}
            onChange={(event) => handleSetFormValues({...formValues, startDate: event.target.value})}/>
    </div>

        <div className="exp-endDate">
            <label htmlFor="jobEnd">End Date*</label>
            <input type="date" id="jobEnd" required
            value={formValues.endDate}
            onChange={(event) => handleSetFormValues({...formValues, endDate: event.target.value})}/>
        </div>

        <div className="exp-desc">
            <label htmlFor="jobDescription">Description (responsibilities, achievements, etc)</label>
            <textarea id="jobDescription"
            rows="13"
            cols="30"
            value={formValues.description}
            onChange={(event) => handleSetFormValues({...formValues, description: event.target.value})}></textarea>
        </div>

        <div className="exp-buttons">
            <button id="jobSubmit" type="submit">Save</button>
            <button id="jobCancel" type="button" onClick={handleCancel}>Cancel</button>
        </div>
</form>
</div>)
}
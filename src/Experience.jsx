import { useState } from "react";

export default function Experience({handleExpChange}) {

    const [formValues, setFormValues] = useState({jobTitle:"", employer:"", description:"", startDate: "", endDate:""});

    function handleSubmit(event) {

        event.preventDefault();
        //create expobj
        let expObj = {...formValues};
        //call handleEduchange with it
        handleExpChange(event, expObj);

        setFormValues({jobTitle:"", employer:"", description:"", startDate: "", endDate:""});
    }

    function handleCancel() {
        setFormValues({jobTitle:"", employer:"", description:"", startDate: "", endDate:""});
    }

    return (
        <form id="experienceForm" onSubmit={handleSubmit}>
            <header>Experience</header>

            <label htmlFor="jobTitle">Job Title*</label>
            <input type="text" id="jobTitle" className="jobTitle" required
            value={formValues.jobTitle}
            onChange={(event) => setFormValues({...formValues, jobTitle: event.target.value})}/>

            <label htmlFor="employer">Employer*</label>
            <input type="text" className="employer" id="employer" required
            value={formValues.employer}
            onChange={(event) => setFormValues({...formValues, employer: event.target.value})}/>

            <label htmlFor="jobStart">Start Date*</label>
            <input type="date" id="jobStart" required
            value={formValues.startDate}
            onChange={(event) => setFormValues({...formValues, startDate: event.target.value})}/>

            <label htmlFor="jobEnd">End Date*</label>
            <input type="date" id="jobEnd" required
            value={formValues.endDate}
            onChange={(event) => setFormValues({...formValues, endDate: event.target.value})}/>

            <label htmlFor="jobDescription">Description (responsibilities, achievements, etc)</label>
            <textarea id="jobDescription"
            value={formValues.description}
            onChange={(event) => setFormValues({...formValues, description: event.target.value})}></textarea>

            <button id="jobSubmit" type="submit">Save</button>
            <button id="jobCancel" type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}
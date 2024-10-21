import { useState } from "react";

export default function Education({handleEduChange}) {

    const [formValues, setFormValues] = useState({degree:"", major:"", school:"", startDate: "", endDate:""});

    function handleSubmit(event) {

        event.preventDefault();
        //create eduobj
        let eduObj = {...formValues};
        //call handleEduchange with it
        handleEduChange(event, eduObj);

        setFormValues({degree:"", major:"", school:"", startDate: "", endDate:""});
    }

    function handleCancel() {
        setFormValues({degree:"", major:"", school:"", startDate: "", endDate:""});
    }

    return (
        <form id="educationForm" onSubmit={handleSubmit}>
            <header>Education</header>

            <div className="edu-degree">
            <label htmlFor="degree">Degree*</label>
            <input type="text" className="degree" id="degree" required
            value={formValues.degree}
            onChange={(event) => setFormValues({...formValues, degree: event.target.value})}/>
            </div>

            <div className="edu-major">
                <label htmlFor="major">Major</label>
                <input type="text" className="major" id="major"
                value={formValues.major}
                onChange={(event) => setFormValues({...formValues, major: event.target.value})}/>
            </div>

            <div className="edu-school">
                <label htmlFor="school">School*</label>
                <input type="text" className="school" id="school" required
                value={formValues.school}
                onChange={(event) => setFormValues({...formValues, school: event.target.value})}/>
            </div>

            <div className="edu-startDate">
                <label htmlFor="schoolStart">Start Date*</label>
                <input type="date" id="schoolStart" required
                value={formValues.startDate}
                onChange={(event) => setFormValues({...formValues, startDate: event.target.value})}/>
            </div>

            <div className="edu-endDate">
                <label htmlFor="eduEndDate">End Date*</label>
                <input type="date" id="eduEndDate" required
                value={formValues.endDate}
                onChange={(event) => setFormValues({...formValues, endDate: event.target.value})}/>
            </div>

            <div className="edu-buttons">
                <button id="educationSubmit" type="submit">Save</button>
                <button id="educationCancel" type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}
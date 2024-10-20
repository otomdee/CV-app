export default function Experience() {
    return (
        <form id="experienceForm">
            <header>Experience</header>
            <label htmlFor="jobTitle">Job Title*</label>
            <input type="text" id="jobTitle" className="jobTitle"/>
            <label htmlFor="employer">Employer</label>
            <input type="text" className="employer" id="employer"/>
            <label htmlFor="jobStart">Start Date</label>
            <input type="date" id="jobStart"/>
            <label htmlFor="jobEnd">End Date</label>
            <input type="date" id="jobEnd"/>

            <label htmlFor="jobDescription">Description (responsibilities, achievements, etc)</label>
            <textarea id="jobDescription"></textarea>

            <button id="jobSubmit" type="submit">Save</button>
            <button id="jobCancel">Cancel</button>
        </form>
    )
}
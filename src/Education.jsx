export default function Education() {
    return (
        <form id="educationForm">
            <header>Education</header>
            <label htmlFor="degree">Degree</label>
            <input type="text" className="degree" id="degree"/>
            <label htmlFor="major">Major</label>
            <input type="text" className="major" id="major"/>
            <label htmlFor="school">School</label>
            <input type="text" className="school" id="school" />
            <label htmlFor="schoolStart">Start Date</label>
            <input type="date" id="schoolStart"/>
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate"/>

            <button id="educationSubmit" type="submit">Save</button>
            <button id="educationCancel">Cancel</button>
        </form>
    )
}
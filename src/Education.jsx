import { useState } from "react";

export default function Education({handleEduChange, editableEduArr}) {

    const [formValues, setFormValues] = useState({degree:"", major:"", school:"", startDate: "", endDate:""});
    const [visible, setVisible] = useState("hidden");
    const [fieldState, setFieldState] = useState("formState");

    function handleVisibleChange() {
        visible === "hidden" ? setVisible("visible") : setVisible("hidden");
    }

    
    function handleSubmit(event) {

        event.preventDefault();
        //create eduobj
        let eduObj = {...formValues};
        //call handleEduchange with it
        handleEduChange(event, eduObj);

        setFormValues({degree:"", major:"", school:"", startDate: "", endDate:""});
        setFieldState("editState");
    }

    function handleNewForm() {
        setFieldState("formState");
    }

    function handleCancel() {
        setFormValues({degree:"", major:"", school:"", startDate: "", endDate:""});
    }

    
    const formState = <div className="edu-visible">
    <div className="edu-header-container">
        <header>Education</header>
        <span className="caret" onClick={handleVisibleChange}>&#8964;</span>
    </div>

    <form className={"educationForm" + " " + visible} onSubmit={handleSubmit}>

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
                    </div>

    const editState = <div className="edit-edu-wrap">
        <div className="edu-header-container">
            <header>Education</header>
            <span className="caret" onClick={handleVisibleChange}>&#8964;</span>
        </div>
        <div className={"edit-edu-visible" + " " + visible}>
        <div className="edit-edu-main">
    {editableEduArr.map((item) => {

        let startDate = new Date(item.startDate);
        startDate = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

        let endDate = new Date(item.endDate);
        endDate = endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

        return (<div className="edit-edu-Div" key={item.id}>
                    <hr />
                    <div>
                        <div className="edit-edu-text">
                            <span className="edit-edu-degree">{item.degree + " (" + item.major + ")"}</span>
                            <span className="edit-edu-uni">{item.school}</span>
                            <span className="edit-edu-dates">{startDate + " - " + endDate}</span>
                        </div>
                        <div className="edit-edu-Buttons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                        </div>
                    </div>
                </div>)
    })}
    </div>
    <div className="edit-edu-footer">
        <hr />
        <button id="edit-edu-button" onClick={handleNewForm}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <span>Add another education</span>
        </button>
    </div>
        </div>
                    </div>

    let renderStates = {formState: formState, editState: editState}

    return (
        <div>{renderStates[fieldState]}</div>
    )
}
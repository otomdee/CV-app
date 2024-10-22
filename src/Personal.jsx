import { useState } from "react";

export default function Personal({nameText, handleNameChange}) {
    
    const [visible, setVisible] = useState("hidden");

    function handleVisibleChange() {
        visible === "hidden" ? setVisible("visible") : setVisible("hidden");
    }

    return (
        <div className="personal-visible">

            <div className="personal-header-container">
                <header className="fieldHeader">Personal Info</header>
                <span className="caret" onClick={handleVisibleChange}>&#8964;</span>
            </div>

            <div className={"personalFields" + " " + visible}>

                <div className="fullNameField">
                    <label htmlFor="fullName">Full Name*</label>
                    <input type="text" className="fullName" id="fullName" 
                    value={nameText[0]}
                    onChange={(event) => {handleNameChange(event, 0)}}/>
                </div>

                <div className="emailField">
                    <label htmlFor="email">Email*</label>
                    <input type="email" className="email" id="email"
                    value={nameText[1]}
                    onChange={(event) => {handleNameChange(event, 1)}}/>
                </div>

                <div className="phoneField">
                    <label htmlFor="phoneNumber">Phone number*</label>
                    <input type="number" className="phone" id="phoneNumber" 
                    value={nameText[2]}
                    onChange={(event) => {handleNameChange(event, 2)}}/>
                </div>

            </div>
        </div>
    );
}
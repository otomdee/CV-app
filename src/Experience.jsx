import { useState } from "react";
import ExpFormState from './ExpFormState.jsx';
import ExpEditState from './ExpEditState';
export default function Experience({handleExpChange, editableExpArr, handleExpDelete, expState, expNewForm, handleExpEdit}) {

    const [formValues, setFormValues] = useState({jobTitle:"", employer:"", description:"", startDate: "", endDate:""});
    const [visible, setVisible] = useState("hidden");
    const [editActive, setEditActive] = useState(false);

    function handleVisibleChange() {
        visible === "hidden" ? setVisible("visible") : setVisible("hidden");
    }

    function handleSubmit(event) {

        event.preventDefault();
        //create expobj
        let expObj = {...formValues};
        //call handleExpchange with it
        if(editActive === false) {
            handleExpChange(event, expObj);
        }
        else {
            //call App fxn
            handleExpEdit(expObj);
            //change form submit state back to inActive edit state 
            changeActive()
        }
        
        setFormValues({jobTitle:"", employer:"", description:"", startDate: "", endDate:""});
    }

    function changeActive() {
        setEditActive(! editActive);
    }

    function handleCancel() {
        setFormValues({jobTitle:"", employer:"", description:"", startDate: "", endDate:""});
    }

    function handleFieldDelete(id) {
        handleExpDelete(id)
    }

    function handleSetFormValues(value) {
        setFormValues(value);
    }

    function populateForm(id) {

        expNewForm();

        const fieldContent = editableExpArr.filter((item) => {
            return (item.id === id)
        })
        
        setFormValues(fieldContent[0]);
        changeActive();
    }

    let formState = <ExpFormState 
                    visible={visible}
                    handleVisibleChange={handleVisibleChange} 
                    handleSubmit={handleSubmit} 
                    formValues={formValues}
                    handleCancel={handleCancel}
                    handleSetFormValues={handleSetFormValues}
                    editableExpArr={editableExpArr} 
                    />
    let editState = <ExpEditState 
                    visible={visible}
                    handleVisibleChange={handleVisibleChange} 
                    editableExpArr={editableExpArr} 
                    handleFieldDelete={handleFieldDelete}
                    expNewForm={expNewForm}
                    populateForm={populateForm}
                    />

    let renderStates = {formState: formState, editState: editState}

    return (
        <div>{renderStates[expState]}</div>
    )
}
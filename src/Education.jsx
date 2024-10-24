import { useState } from "react";
import EduFormState from "./EduFormState";
import EduEditState from "./EduEditState";

export default function Education({handleEduChange, editableEduArr, handleEduDelete, eduState, eduNewForm}) {

    const [formValues, setFormValues] = useState({degree:"", major:"", school:"", startDate: "", endDate:""});
    const [visible, setVisible] = useState("hidden");

    function handleVisibleChange() {
        visible === "hidden" ? setVisible("visible") : setVisible("hidden");
    }

    function handleSubmit(event) {
        event.preventDefault();
        //create eduobj
        let eduObj = {...formValues};

        handleEduChange(event, eduObj);

        setFormValues({degree:"", major:"", school:"", startDate: "", endDate:""});
    }

    function handleCancel() {
        setFormValues({degree:"", major:"", school:"", startDate: "", endDate:""});
    }

    function handleFieldDelete(id) {
        handleEduDelete(id)
    }

    function handleSetFormValues(value) {
        setFormValues(value);
    }

    function populateForm(id) {

        eduNewForm();

        const fieldContent = editableEduArr.filter((item) => {
            return (item.id === id)
        })
        
        setFormValues(fieldContent[0]);
    }

    let formState = <EduFormState 
                    visible={visible}
                    handleVisibleChange={handleVisibleChange} 
                    handleSubmit={handleSubmit} 
                    formValues={formValues}handleCancel={handleCancel}
                    handleSetFormValues={handleSetFormValues}  
                    editableEduArr={editableEduArr}  
                    />

    let editState = <EduEditState 
                    visible={visible} 
                    handleVisibleChange={handleVisibleChange} 
                    editableEduArr={editableEduArr} 
                    handleFieldDelete={handleFieldDelete}
                    eduNewForm={eduNewForm}
                    populateForm={populateForm}
                    />

    let renderStates = {formState: formState, editState: editState}

    return (
        <div>{renderStates[eduState]}</div>
    )
}
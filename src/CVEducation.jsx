export default function CVEducation({eduObj}) {

    let startDate = new Date(eduObj.startDate);
    startDate = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    let endDate = new Date(eduObj.endDate);
    endDate = endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    return (
        <div className="cv-edu-wrap">
            <h1>Education</h1>
            <span className="cv-edu-date">{startDate + " - " + endDate}</span>
            <div className="cv-edu-textWrap">
                <span className="cv-edu-degree">{eduObj.degree + " (" + eduObj.major + ")"}</span>
                <span className="cv-edu-school">{eduObj.school}</span>
            </div> 
        </div>
    )
}
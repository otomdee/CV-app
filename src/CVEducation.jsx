export default function CVEducation({eduObj}) {

    let startDate = new Date(eduObj.startDate);
    startDate = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    let endDate = new Date(eduObj.endDate);
    endDate = endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    return (
        <div>
            <h1>Education</h1>
            <span>{startDate + "-" + endDate}</span>
            <span>{eduObj.degree + "(" + eduObj.major + ")"}</span>
            <span>{eduObj.school}</span>
        </div>
    )
}
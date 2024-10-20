export default function CVExperience({expObj}) {

    let startDate = new Date(expObj.startDate);
    startDate = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    let endDate = new Date(expObj.endDate);
    endDate = endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    return (
        <div>
            <h1>Professional Experience</h1>
            <span>{startDate + "-" + endDate}</span>
            <span>{expObj.jobTitle}</span>
            <span>{expObj.employer}</span>
            <span>{expObj.description}</span>
        </div>
    )
}
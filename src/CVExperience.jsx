export default function CVExperience({expObj}) {

    let startDate = new Date(expObj.startDate);
    startDate = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    let endDate = new Date(expObj.endDate);
    endDate = endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });

    return (
        <div className="cv-exp-wrap">
            <h1>Professional Experience</h1>
            <span className="cv-exp-date">{startDate + "-" + endDate}</span>
            <div className="cv-exp-textWrap">
                <span className="cv-exp-job">{expObj.jobTitle}</span>
                <span className="cv-exp-employer">{expObj.employer}</span>
                <span className="cv-exp-desc">{expObj.description}</span>
            </div>
        </div>
    )
}
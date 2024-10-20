export default function CVPage({nameText, eduArr, expArr}) {
    return (
        <div className="cvPage">
            <div className="cvName">
                <span className="fullNameDiv">{nameText[0]}</span>
                <span className="emailDiv">{nameText[1]}</span>
                <span className="phoneDiv">{nameText[2]}</span>
            </div>

            <div className="eduArrs">
                {eduArr}
            </div>

            <div className="cvExperience">
                {expArr}
            </div>
        </div>
    )
}
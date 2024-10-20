export default function Personal({nameText, handleNameChange}) {
    
    return (
        <div>
            <header >Personal</header>
            <label htmlFor="fullName">Full Name*</label>
            <input type="text" className="fullName" id="fullName" 
            value={nameText[0]}
            onChange={(event) => {handleNameChange(event, 0)}}/>
            <label htmlFor="email">Email*</label>
            <input type="email" className="email" id="email"
            value={nameText[1]}
            onChange={(event) => {handleNameChange(event, 1)}}/>
            <label htmlFor="phoneNumber">Phone number*</label>
            <input type="number" className="phone" id="phoneNumber" 
            value={nameText[2]}
            onChange={(event) => {handleNameChange(event, 2)}}/>
        </div>
    );
}
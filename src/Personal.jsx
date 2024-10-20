export default function Personal() {
    return (
        <div>
            <header >Personal</header>
            <label htmlFor="fullName">Full Name*</label>
            <input type="text" className="fullName" id="fullName"/>
            <label htmlFor="email">Email*</label>
            <input type="email" className="email" id="email"/>
            <label htmlFor="phoneNumber">Phone number*</label>
            <input type="number" className="phone" id="phoneNumber" />
        </div>
    );
}
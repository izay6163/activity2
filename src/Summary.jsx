export default function Summary ({fullName, birthdate, age}) {
    return(
        <><div><h1>Personal Details Summary</h1></div>
        <div>
            <p>You are <span className="span"> {fullName}.</span>
            You were born on<span className="span"> {birthdate},</span>
            which makes you<span className="span"> {age} </span>years old now.Long live and prosper human being.</p>
            </div></>
        
    );
}
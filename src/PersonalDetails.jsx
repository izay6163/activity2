import { useState } from "react";
import Summary from "./Summary";    
export default function PersonalDetails (){
    const [fullName, setFullName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState("");
    const Reset = () => {
        setFullName("");
        setBirthdate("");
        setAge("");
    } 

    return(
        <>
        <div>
    <h1>Who I am</h1>
    </div>
    <div>
        <h1>Personal Details</h1>
        <label>Full Name:</label>
            <input type="text" placeholder="Enter your fullname" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            ``
        <label>Birthdate:</label>
            <input type="date" placeholder="Enter your birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        
        <label>Age</label>
            <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
       
       <button onClick={Reset}>Reset</button>

       <Summary fullName={fullName} birthdate={birthdate} age={age}/>
        </div></>
    )
}
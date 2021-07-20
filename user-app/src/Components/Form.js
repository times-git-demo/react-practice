import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [input, setInput] = useState({firstname: "", age:"", joiningDate: ""})
    const handleInputChange = (e) => {
        console.log(e.target);
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        const promise = axios.post('http://localhost:4200/users', input);
        promise.then((response) => {
            console.log(response);
        })

    }
    return (
        <div>
            <h4>Form</h4>
            <input placeholder="First Name" name="firstname" value={input.firstname} onChange={handleInputChange}></input>
            <input placeholder="Age" name="age" value={input.age} onChange={handleInputChange}></input>
            <input name="joiningDate" type="date" value={input.joiningDate} onChange={handleInputChange}></input>
            <button onClick={handleClick}>Save</button>

        </div>
    )
}
export default Form
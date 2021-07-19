import { useState } from "react";

const Form = () => {
    const [input, setInput] = useState({ firstname: "Jai" })
    const handleInputChange = (e) => {
        console.log(e.target);
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h4>Form</h4>
            <input name="firstname" value={input.firstname} onChange={handleInputChange}></input>
            <input name="age" value={input.age} onChange={handleInputChange}></input>

        </div>
    )
}
export default Form
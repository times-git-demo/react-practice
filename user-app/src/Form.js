import {useState} from "react";

const Form = () => {
    const [input, setInput] = useState({firstname: "Jai"})
    return (
        <div>
            <h4>Form</h4>
            <input value={input.firstname}></input>

        </div>
    )
}
export default Form
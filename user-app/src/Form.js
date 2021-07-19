import { useState } from "react";

const Form = () => {
    const [input, setInput] = useState({ firstname: "Jai" })
    return (
        <div>
            <h4>Form</h4>
            <input value={input.firstname} onChange={(e) => { setInput({ ...input, firstname: e.target.value }) }}></input>
            <input value={input.age} onChange={(e) => {
                console.log(e);
                setInput({ ...input, age: e.target.value })
            }}></input>

        </div>
    )
}
export default Form
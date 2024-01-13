import { useState,useRef } from "react";
//example of a controlled component, where we handle the form input via states, as in the component is controlled by the state in react
function ControlledComponent(){
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <input type ="text"
        value={inputValue}
        onChange={handleChange}
        />
    )
}

function UncontrolledComponent(){
    const inputRef = useRef(); // allows us to directly access the input field's DOM element and its current value.
    const handleClick = () =>{
        //here we can access the current value using the ref, like:
        console.log(inputRef.current.value);
    };

    return (
        <div>
            <input type="text"
            ref={inputRef}/>
            <button onClick={handleClick}>value</button>
        </div>
    )
}


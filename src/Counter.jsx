import React,{useState} from "react";
 
const Counter = () =>{
    const [count,setCount] = useState(0);
    const [value, setValue] = useState("");
    const onTextChange=(event)=>{
        setValue(event.target.value);
    }
    return(
    <>
        <button onClick={() => setCount(count+1)}>Click me</button>
        <button onClick={() => setCount(0)}>Reset!</button>
        <p>You cilcked {count} times</p>
        <input
            type="text"
            value={value}
            onChange={event => onTextChange(event)}
        />
        <h3>{value.length}</h3>
    </>
    );  
}
export default Counter;
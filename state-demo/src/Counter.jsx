import { useState } from "react"
export default function Counter(){
    const [count,setCount] = useState(0);
    const incrementCount = () => {
        setCount((currentCount) => currentCount + 1);
        console.log(count);// Always refers to the prev value so setCount would be 1 count would be 0
    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={incrementCount}>+1</button>
        </div>
    )
}
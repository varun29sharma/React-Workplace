import { useState } from "react";
import "./Toggler.css";
export default function Toggler(){
    const[isHappy,setIsHappy] = useState(true);
    const toggle = () => setIsHappy(!isHappy);
    return (
        <p className="Toggler" onClick={toggle}>{isHappy ? "😊" : "😂"}</p>
    )
} 
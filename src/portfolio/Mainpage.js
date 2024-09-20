import "./Sidebar.css"
import { useState } from "react";

function Mainpage(){
const[theme,setTheme]=useState("light");
const [number,setNumber]=useState(0);
function changeTheme(){
    theme==="light"?setTheme("dark"):setTheme("light");
}
function add(){
    setNumber(number+1)
}
function sub(){
    setNumber(number-1)
}
return(
    <div className="sidebar">
        <h1>Hi I'm James mabe</h1>
        <button onClick={changeTheme}>theme</button>
        {theme}
        <button onClick={add}>+</button>
        {number}
        <button onClick={sub}>-</button>
    </div>
);
}

export default Mainpage;
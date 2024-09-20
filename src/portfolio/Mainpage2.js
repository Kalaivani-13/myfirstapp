import "./Sidebar.css"
import { useState } from "react";

function Mainpage2(){
    const[number,setNumber]=useState(0);
    }
function add(){
    setNumber(number+1)
} 

 return (
    <div className="sidebar">
        {/*Navbar />*/}
        <h1>Hi I'm james mabe</h1>
        <button onClick={add}>+</button>  
        {number}
    </div>
)
}

export default Mainpage2;

import './App.css';
import { useState } from "react";

/*import Sidebar from "./portfolio/Sidebar";
import Button from "./portfolio/Button";
import Mainpage from "./portfolio/Mainpage";
function App() {
  return (

    <div>
     <Sidebar/>
     <Button/>
     <Mainpage/>
    </div>
    );
}*/


  const navlist=[
    {title:"About"},
    {title:"skills"},
    {title:"Experiences"},
  ];
  function App(){
    const[input,setInput]=useState("");
    const [data,setData]=useState(navlist); 
  
  function onFormSubmit(e){
    e.preventDefault();
    setData([...data,{title:input}])
    console.log(input);
  }
  return(
  <div>
    {data.map((val)=>{
    return(<button>{val.title}</button>);
  })}
<form onSubmit={(e)=>{onFormSubmit(e)}}>
    <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
    <input type="submit"/>
  </form>
  {input}
  </div>
  );
}
export default App;
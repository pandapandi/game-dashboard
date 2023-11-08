import React from "react";
import { useState } from "react";
import "./style.css"
import Nav from "./components/nav";
import LeftMenu from "./components/leftMenu";
import RightSideBar from "./components/rightsidebar";
import Main from "./components/main";

const lightTheme = {
  name : "LIGHT",
  bg : "#FDFDFD",
  sec : "#D9D9D9",
  font : "#5E5E5E" 
}


function App() {

  const [theme,setTheme] = useState(lightTheme) ;



  return (
    <div className="App" style={{backgroundColor: theme.bg}}>
      <div style={{backgroundColor :theme.sec}}></div>

      <Nav theme={theme}/>
      <LeftMenu theme={theme} themechanger={setTheme} />
      <Main theme ={theme}/>
      <RightSideBar theme = {theme}/>

      

      



    
            
    </div>
  );
}

export default App;

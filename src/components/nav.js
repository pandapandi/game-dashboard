import React from "react";
import BasicMenu from "./dropdown";
import { AiOutlineSearch } from "react-icons/ai"


export default function Nav(props) {

    const cat_list = ["Sport", "Racing", "Arcade", "Action", "Adventure"];
    const streamers_list = ["item1", "item2", "item3", "item4", "item5"]
    


    return(
        <div className="navbar" style = {{borderColor : props.theme.sec  }}>
         <div className="nav-btn-container" >
            <BasicMenu theme = {props.theme} name = "Categories" list = {cat_list}/>
            <BasicMenu theme = {props.theme} name = "Top Streamers" list = {streamers_list}/>


         </div>

         <div className="searchbox" style = {{backgroundColor: props.theme.sec}}>
            <input type = "text" placeholder="Search"></input>
            <AiOutlineSearch style={{marginRight:"21px", color:props.theme.font, fontSize:"1.3rem"}}/>
         </div>
        </div> 
    )
}
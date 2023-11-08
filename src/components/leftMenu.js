import React, { useState } from "react"
import profilepic from "./../static/profile-pic.png"
import { BsBoxes } from "react-icons/bs"
import { AiOutlineCompass } from "react-icons/ai"
import { BsPeople } from "react-icons/bs"
import { BsFire } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import { IoGameControllerOutline } from "react-icons/io5"
import { light } from "@mui/material/styles/createPalette"
import { useRef } from "react"


const lightTheme = {
    name: "LIGHT",
    bg: "#FDFDFD",
    sec: "#D9D9D9",
    font: "#5E5E5E"
  }
  
  
  const darkTheme = {
    name: "DARK",
    bg: "#21262C",
    sec: "#1A1B1F",
    font: "#ffffff"
  }



export default function LeftMenu(props) {
    // const btn = document.querySelector()
    const btn = useRef('');
    const [x, setX] = useState(0)

    const clickHandler = (e) => {
        // const btn = document.querySelector(".theme-btn")
        if(props.theme.name == "LIGHT"){
            btn.current.style.justifyContent = "flex-end";
        }

        else {
            btn.current.style.justifyContent= "flex-start";
        }


        let newTheme = props.theme.name == "LIGHT" ? darkTheme : lightTheme
        props.themechanger(newTheme)
    }



    return (
        <div className="left-menu" style={{ borderColor: props.theme.sec, color: props.theme.font }}>
            <div className="profile-container">
                <img src={profilepic}></img>
                <h4>VILOK PARKHI</h4>
            </div>

            <ul className="menu-container">
                <li style={{ fontWeight: "700" }}>
                    <IoGameControllerOutline style={{ fontSize: "20px" }} />
                    Dashboard
                </li>
                <li>
                    <BsBoxes style={{ fontSize: "20px" }} />
                    Subscriptions
                </li>
                <li>
                    <AiOutlineCompass style={{ fontSize: "20px" }} />
                    Discover
                </li>
                <li>
                    <BsPeople style={{ fontSize: "20px" }} />
                    Friends
                </li>
                <li>
                    <BsFire style={{ fontSize: "20px" }} />
                    Trending
                </li>
                <li>
                    <FiSettings style={{ fontSize: "20px" }} />
                    Settings
                </li>
                <li>
                    <BiLogOut style={{ fontSize: "20px" }} />
                    Logout
                </li>
            </ul>

            <button className="theme-btn" style={{ backgroundColor: props.theme.sec, cursor: "pointer" }} onClick={clickHandler} ref={btn}>
                <div className="switch" style={{ backgroundColor: props.theme.bg, color: props.theme.font }}> {props.theme.name} </div>
            </button>

        </div>
    )
} 
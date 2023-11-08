import React from "react"
import trophy from "./../static/trophy.jpeg"
import match from "./../static/esport.png"



export default function RightSideBar (props){

    let statsList = [
        {
            rank: 1,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 2,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 3,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 4,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 5,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 6,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 7,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 8,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 9,
            user: "vanshu",
            coins: 2500
          },
          {
            rank: 10,
            user: "chutiya",
            coins: 2500
          }
    ]

    return (

    <div className="rightsidebar" style={{display:"flex", flexDirection:"column", borderLeft:`2px solid`, padding:"2vw", color : props.theme.font, borderColor: props.theme.sec, rowGap: "3vh"}}>


        <div style={{display :"flex",justifyContent:"space-between"}}>
            <h2 style={{width:"60%"}}>Watch and Earn Coins</h2>
            <div>
                <img src = {trophy} style={{display :"flex", height: "7vh",borderRadius:"50%"}}></img>
            </div>
        </div>



        <div >
            <Stats details = {{rank:"Rank", user: "User", coins: "Coins"}} ></Stats>
            {statsList.map((item) => {
                return(
                    <Stats details = {item}></Stats>
                )
            })}
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
            <h2>Live E Sports Matches</h2>
            <img src = {match} style={{marginTop :"10px", width:"100%", borderRadius :"10px"}}></img>

        </div>

    </div>
    )
}




function Stats(props) {
    return (
        <div className="stats">
            <div>
                {props.details.rank}
            </div>

            
            <div>
                {props.details.user}
            </div>

            
            <div>
                {props.details.coins}
            </div>

        </div>
    )
}
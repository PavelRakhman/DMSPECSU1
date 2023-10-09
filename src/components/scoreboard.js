import React from "react"
import './scoreboard.css'
export const ScoreBoard =({scores, XTurn})=>{
    const {xScore, oScore} = scores
return(
    <div className="scoreBoard">
    <span className={`score x-score ${!XTurn && "inactive"}`}>X-{xScore}</span>
    <span className={`score o-score ${XTurn && "inactive"}`}>o-{oScore}</span>
    </div>
)
}
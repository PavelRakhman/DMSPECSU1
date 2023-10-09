import React from 'react'
import './gameboard.css'
import {Square} from './square'


export const Gameboard = ({board, onClick})=>{
    return(
        <div className='Gameboard'>
        {board.map((value, idx)=>{
            return <Square value = {value}
            onClick={()=>value===null&& onClick(idx)}
            ></Square>
        })}
        </div>
    )
}



import React from 'react'
import './square.css'

export const Square = ({value, onClick})=>{
    const style = value ==="X"? "Square x" : "Square o"
    return (<button className={style} onClick={onClick}>{value}</button>)
}


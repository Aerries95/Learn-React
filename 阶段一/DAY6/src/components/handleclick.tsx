import {useState} from 'react'
import './handleclick.css'
export default function Event (){
    const handleClick = (e) => {
        console.log(e.nativeEvent)
        console.log(e.target.value)
    }
    return (
        <button onClick={handleClick} className = "btn-glass">点我</button>
    )
}
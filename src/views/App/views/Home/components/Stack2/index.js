import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { 
  FaSearch as Icon,
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"


const Stack = props => {

  const handleNext = () => {
    const stack = document.getElementById('stack')
    const total = stack.childElementCount
    const children = stack.querySelectorAll('li')

    const focusedIdx = [...children].findIndex(n => {
      return n.classList.contains('focused')
    })

    const idxToFocus = (focusedIdx === total -1) ? 0 : focusedIdx + 1 
    children.forEach(n => n.classList.remove('focused'))
    children[idxToFocus].classList.add('focused')
}

  return (
    <div>
      <div>
        <button>
          <Left/>
        </button>
          <div>
          </div>
        <button onClick={handleNext}>
          <Right/>
        </button>
      </div>
      <ul className='stack' id='stack'>
        {props.data.map((s, i) => {
          if(i===0) {
            return <li className='card focused'>{s.name}</li>
          }
          return <li className='card'>{s.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Stack
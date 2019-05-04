import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {

  return (
    <li 
      style={{
        backgroundImage: `url(${props.link})`
      }}
      className={`card ${props.className || ''}`}>
      <h2>{props.name}</h2>
      <Link to={`/app/story/${props.id}`}>Read</Link>
    </li>
  )
}

export default Card
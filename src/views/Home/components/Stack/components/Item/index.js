import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Item = props => {
  const bgCover = {
    backgroundImage: `url(${props.link})`
  }
  return (
    <div 
      style={bgCover}
      className={styles.item}>
      <h2>{props.name}</h2>
      <Link to={`/story/${props.id}`}>Read</Link>
    </div>
  )
}

export default Item
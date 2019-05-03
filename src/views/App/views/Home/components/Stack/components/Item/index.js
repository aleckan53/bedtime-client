import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Item = props => {

  const bgCover = {
    backgroundImage: `url(${props.link})`
  }

  return (
    <div 
      // onTouchStart={e=>console.log(e.touches[0].pageX)}
      // onTouchEnd={e=>console.log(e.changedTouches[0].pageX)}
      className={styles.Item} 
      style={bgCover} 
      id={`${props.stackId}-card-${props.num}`}>
      <div className={styles.overlay}>
        <h2>{props.name}</h2>
        <Link to={`/story/${props.id}`}>Read</Link>
      </div>
    </div>
  )
}

export default Item
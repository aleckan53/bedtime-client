import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Item = props => {

  const bgCover = {
    backgroundImage: `url(${props.link})`
  }

  return (
    <div className={styles.Item} style={bgCover}>
      <h2>{props.name}</h2>
      <Link to={`/story/${props.id}`}>Read</Link>
    </div>
  )
}

export default Item
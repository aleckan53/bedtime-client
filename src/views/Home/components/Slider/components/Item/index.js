import React from 'react'
import styles from './styles.module.css'

const Item = props => {
  return (
    <div className={styles.item}>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Item
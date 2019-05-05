import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const IconBtn = props => {

  const { onClick, to, title, icon } = props
  const Icon = icon

  return (
    <Link
      className={`${styles.IconBtn}`}
      onClick={onClick || ''}
      to={to || ''}>
      <li>
        <span>{title || ''}</span>
        <Icon/>
      </li>
    </Link>
  )
}

export default IconBtn
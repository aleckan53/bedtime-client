import React, { useState } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import {
  FaBars as Menu,
  FaBookOpen as Book,
  FaEdit as Edit,
  FaList as List,
  FaHome as Home
} from 'react-icons/fa'

const Nav = props => {

  const [checked, setChecked] = useState(false)
  console.log(checked)
  return (
    <nav className={styles.Nav}>
      <div className={styles.toogleBtn}>
        <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
        <List/>
      </div>
      <div className={styles.dropDown} style={{maxHeight: checked ? '220px' : '0px'}}>
        <ul>
          <Link to='/home' onClick={() => setChecked(false)}>
            <li>
              <span>Home</span><Home/>
            </li>          
          </Link>
          <Link to='/editor' onClick={() => setChecked(false)}>
            <li>
              <span>Editor</span><Edit/>
            </li>          
          </Link>
          <Link to='/login' onClick={() => setChecked(false)}>
            <li>
              <span>Login</span><Book/>
            </li>          
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
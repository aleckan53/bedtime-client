import React, { useState } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Service from './service'
import {
  FaBookOpen as Book,
  FaEdit as Edit,
  FaList as List,
  FaHome as Home
} from 'react-icons/fa'

const Nav = props => {

  const [checked, setChecked] = useState(false)

  const handleLogOut = () => {

  }

  const logBtn = () => {
    if(!!Service.getAuthToken()) {
      return (
        <Link to='/' onClick={() => {
          setChecked(false)
          Service.clearAuthToken()
        }}>
          <li>
            <span>Logout</span><Book/>
          </li>          
        </Link>
      )
    } else {
      return (
        <Link to='/app/auth' onClick={() => setChecked(false)}>
          <li>
            <span>Login</span><Book/>
          </li>          
        </Link>
      )
    }

  }

  return (
    <nav className={styles.Nav}>
      <div className={styles.logo}>Bedtime</div>
      <div className={styles.toogleBtn}>
        <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
        <List/>
      </div>
      <div className={styles.dropDown} style={{maxHeight: checked ? '220px' : '0px'}}>
        <ul>
          <Link to='/app' onClick={() => setChecked(false)}>
            <li>
              <span>Home</span><Home/>
            </li>          
          </Link>
          <Link to='/app/editor' onClick={() => setChecked(false)}>
            <li>
              <span>Editor</span><Edit/>
            </li>          
          </Link>
          {logBtn()}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
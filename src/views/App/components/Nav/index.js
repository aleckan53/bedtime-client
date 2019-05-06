import React, { useState } from 'react'
import styles from './styles.module.css'
import Service from './service'
import IconBtn from './components/IconBtn'
import { Link } from 'react-router-dom'
import {
  FaBookOpen as Book,
  FaEdit as Edit,
  FaList as List,
  FaHome as Home
} from 'react-icons/fa'

const Nav = props => {

  const [checked, setChecked] = useState(false)

  const logBtn = () => (
    !!Service.getAuthToken() 
    ? <IconBtn
      to='/app/auth'
      title='Logout'
      icon={Book}
      onClick={() => {
        setChecked(false)
        Service.clearAuthToken()
      }}/>
    : <IconBtn
      to='/app/auth'
      title='Login'
      icon={Book}
      onClick={() => setChecked(false)}/>
  )

  return (
    <nav className={styles.Nav}  style={{height: checked ? '18rem' : '5rem'}}>
      <Link to='/' className={styles.logo}>Bedtime</Link>
      <div className={styles.toogleBtn}>
        <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
        <List/>
      </div>
      <ul className={styles.dropDown} style={{visibility: checked ? 'visible' : ''}}>
        <IconBtn
          to='/app/home'
          title={'Home'}
          icon={Home}
          onClick={() => setChecked(false)}/>
        <IconBtn
          to='/app/editor'
          title={'Editor'}
          icon={Edit}
          onClick={() => setChecked(false)}/>
        {logBtn()}
      </ul>
    </nav>
  )
}

export default Nav
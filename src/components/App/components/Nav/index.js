import React, { useState } from 'react'
import styles from './styles.module.css'
import Service from './service'
import IconBtn from './components/IconBtn'
import { Link } from 'react-router-dom'
import { 
  IoMdHome as Home,
  IoIosList as List,
  IoIosLogIn as Login,
  IoIosLogOut as Logout,
  IoMdBook as Edit
  } from 'react-icons/io'
const Nav = props => {

  const [checked, setChecked] = useState(false)

  const logBtn = () => (
    !!Service.getAuthToken() 
    ? <IconBtn
      to='/app/auth'
      title='Logout'
      checked={checked}
      icon={Logout}
      onClick={() => {
        setChecked(false)
        Service.clearAuthToken()
      }}/>
    : <IconBtn
      to='/app/auth'
      title='Login'
      checked={checked}
      icon={Login}
      onClick={() => setChecked(false)}/>
  )

  return (
    <nav className={styles.Nav}  style={{height: checked ? '18rem' : '5rem'}}>
      <Link to='/' className={styles.logo}>Bedtime</Link>
      <div className={styles.toogleBtn}>
        <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
        <List/>
      </div>
      <ul className={styles.dropDown} style={{visibility: checked ? 'visible' : 'hidden'}}>
        <IconBtn
          to='/app'
          title={'Home'}
          checked={checked}
          icon={Home}
          onClick={() => setChecked(false)}/>
        <IconBtn
          to='/app/editor'
          title={'Editor'}
          checked={checked}
          icon={Edit}
          onClick={() => setChecked(false)}/>
        {logBtn()}
      </ul>
    </nav>
  )
}

export default Nav
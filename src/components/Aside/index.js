import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import Dashboard from './components/Dashboard'
import { 
  IoIosMenu as Icon, 
} from 'react-icons/io'

const NavBar = props => {
  const [show, setShow] = useState(false)
  const toggleBar = () => {
    setShow(!show)
  }

  const style = {
    show: {
      left: 0,
      opacity: 1,
    },
    hide: {
      left: '-60%',
    }
  }

  return (
    <aside        
      className={styles.Aside} 
      style={show ? style.show : style.hide}
    >
      <nav>

      </nav>
      <Dashboard/>
      <button 
        onClick={toggleBar} 
        className={styles.toogleBtn}
        style={show ? {} : {
          transform: 'rotate(180deg)'
        }}>
        <Icon/>
      </button>
      <NavLink>Login</NavLink>
      <NavLink>Signup</NavLink>
    </aside>
  )
}

export default NavBar
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

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
      left: '-50%',
    }
  }

  return (
    <>
      <nav 
        className={styles.NavBar} 
        style={show ? style.show : style.hide} 
        onClick={() => setShow(!show)}>
        <NavLink to='/editor'>Editor</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <button 
        onClick={toggleBar} 
        className={styles.toogleBtn}
        style={show ? {} : {left: '0'}}>
        Toggle
      </button>
    </>
  )
}

export default NavBar
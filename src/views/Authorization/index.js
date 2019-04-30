import React, { useState } from 'react'
import styles from './styles.module.css'
import Login from './components/Login'
import Signup from './components/Signup'

const Authorization = props => {

  const [formType, switchForm] = useState(false)
  const fieldset = formType ? <Login/> : <Signup/>
  const btnTitle = formType ? 'Signup' : 'Login'
  return (
    <section className={styles.Login}>
      <form>
        {fieldset}
      </form>
      <div className={styles.btnWrapper}>
        <button type='button' onClick={() => switchForm(!formType)}>{btnTitle}</button>
        <button type='button'>Continue as a guest</button>
      </div>
    </section>
  )
}

export default Authorization
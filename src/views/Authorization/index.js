import React, { useState } from 'react'
import styles from './styles.module.css'
import Login from './components/Login'
import Signup from './components/Signup'

const Authorization = props => {

  const [formType, switchForm] = useState(false)
  const fieldset = formType ? <Login/> : <Signup/>
  return (
    <section className={styles.Login}>
      <form>
        {fieldset}
      </form>
      <div className={styles.btnWrapper}>
        <button type='button' onClick={() => switchForm(!formType)}>Sign up</button>
        <button type='button'>Continue as a guest</button>
      </div>
    </section>
  )
}

export default Authorization
import React, { useState } from 'react'
import styles from './styles.module.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Api from './api'

const Authorization = props => {
  const [state, setState] = useState({
    formValid: false,
    values: {
      user_name: ''
    },
    error: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setState({
      formValid: false,
      values: {},
      error: null,  
    })

    if (formType) {
      Api.login(state.values)
        .then(console.log)
    }

    if (!formType) {
      Api.signup(state.values)
        .then(({user_name}) => {
          switchForm(true)
          setState({
            ...state,
            values: {
              ...state.values,
              user_name
            }
          })
        })
        .catch(err => {
          console.log(err)
          setState({
            ...state,
            error: err.message
          })
        })
    }
  }
  // switches fieldset
  const [formType, switchForm] = useState(false)
  const fieldset = formType ? <Login state={state} setState={setState}/> : <Signup state={state} setState={setState}/>
  const btnTitle = formType ? 'Signup' : 'Login'

  return (
    <section className={styles.Auth}>
      <form onSubmit={handleSubmit}>
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
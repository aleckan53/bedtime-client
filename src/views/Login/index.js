import React, { useState } from 'react'
import styles from './styles.module.css'

const Login = props => {

  const [signUp, showSignUp] = useState(false)

  return (
    <section className={styles.Login}>
      <form>
      {!signUp ? 
        <fieldset>
          <legend>Login</legend>
          <label htmlFor='username'>User name</label>
          <input name='username' type='text'/>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password'/>
          <button type='submit'>Submit</button>
        </fieldset>
        : 
        <fieldset>
          <legend>Sign up</legend>
          <label htmlFor='username'>User name</label>
          <input name='username' type='text'/>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password'/>
          <label htmlFor='password-conf'>Confirm password</label>
          <input name='password-conf' type='password'/>
          <label htmlFor='first'>First name</label>
          <input name='first' type='text'/>
          <label htmlFor='last'>Last name</label>
          <input name='last' type='text'/>

          <button type='submit'>Submit</button>

        </fieldset>}
      </form>
      <button type='button' onClick={() => showSignUp(!signUp)}>Sign up</button>
      <button type='button'>Continue as a guest</button>
    </section>
  )
}

export default Login
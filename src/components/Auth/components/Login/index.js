import React from 'react'
import { genAttributes } from './service'

const Login = props => {

  const attr = genAttributes(props)

  return (
    <fieldset>
      <legend>Login</legend>
      <label htmlFor='user_name'>User name</label>
      <input {...attr.user_name}/>
      <label htmlFor='password'>Password</label>
      <input {...attr.password}/>
      <p>{props.state.error}</p>
      <button type='submit'>Submit</button>
    </fieldset>
  )
}

export default Login
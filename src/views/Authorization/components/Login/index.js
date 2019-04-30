import React from 'react'

const Login = () => (
  <fieldset>
    <legend>Login</legend>
    <label htmlFor='username'>User name</label>
    <input name='username' type='text'/>
    <label htmlFor='password'>Password</label>
    <input name='password' type='password'/>
    <button type='submit'>Submit</button>
  </fieldset>
)

export default Login
import React from 'react'

const Signup = props => (
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
    </fieldset>
)

export default Signup
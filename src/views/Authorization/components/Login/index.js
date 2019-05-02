import React from 'react'

const Login = props => {
  const attr = {
    user_name: {
      name: 'user_name',
      type: 'text',
      autoFocus: props.state.values.user_name ? '' : true,
      defaultValue: props.state.values.user_name,
      autoComplete: 'username',
      onChange: e => props.setState({
        ...props.state,
        values: {
          ...props.state.values,
          user_name: e.target.value
        }
      })
    },
    password: {
      name: 'password',
      type: 'password',
      autoFocus: !props.state.values.user_name ? '' : true,
      autoComplete: 'current-password',
      onChange: e => props.setState({
        ...props.state,
        values: {
          ...props.state.values,
          password: e.target.value
        }
      })
    }
  }

  return (
    <fieldset>
      <legend>Login</legend>
      <label htmlFor='user_name'>User name</label>
      <input {...attr.user_name}/>
      <label htmlFor='password'>Password</label>
      <input {...attr.password}/>
      <button type='submit'>Submit</button>
    </fieldset>
  )
}

export default Login
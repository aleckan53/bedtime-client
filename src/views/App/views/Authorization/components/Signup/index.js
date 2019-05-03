import React, { useState, useEffect } from 'react'
import Service from './service'
import {
  IoIosCheckmark as Ok,
  IoIosClose as Bad
} from 'react-icons/io'

const Signup = props => {
  
  const [valid, setValid] = useState({
    user_name: false,
    password: false,
    first_name: false,
    last_name: false,
  })

  const { state, setState } = props

  useEffect(() => {
    setState({
      ...state,
      formValid: !Object.values(valid).includes(false)
    })
  // eslint-disable-next-line
  }, [valid])

  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value

    setValid({
      ...valid,
      [field]: Service.validate[field](value)
    })

    setState({
      ...state,
      values: {
        ...state.values,
        [field]: value
      }
    })
  }

  const isValid = (field) => {
    if(state.values[field]) {
      return valid[field] ? <Ok/> : <Bad/>
    }
  }

  const attr = Service.genAttributes(props)

  return (
    <fieldset>
      <legend>Sign up</legend>
      <label htmlFor='user_name'>User name</label> {isValid('user_name')}
      <input {...attr.user_name} onChange={handleChange} autoFocus/>
      <label htmlFor='password'>Password</label> {isValid('password')}
      <input {...attr.password} onChange={handleChange}/>
      <label htmlFor='first_name'>First name</label> {isValid('first_name')}
      <input {...attr.first_name} onChange={handleChange}/>
      <label htmlFor='last_name'>Last name</label> {isValid('last_name')}
      <input {...attr.last_name} onChange={handleChange}/>
      <p>{state.error}</p>
      <button type='submit' disabled={!state.formValid}>Submit</button>
    </fieldset>
  )
}

export default Signup
import React, { useState, useEffect } from 'react'
import Service from '../../service'
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

    return () => {
      setState({
        formValid: false,
        fieldsValid: {},
        values: {},
        error: null
      })
    }
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

  const attr = {
    user_name: {
      name: 'user_name',
      type: 'text',
      placeholder: '4-20 characters',
      autoComplete: 'username',
      required: true,
    },
    password: {
      name: 'password',
      type: 'password',
      placeholder: '8-20 chars, at least 1 number',
      autoComplete: 'new-password',
      required: true,
    },
    first_name: {
      name: 'first_name',
      type: 'text',
      placeholder: 'Letters only',
      autoComplete: 'given-name',
    },
    last_name: {
      name: 'last_name',
      type: 'text',
      placeholder: 'Letters only',
      autoComplete: 'family-name',
    }
  }

  const isValid = (field) => {
    return field ? <Ok/> : <Bad/>
  }

  return (
    <fieldset>
      <legend>Sign up</legend>
      <label htmlFor='user_name'>User name</label> {isValid(valid.user_name)}
      <input {...attr.user_name} onChange={handleChange} autoFocus/>
      <label htmlFor='password'>Password</label> {isValid(valid.password)}
      <input {...attr.password} onChange={handleChange}/>
      <label htmlFor='first_name'>First name</label> {isValid(valid.first_name)}
      <input {...attr.first_name} onChange={handleChange}/>
      <label htmlFor='last_name'>Last name</label> {isValid(valid.last_name)}
      <input {...attr.last_name} onChange={handleChange}/>
      <p>{state.error}</p>
      <button type='submit' disabled={!state.formValid}>Submit</button>
    </fieldset>
  )
}

export default Signup
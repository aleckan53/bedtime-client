import React, { useState } from 'react'
import Api from './api'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'
import config from 'config'

const Editor = props => {

  const [state, setState] = useState({
    story: '',
    error: null,
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (story) => {
    setState({
      ...state,
      story,
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    Api.uploadStory(state.story)
      .then(res => {
        setMessage(res.message)
        setState({
          story: '',
          error: null,
        })
        setLoading(false)
        setTimeout(() => {
          setMessage('')
        }, 4e3)
      })
      .catch(error => {
        setState({
          ...state,
          error
        })
      })
  }
  const userAuthorized = !!window.sessionStorage.getItem(config.TOKEN_NAME)

  const btnDisabled = userAuthorized && state.story.length > 800
  return (
    <>
      <section className='editor'>
        {!loading ? '' : <p className='msg'>Processing...</p>}
        <div className='msg'>{message}</div>
        <ReactQuill 
          theme='snow'
          value={state.story}
          onChange={handleChange}/>
      <button 
        className='submit' 
        onClick={handleSubmit} 
        disabled={!btnDisabled}>
        {userAuthorized ? 'Submit' : 'Please login'}
      </button>
      </section>
    </>
  )
}

export default Editor
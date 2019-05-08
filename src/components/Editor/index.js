import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import config from 'config'
import Api from './api'
import 'react-quill/dist/quill.snow.css'
import './styles.css'

const Editor = props => {

  const [state, setState] = useState({
    html: '',
    error: null,
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (html) => {
    setState({
      ...state,
      html,
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    Api.uploadStory(state.story)
      .then(res => {
        setMessage(res.message)
        setState({
          html: '',
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


  return (
    <section className='editor'>
      {!loading ? '' : <p className='msg'>Processing...</p>}
      <div className='msg'>{message}</div>
      <ReactQuill
        theme='snow'
        onChange={handleChange}
        value={state.html}
        bounds='.editor'
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        > 
      </ReactQuill>
      <button className='submit' onClick={handleSubmit} disabled={!userAuthorized}>{userAuthorized ? 'Submit' : 'Please login'}</button>
    </section>
  )
}

export default Editor

const placeholder = `Please use H1 for story's title\n
Supported images types: *.png, *.jpeg. Others will be ignored\n
Story has to be at least of 800 characters long ~ 1 min read
`

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['image'],
    
  ],
  clipboard: {
    matchVisual: false,
  },
}

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 
  'list', 'bullet', 'indent',
  'image'
]
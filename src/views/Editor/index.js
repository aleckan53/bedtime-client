import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = props => {

  const [state, setState] = useState('')

  const handleChange = (value) => {
    setState(value)
  } 

  return (
    <>
      <ReactQuill 
        theme='snow'
        value={state} 
        onChange={handleChange}/>
    </>
  )
}

export default Editor
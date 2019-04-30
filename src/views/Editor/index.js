import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'

const Editor = props => {

  const [state, setState] = useState('')

  const handleChange = (value) => {
    setState(value)
  } 

  return (
    <section>
      <ReactQuill 
        theme='snow'
        value={state}
        onChange={handleChange}/>
    </section>
  )
}

export default Editor
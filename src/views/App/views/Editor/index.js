import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'

const Editor = props => {

  const [state, setState] = useState('')

  const handleChange = (value) => {
    setState(value)
  } 

  const handleSubmit = () => {
    // Api submit
    // on succcess message
    console.log(state)
  }

  return (
    <>
      <section className='editor'>
        <ReactQuill 
          theme='snow'
          value={state}
          onChange={handleChange}/>
      </section>
      <button className='submit' onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Editor
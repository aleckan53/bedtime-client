import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const Editor = props => {

  const [state, setState] = useState({
    html: '',
    error: null,
  })

  const handleChange = html => {
    setState({ ...state, html })
  }

  return (
    <section className='Editor'>
      <ReactQuill
        theme='bubble'
        onChange={handleChange}
        value={state.html}
        bounds='.editor'
        style={{
          border: '1px solid white',
          color: 'white',
          cursor: 'text'
        }}
        // modules={modules}
        // formats={formats}
        // placeholder='Hello'
        />
    </section>
  )
}

export default Editor


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
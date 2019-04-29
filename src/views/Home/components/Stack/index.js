import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Item from './components/Item'

const Stack = props => {

  const [state, setState] = useState([])

  useEffect(() => {
    setState(props.data)
  }, [props.data])

  const stories = state.map((story, idx) => {
    return <Item key={idx} {...story}/>
  })

  const handleNext = () => {
    setState([...state.slice(1), state[0]])
  }

  const handlePrev = () => {
  }

  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.Stack}>
        {stories}
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Stack
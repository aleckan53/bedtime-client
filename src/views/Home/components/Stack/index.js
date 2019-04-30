import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Item from './components/Item'
import { 
  FaSearch as Icon,
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"

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
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.title}</h1>
        <Icon/>
      </div>
      <div className={styles.Stack}>
        {stories}
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev}><Left/></button>
        <span>........</span>
        <button onClick={handleNext}><Right/></button>
      </div>
    </div>
  )
}

export default Stack
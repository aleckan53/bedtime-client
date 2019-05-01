import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Item from './components/Item'
import Animate from './animations'
import { 
  FaSearch as Icon,
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"

const Stack = props => {

  const [state, setState] = useState([])
  const [diableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    setState(props.data)
  }, [props.data])

  const handleNext = () => {
    Animate.NextCard(props.stackId, state, setState, setDisableBtn)
  }

  const handlePrev = () => {
    Animate.PrevCard(props.stackId, state, setState, setDisableBtn)
  }

  const stories = state.map((story, idx) => (
    <Item key={idx} {...story} num={idx} stackId={props.stackId}/>
  ))

  const indicators = new Array(state.length)
    .fill(5)
    .map((s, i) => (
      <span 
        key={i} 
        id={`${props.stackId}dot${i}`} 
        className={`${styles.dot} ${!i ? styles.active : ''}`}/>
    ))
    
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
        <button onClick={handlePrev} disabled={diableBtn}>
          <Left/>
        </button>
          <div className={styles.dotsWrapper}>
            {indicators}
          </div>
        <button onClick={handleNext} disabled={diableBtn}>
          <Right/>
        </button>
      </div>
    </div>
  )
}

export default Stack


  // const incIndex = (idx, setIdx, items) => {
  //   if(idx === (items.length-1)) {
  //     setIdx(0)
  //   } else {
  //     setIdx(idx++)
  //   }
  // }

  // const decIndex = (idx, setIdx, items) => {
  //   if(!idx) {
  //     setIdx(items.length-1)
  //   } else {
  //     setIdx(idx--)
  //   }
  // }

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { 
  FaSearch as Icon,
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"


const Stack = props => {

  const [state, setState] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setState(props.data)
  }, [props.data])

  
  const makeStories = stories => {
    return stories.map((story, i) => {
      const getClass = (idx) => {
        if (idx === 0) {
          return `${styles.item} ${styles.itemFirst}`
        } 
        if (idx === 1) {
          return `${styles.item} ${styles.itemSecond}`
        }
        if (idx === 2) {
          return `${styles.item} ${styles.itemThird}`
        }
        return `${styles.item} ${styles.itemHidden}`
      }

      return (
        <li className={getClass(i)} id='story' style={{
          backgroundImage: `url(${story.link})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <h2>{story.name}</h2>
        <Link to={`/story/${story.id}`}>Read</Link>
      </li>
      )
    })
  }

  const handleNext = (i) => {
    const stack = document.getElementById('stack').childNodes
    stack[i].className = `${styles.item} ${styles.itemLeftHidden}`
    stack[i+1].className = `${styles.item} ${styles.itemFirst}`
    stack[i+2].className = `${styles.item} ${styles.itemSecond}`
    stack[i+3].className = `${styles.item} ${styles.itemThird}`
    setTimeout(() => {
      stack[i].className = `${styles.item}`
      stack[i+1].className = `${styles.item}`
      stack[i+2].className = `${styles.item}`
      stack[i+3].className = `${styles.item}`  
      const firstItem = state[0]
      const newState = state.slice(1)      
      setState([...newState, firstItem])
    }, 1000)

    setIndex(index +1)
  }
  const handlePrev = () => {

  }

  return (
    <div>
      <ul className={styles.stack} id='stack'>
        {makeStories(state)}
      </ul>
      <div className={styles.controls}>
        <button onClick={handlePrev}>
          <Left/>
        </button>
          <div className={styles.dotsWrapper}>
          </div>
        <button onClick={() => handleNext(index)}>
          <Right/>
        </button>
      </div>
    </div>
  )
}

export default Stack
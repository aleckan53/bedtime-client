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
  const [diableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    setState(props.data)
  }, [props.data])

  const stories = state.map((story, idx) => {
    return <Item key={idx} {...story} num={idx} stackId={props.stackId}/>
  })

  const handleNext = (e) => {
    e.preventDefault()
    setDisableBtn(true)
    const firstCard = document.getElementById(`${props.stackId}-card-${0}`)
    const secondCard = document.getElementById(`${props.stackId}-card-${1}`)
    const thirdCard = document.getElementById(`${props.stackId}-card-${2}`)

    // #1 Hide first card
    firstCard.style.transition ='all .3s ease'
    firstCard.style.left = '-100%'
    firstCard.style.zIndex = '5'
    
    // #2 Move forward second card
    secondCard.style.transition ='all .3s ease'
    secondCard.style.left = '0'
    secondCard.style.transform = 'scale(1,1)'
    secondCard.style.zIndex = '4'

    // #3 Move forward third card
    thirdCard.style.transition ='all .3s ease'
    thirdCard.style.left = '15%'
    thirdCard.style.transform = 'scale(.9,.9)'
    thirdCard.style.zIndex = '3'

    // #4 push first card to back to the state
    setTimeout(() => {
      setDisableBtn(false)
      // #5 reset css
      firstCard.style.transition ='none 0s ease'
      firstCard.style.left = '0'
      firstCard.style.transform = 'scale(1,1)'
      firstCard.style.zIndex = '4'

      secondCard.style.transition ='none 0s ease'
      secondCard.style.left = '15%'
      secondCard.style.transform = 'scale(.9,.9)'
      secondCard.style.zIndex = '3'

      thirdCard.style.transition ='none 0s ease'
      thirdCard.style.left = '30%'
      thirdCard.style.transform = 'scale(.8,.8)'
      thirdCard.style.zIndex = '2'

      const newState = state
      const firstItem = newState.shift()
      setState([...newState, firstItem])
    }, 300)
  }

  const handlePrev = () => {



    setState([state.pop(), ...state.slice(0, state.length)])
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
        <button onClick={handlePrev} ><Left/></button>
        <span>........</span>
        <button onClick={handleNext} disabled={diableBtn}><Right/></button>
      </div>
    </div>
  )
}

export default Stack
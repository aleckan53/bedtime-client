import React from 'react'
import Card from './components/Card'
import Service from './service'
import Swipe from 'react-easy-swipe'
import './styles.css'
import { 
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"


const Stack = props => {

  return (
    <Swipe
      onSwipeRight={() => Service.handlePrev(props.title)}
      onSwipeLeft={() => Service.handleNext(props.title)}
      tolerance={100}
    >
      <div className='stack'>
      <div className='top'>
        <h1>{props.title}</h1>
        <div className='controls'>
          <button onClick={() => Service.handlePrev(props.title)}>
            <Left/>
          </button>
          <div className='dots' id={props.title + '-dots'}>
            {Service.mapIndicators(props.data.length, props.title)}
          </div>
          <button onClick={() => Service.handleNext(props.title)}>
            <Right/>
          </button>
      </div>
        </div>
        <ul className='deck' id={props.title}>
          {Service.mapStories(props.data, Card)}
        </ul>
      </div>
    </Swipe>
  )
}

export default Stack

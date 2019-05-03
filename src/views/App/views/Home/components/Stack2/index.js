import React from 'react'
import Card from './components/Card'
import Service from './service'
import './styles.css'
import { 
  FaSearch as Icon,
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"


const Stack = props => {

  return (
    <div className='stack'>
      <ul className='deck' id={props.title}>
        {Service.mapStories(props.data, Card)}
      </ul>
      <div className='controls'>
        <button onClick={() => Service.handlePrev(props.title)}>
          <Left/>
        </button>
        <button onClick={() => Service.handleNext(props.title)}>
          <Right/>
        </button>
      </div>
    </div>
  )
}

export default Stack

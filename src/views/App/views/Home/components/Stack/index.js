import React from 'react'
import Card from './components/Card'
import Service from './service'
import './styles.css'
import { 
  FaArrowLeft as Left,
  FaArrowRight as Right, 
} from "react-icons/fa"


const Stack = props => {

  return (
    <div className='stack'>
      <h1>{props.title}</h1>
      <ul className='deck' id={props.title}>
        {Service.mapStories(props.data, Card)}
      </ul>
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
  )
}

export default Stack

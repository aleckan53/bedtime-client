import React from 'react'
import Slider from './components/Slider'

const Home = props => {
  return (
    <section>
      Home
      <Slider
        data={props.stories}
      />
    </section>
  )
}

export default Home
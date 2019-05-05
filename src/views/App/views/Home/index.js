import React from 'react'
import Stack from './components/Stack'

const Home = props => {

  return (
    <section>
      <Stack data={props.stories} title='Top Rated'/>
      <Stack data={props.stories} title='New release'/>
    </section>
  )
}

export default Home
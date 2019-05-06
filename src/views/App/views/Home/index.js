import React from 'react'
import Stack from './components/Stack'
import './index.css'

const Home = props => {

  const topRated = props.stories.filter(s => s.rating > 4) || []
  const newRelease = props.stories.filter(s => s.rating < 4) || []
  
  return (
    <section className='Home'>
      <Stack data={topRated} title='Top Rated' rating={4}/>
      <Stack data={newRelease} title='New release' rating={0}/>
    </section>
  )
}

export default Home
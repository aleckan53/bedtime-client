import React from 'react'
import styles from './styles.module.css'
import Stack from './components/Stack'

const Home = props => {

  return (
    <section className={styles.Home}>
      <Stack data={props.stories} title='Top Rated'/>
      <Stack data={props.stories} title='New release'/>
      <Stack data={props.stories} title='Staff pick'/>
    </section>
  )
}

export default Home
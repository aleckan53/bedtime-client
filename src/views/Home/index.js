import React from 'react'
import styles from './styles.module.css'
import Stack from './components/Stack'

const Home = props => {

  return (
    <section className={styles.Home}>
      <Stack data={props.stories} title='Trending'/>
    </section>
  )
}

export default Home
import React from 'react'
import styles from './styles.module.css'
import Stack from './components/Stack'

const Home = props => {

  return (
    <section className={styles.Home}>
      <Stack data={props.stories} title='Top Rated' stackId={1}/>
      {/* <Stack data={props.stories} title='New release' stackId={2}/> */}
    </section>
  )
}

export default Home
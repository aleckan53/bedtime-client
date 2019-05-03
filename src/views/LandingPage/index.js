import React from 'react'
import styles from './styles.module.css'

const LandingPage = () => {

  return (
    <div className={styles.LandingPage}>
    <header className={styles.header}>
      <div className={styles.clouds}></div>
      <div className={styles.clouds}></div>
      <div className={styles.stars}></div>
      <div className={styles.ufo}></div>
    </header>

    <main className={styles.main}>
      <div className={styles.logo}></div>
      <section></section>
    </main>
    </div>
  )
}

export default LandingPage
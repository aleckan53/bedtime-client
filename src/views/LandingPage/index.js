import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { IoIosLogIn as Login } from 'react-icons/io'

const LandingPage = () => {

  const userAuthorized = !!window.sessionStorage.getItem('bedtime_app')
  const path = userAuthorized ? '/app' : '/app/auth'

  return (
    <div className={styles.LandingPage}>
    <Link to={path} className={styles.topBtn}><Login/></Link>
    <header className={styles.header}>
      <div className={styles.clouds}></div>
      <div className={styles.clouds}></div>
      <div className={styles.stars}></div>
      <div className={styles.ufo}></div>
    </header>
    <main className={styles.main}>
      <h1>Bedtime</h1>
      <section>
        <h2>The best collection of kids stories</h2>
        <div className={styles.slides}>
        </div>
      </section>
      <section>
        <h2>Become an author</h2>
        <p>With Bedtime you can make up your own stories and share them with others</p>
      </section>
      <section>
        <h2>Interactive stories</h2>
        <p>Coming soon *</p>
        <h3>The same story is never the same</h3>
        <p>You decide how the story ends</p>
      </section>
      <section>
        <h2>Voice over</h2>
        <p>Coming soon *</p>
        <h3>Let Bedtime read a story for you! Try out our Voice Over feature</h3>
        <p></p>
      </section>
      <Link to='/app/auth'>Login / Signup</Link>
    </main>
    </div>
  )
}

export default LandingPage
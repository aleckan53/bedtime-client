import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { IoIosLogIn as Login } from 'react-icons/io'
import config from 'config'

const LandingPage = () => {

  const userAuthorized = !!window.sessionStorage.getItem(config.TOKEN_NAME)
  const path = userAuthorized ? '/app' : '/app/auth'

  return (
    <div className={styles.LandingPage}>
      <header className={styles.header}>
        <div className={styles.clouds}></div>
        <div className={styles.clouds}></div>
        <div className={styles.stars}></div>
        <div className={styles.ufo}></div>
      </header>
      <main className={styles.main}>
        <h1>Bedtime</h1>
        <section>
          <h2>The best collection of kids stories.</h2>
          <div className={styles.mockup1}></div>
        </section>
        <section>
          <h2>Become an author</h2>
          <p>With Bedtime you can make up your own stories and share them with others.</p>
          <div className={styles.mockup3}></div>
        </section>
        <section>
        <h2>Upcoming features</h2><span className={styles.soon}>Coming soon *</span>
          <ul>
            <li>
              <h3>Interactive stories</h3>
              <p>The same story will never be the same. Choosing characters answers, deciding what they should do, there can be different endings!</p>
            </li>
            <li>
              <h3>Voice Over</h3>
              <p>Bedtime can read a story for you!</p>
            </li>
          </ul>
        </section>
        <Link to={path} className={styles.botBtn}>{userAuthorized ? 'Open App' : 'Login / Signup'}</Link>
        <footer>
          <a href='https://github.com/olegakan/bedtime-client'>2019 Alec Kan</a>
        </footer>
      </main>
    </div>
  )
}

export default LandingPage
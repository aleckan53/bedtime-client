import React, { useState, useEffect } from 'react'
import Api from './api'
import styles from './styles.module.css'
import config from 'config'
import { Link } from 'react-router-dom'
import { 
  IoIosArrowUp as Up
} from 'react-icons/io'

const Story = props => {

  const hasToken = !!window.sessionStorage.getItem(config.TOKEN_NAME)
  const [story, setStory] = useState({content: ''})
  useEffect(() => {
    if(hasToken) {
      Api.getStoryById(props.match.params.id)
        .then(setStory)
    }

    return () => {
      setStory({})
    }
  }, [props.match.params.id, hasToken])

  const { link, name } = props.stories.find(s => s.id === Number(props.match.params.id)) || {
    link: '',
    name: ''
  }

  const calcReadTime = content => {
    return Math.ceil(content.length / 850)
  }

  return !hasToken ? (
    <section className={styles.unauth}>
      <h1>Please login or signup to read the story</h1>
      <div className={styles.imgWrapper}>
        <img src={link} alt={name}/>
        <h2>{name}</h2>
      </div>
      <div>
        <Link to='/app/auth'>Login / Signup</Link>
        <Link to='/app/home'>Back to home page</Link>
      </div>
    </section>
    ) : (
    <section className={styles.Story}>
      <button className={styles.up} onClick={() => {
          window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          })
        }}>
        <Up/>
      </button>
      <div className={styles.top}>
        <p>{calcReadTime(story.content)} min read time</p>
        <h3>Author: {story.author}</h3>
      </div>
      <h1>{story.name}</h1>
      <div dangerouslySetInnerHTML={{__html: story.content}}>
      </div>
    </section>
    )
}

export default Story
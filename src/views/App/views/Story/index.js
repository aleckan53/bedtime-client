import React, { useState, useEffect } from 'react'
import Api from './api'
import styles from './styles.module.css'
import config from 'config'
import { Link } from 'react-router-dom'

const Story = props => {

  const [story, setStory] = useState({})

  useEffect(() => {
    Api.getStoryById(props.match.params.id)
      .then(setStory)
    return () => {
      setStory({})
    }
  }, [props.match.params.id])

  const { link, name } = props.stories.find(s => s.id === Number(props.match.params.id)) || {
    link: '',
    name: ''
  }
  const hasToken = !!window.sessionStorage.getItem(config.TOKEN_NAME)
  return !hasToken ? (
    <section className={styles.unauth}>
      <h1>Please login or signup to read the story</h1>
      <img src={link} alt={name}/>
      <div>
        <Link to='/auth'>Login / Signup</Link>
        <Link to='/home'>Back to home page</Link>
      </div>
    </section>
    ) : (
    <section className={styles.Story}>
      <p>Estimated read time: {`1 min`}</p>
      <h1>{story.name}</h1>
      <h3>Written by: {story.author}</h3>
      <div dangerouslySetInnerHTML={{__html: story.content}}>
      </div>
    </section>
    )
}

export default Story
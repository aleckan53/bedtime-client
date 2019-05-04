import React, { useState, useEffect } from 'react'
import Api from './api'
import styles from './styles.module.css'
import config from 'config'
import { Link } from 'react-router-dom'
import { 
  IoIosBookmark as Bmrk,
  IoIosVolumeHigh as Voice,
  IoMdSunny as Light,
  IoIosMoon as Dark
} from 'react-icons/io'

const Story = props => {

  const [story, setStory] = useState({content: ''})

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

  const calcReadTime = content => {
    return Math.ceil(content.length / 850)
  }

  return !hasToken ? (
    <section className={styles.unauth}>
      <h1>Please login or signup to read the story</h1>
      <img src={link} alt={name}/>
      <div>
        <Link to='/app/auth'>Login / Signup</Link>
        <Link to='/app/home'>Back to home page</Link>
      </div>
    </section>
    ) : (
    <section className={styles.Story}>
      <div className={styles.controls}>
        <Light/>
        <Dark/>
        <Voice/>
        <Bmrk/>
      </div>
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
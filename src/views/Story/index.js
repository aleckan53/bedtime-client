import React, { useState, useEffect } from 'react'
import Api from './api'
import styles from './styles.module.css'
const Story = props => {

  const [story, setStory] = useState({})

  useEffect(() => {
    Api.getStoryById(props.match.params.id)
      .then(setStory)
    return () => {
      setStory({})
    }
  }, [props.match.params.id])

  return (
    <div className={styles.Story}>
      <h1>{story.name}</h1>
      <h3>Written by: {story.author}</h3>
      <div dangerouslySetInnerHTML={{__html: story.content}}>
      </div>
    </div>
  )
}

export default Story
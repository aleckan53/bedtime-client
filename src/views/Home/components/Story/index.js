import React, { useState, useEffect } from 'react'
import Api from './api'

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
    <div>
      <h1>{story.name}</h1>
      <h3>Written by: {story.author}</h3>
      <div>
        {story.content}
      </div>
    </div>
  )
}

export default Story
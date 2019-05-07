import React from 'react'

const NotFound = () => {

  return (
    <div style={{
      display: 'grid',
      placeItems: 'center'
    }}>
      <h1 style={{
        textAlign: 'center',
        margin: '10rem',
      }}>
      404. The page you requested doesn't exist. Please go back and retry.
      </h1>
    </div>
  )
}

export default NotFound
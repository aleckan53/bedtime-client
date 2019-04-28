import React from 'react'
import { Route as StandardRoute } from 'react-router-dom'

const Route = props => {
  return (
    <StandardRoute
      path={props.path}
      render={routerProps => (
        <props.component 
          {...routerProps}
          {...props}
        />
      )}
    />
  )
}

export default Route
import React, { useEffect, useState } from 'react'
import Api from './api'
import { Home, Editor, Story, Authorization } from 'views'
import { Switch } from 'react-router-dom'
import { Route, Nav } from 'components/index'


const App = props => {
  const [state, setState] = useState([])

  useEffect(() => {
    Api.getStoriesList()
      .then(setState)
  }, [])
  
  return (
    <div className='App'>
      <Nav/>
      <main>
        <Switch>
          <Route path='/auth' component={Authorization}/>
          <Route path='/editor' component={Editor}/>
          <Route path='/home' component={Home} stories={state}/>
          <Route path='/story/:id' component={Story} stories={state}/>
        </Switch>
      </main>
    </div>
  )
}

export default App

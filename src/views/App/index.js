import React, { useEffect, useState } from 'react'
import Api from './api'
import { Home, Editor, Story, Authorization } from './views'
import { Switch } from 'react-router-dom'
import { Route, Nav } from './components'
import LandingPage from 'views/LandingPage'
import NotFound from './components/NotFound'


const App = props => {
  const [state, setState] = useState([])

  useEffect(() => {
    Api.getStoriesList()
      .then(setState)
  }, [])
  
  return (
    <div className='App'>
      <Route path='/app' component={Nav}/>
      <main>
        <Switch>
          <Route path='/app/story/:id' component={Story} stories={state}/>
          <Route path='/app/auth' component={Authorization}/>
          <Route path='/app/editor' component={Editor}/>
          <Route path='/app' component={Home} stories={state}/>
          <Route exact path='/' component={LandingPage}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </div>
  )
}

export default App

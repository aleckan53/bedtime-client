import React, { useEffect, useState } from 'react'
import Api from './api'
import { Home, Editor } from 'views'
import { Switch } from 'react-router-dom'
import { Route, NavBar } from 'components/index'
import Story from 'views/Home/components/Story'


const App = props => {
  const [state, setState] = useState([])

  useEffect(() => {
    Api.getStoriesList()
      .then(setState)
  }, [])

  return (
    <div className='App'>
      <NavBar/>
      <main>
        <Switch>
          <Route path='/editor' component={Editor}/>
          <Route path='/home' component={Home} stories={state}/>
          <Route path='/story/:id' component={Story}/>
        </Switch>
      </main>
    </div>
  )
}

export default App

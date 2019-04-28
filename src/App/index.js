import React, { useEffect, useState } from 'react'
import Api from './api'
import { Home } from 'views'
import { Switch } from 'react-router-dom'
import { Route, NavBar } from 'components/index'


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
          <Route path='/home' component={Home} stories={state}/>
        </Switch>
      </main>
    </div>
  )
}

export default App

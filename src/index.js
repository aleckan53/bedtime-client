import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from './views/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'views/LandingPage'
import { ThemeProvider } from './context/Theme'

ReactDOM.render(
    <ThemeProvider>
      <Router>
        <Route path='/app' component={App}/>
        <Route exact path='/' component={LandingPage}/>
      </Router>
    </ThemeProvider>,
  document.getElementById('root'))

serviceWorker.unregister()

import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'views/App/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/Theme'

ReactDOM.render(
    <ThemeProvider>
      <HashRouter>
        <App/>
      </HashRouter>
    </ThemeProvider>,
  document.getElementById('root'))

serviceWorker.unregister()

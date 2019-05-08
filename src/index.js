import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'components/App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/Theme'

ReactDOM.render(
    <ThemeProvider>
      <HashRouter>
        <App/>
      </HashRouter>
    </ThemeProvider>,
  document.getElementById('root'))

serviceWorker.unregister()

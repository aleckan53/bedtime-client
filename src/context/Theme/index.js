import React, { useEffect, useState } from 'react'
import styles from './styles'

const ThemeContext = React.createContext({
  light: false,
  toogle: () => {}
})

export default ThemeContext

export const ThemeProvider = props => {
  const [state, setState] = useState({
    light: false,
  })

  useEffect(() => {
    console.log('asd')
    const currentLight= window.localStorage.getItem('bedtime-theme-light') === 'true'
    setState({...state, light: currentLight})

    if(state.light) {
      applyTheme(styles.dark)
    } else {
      applyTheme(styles.light)
    }
  // eslint-disable-next-line
  }, [state.light])

  const applyTheme = colors => {
    const style = Object.values(colors).join(';')
    document.getElementsByTagName('html')[0].style.cssText = style
  }

  const toggle = () => {
    setState({...state, light: !state.light})
    window.localStorage.setItem('bedtime-theme-light', !state.light)
  }

  return (
    <ThemeContext.Provider value={{
      light: state.light,
      toggle
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
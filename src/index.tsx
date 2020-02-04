import { hot } from 'react-hot-loader' // react-hot-loader before react and react-dom, see https://github.com/gaearon/react-hot-loader#getting-started
import React from 'react'
import ReactDOM from 'react-dom'
import { loadTheme } from 'office-ui-fabric-react/lib/Styling'
import * as serviceWorker from './serviceWorker'
import App from './App'

import './index.less'

loadTheme({
  defaultFontStyle: {
    fontFamily: 'Alata, Alata-Regular',
    color: 'white'
  },
  palette: {
    themePrimary: '#DBDBDB',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#FFFFFF',
    themeSecondary: '#E0E0E0',
    themeDarkAlt: '#E0E0E0',
    themeDark: '#E0E0E0',
    themeDarker: '#939496',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
})

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<App/>, document.getElementById('root'))
} else {
  const HotApp = hot(module)(App)
  ReactDOM.render(<HotApp/>, document.getElementById('root'))
}

if (!DEBUG) {
  serviceWorker.register()
}

import { hot } from 'react-hot-loader' // react-hot-loader before react and react-dom, see https://github.com/gaearon/react-hot-loader#getting-started
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.less'
import App from './App'

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(<App/>, document.getElementById('root'))
} else {
  const HotApp = hot(module)(App)
  ReactDOM.render(<HotApp/>, document.getElementById('root'))
}

if (!DEBUG) {
  serviceWorker.register()
}

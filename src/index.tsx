import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
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

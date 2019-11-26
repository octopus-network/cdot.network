import React from 'react'
import { initializeIcons } from '@uifabric/icons'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '~view/Home'

// tip: load fabric icons
initializeIcons()

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

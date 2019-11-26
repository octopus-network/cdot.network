import React from 'react'
import { initializeIcons } from '@uifabric/icons'
import { imported } from 'react-imported-component/macro'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

// tip: load fabric icons
initializeIcons()

const asyncComponentFactory = (resolve: () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>) =>
  imported(resolve)

const HomePage = asyncComponentFactory(() => import('./views/Home'))

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

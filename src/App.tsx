import React from 'react'
import importedComponent from 'react-imported-component'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const asyncComponentFactory = (resolve: () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>) =>
  importedComponent(resolve)

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

import React from 'react'
import { AsyncComponentProvider, asyncComponent } from 'react-async-component'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const asyncComponentFactory = (resolve: () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>) =>
  asyncComponent({
    resolve
  })

const HomePage = asyncComponentFactory(() => import('./views/Home'))

const App: React.FC = () => {
  return (
    <AsyncComponentProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </AsyncComponentProvider>
  )
}

export default App

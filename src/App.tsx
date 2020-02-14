import React from 'react'
import importedComponent from 'react-imported-component'
import { Provider } from 'mobx-react'
import { initializeIcons } from '@uifabric/icons'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { store } from '~store'

const asyncComponentFactory = (resolve: () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>) =>
  importedComponent(resolve)

const HomePage = asyncComponentFactory(() => import('~view/Home'))
const ContactPage = asyncComponentFactory(() => import('~view/Contact'))

// tip: load fabric icons
initializeIcons()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/contact' component={ContactPage}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App

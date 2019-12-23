import React from 'react'
import { initializeIcons } from '@uifabric/icons'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import HomePage from '~view/Home'
import ContactPage from '~view/Contact'

// tip: load fabric icons
initializeIcons()

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import React from 'react'
import { Route, Router } from 'react-router-dom'

import './App.css'
import Routes from './Routes'
import RootStore from 'Stores/root'
// import Label from './stores/label'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const rootStore = new RootStore()

// const label = new Label()

class App extends React.Component {
  public render() {
    return (
      <Provider root={rootStore} layout={rootStore.layout}>
        <Router history={history}>
          <Route component={Routes} />
        </Router>
      </Provider>
    )
  }
}

export default App
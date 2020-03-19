import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import React from 'react'
import { Route, Router } from 'react-router-dom'

import './App.css'
import Routes from './Route'
import RootStore from 'Store/root'
// import Label from './stores/label'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const rootStore = new RootStore()

// const label = new Label()

class App extends React.Component {
  componentDidMount() {
    rootStore.load()
  }
  public render() {
    return (
      <Provider account={rootStore.account} layout={rootStore.layout} content={rootStore.content}>
        <Router history={history}>
          <Route component={Routes} />
        </Router>
      </Provider>
    )
  }
}

export default App
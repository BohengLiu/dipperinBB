import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@containers/home'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    )
  }
}

export default Routes

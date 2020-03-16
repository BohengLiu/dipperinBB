import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from 'Pages/home'
import Article from 'Pages/ariticle'

class Routes extends React.Component<RouteComponentProps> {
  // constructor(props) {
  //   super(props)
  //   this.props.history.push('/article')
  // }
  render() {
    const { location } = this.props

    return (
      <Switch location={location}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/article/" exact={false} component={Article} />
      </Switch>
    )
  }
}

export default withRouter(Routes)

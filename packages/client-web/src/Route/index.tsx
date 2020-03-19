import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from 'Page/home'
import Article from 'Page/ariticle'
import LoginModal from 'Container/LoginModal'
import { observer, inject } from 'mobx-react'
import LayoutStore from 'Store/layout'
import AccountStore from 'Store/account'

interface Props extends RouteComponentProps {
  layout: LayoutStore
  account: AccountStore
}
@inject('layout','account')
@observer
class Routes extends React.Component<Props> {
  // constructor(props) {
  //   super(props)
  //   this.props.history.push('/article')
  // }
  handleCloseLoginMoadal = () => {
    this.props.layout.setIfShowLoginModal(false)
  }
  render() {
    const { location, layout } = this.props

    return (
      <>
        <Switch location={location}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/article/" exact={false} component={Article} />
        </Switch>
        <LoginModal
          visiable={layout.ifShowLoginModal}
          onCancel={this.handleCloseLoginMoadal}
          onConfirm={(u: string, d: string) => Promise.resolve()}
          account={this.props.account}
        />
      </>
    )
  }
}

export default withRouter(Routes)

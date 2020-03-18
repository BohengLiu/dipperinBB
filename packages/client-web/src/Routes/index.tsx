import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from 'Pages/home'
import Article from 'Pages/ariticle'
import LoginModal from 'Containers/LoginModal'
import { observer, inject } from 'mobx-react'
import LayoutStore from 'Stores/layout'
import AccountStore from 'Stores/account'

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
          onLogin={this.props.account.login}
          onRegister={this.props.account.register}
          visiable={layout.ifShowLoginModal}
          onCancel={this.handleCloseLoginMoadal}
          onConfirm={(u: string, d: string) => Promise.resolve()}
        />
      </>
    )
  }
}

export default withRouter(Routes)

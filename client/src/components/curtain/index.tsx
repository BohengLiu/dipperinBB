import React from 'react'
import './index.less'

class Curtain extends React.Component {
  render() {
    return (
      <div className="curtain">
        {this.props.children}
        <div className="to-top" />
      </div>
    )
  }
}

export default Curtain
import React from 'react'

interface Props {
  header: React.ReactNode
  footer: React.ReactNode
}

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}
const headerStyle: React.CSSProperties = {
  width: '100%',
}
const mainStyle: React.CSSProperties = {
  width: '100%',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}
const footerStyleStyle: React.CSSProperties = {
  width: '100%',
}

class SoloColumnLayout extends React.PureComponent<Props> {
  render() {
    return (
      <div style={containerStyle}>
        <div style={headerStyle}>{this.props.header}</div>
        <div style={mainStyle}>{this.props.children}</div>
        <div style={footerStyleStyle}>{this.props.footer}</div>
      </div>
    )
  }
}

export default SoloColumnLayout

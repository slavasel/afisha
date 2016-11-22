import 'babel-polyfill'
import React from 'react'
import Landing from './Landing'

import './app_styles.scss'

class App extends React.Component {
  render() {
    return (
        <Landing globalConfig={this.props.globalConfig}/>
    )
  }
}

module.exports = App
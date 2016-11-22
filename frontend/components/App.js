import 'babel-polyfill'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from './Landing'
import Test from './Test'

import './app_styles.scss'

const Root = props => (props.children);

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Landing} />
          <Route path="/afisha/test" component={Test} />
        </Route>
      </Router>
    )
  }
}

module.exports = App
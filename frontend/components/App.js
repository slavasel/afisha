import 'babel-polyfill'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from '../containers/Landing'
import Favorites from '../containers/Favorites'
import Detail from '../containers/Detail'

const Root = props => (props.children);

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Landing} />
          <Route path="/afisha/:id" component={Detail} />
          <Route path="/favorites" component={Favorites} />
        </Route>
      </Router>
    )
  }
}

module.exports = App
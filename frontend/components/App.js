import 'babel-polyfill'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from '../containers/Landing'
import Favorites from '../containers/Favorites'
import Detail from '../containers/Detail'
import Search from '../containers/Search'
import linkHelper from '../utils/link.js';

const Root = props => (props.children);

class App extends React.Component {
  render() {
    const searchLink = "/search" + linkHelper.getSearchLink();

    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Landing} />
          <Route path={searchLink}
                 component={Search} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/favorites" component={Favorites} />
        </Route>
      </Router>
    )
  }
}

module.exports = App
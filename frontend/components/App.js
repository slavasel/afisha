import React from 'react'
import Header from './header'
import Footer from './footer'
import './app_styles.scss'
import globalConfig from '../globalConfig.json';

class App extends React.Component {
  render() {
    return (
        <div>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    <Header projectName={globalConfig.projectName} />
                </div>
            </nav>

          <div class="jumbotron">
              <div class="container">
                  <h1>Hello, world!</h1>
                  <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
              </div>
          </div>

          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                  </div>
                  <div class="col-md-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                  </div>
                  <div class="col-md-4">
                      <h2>Heading</h2>
                      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                      <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                  </div>
              </div>

              <hr />

              <Footer projectName={globalConfig.projectName}/>
            </div>
        </div>
    )
  }
}

module.exports = App
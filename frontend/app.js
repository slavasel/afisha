import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import afishaApp from './reducers'
import App from './components/App.js'

import globalConfig from './globalConfig.json';
const loggerMiddleware = createLogger();

let store = createStore(afishaApp,
						globalConfig.reduxDebug
							? applyMiddleware(
								thunkMiddleware,
								loggerMiddleware
							)
							: applyMiddleware(thunkMiddleware)
);

render(
	<Provider store={store}>
		<App globalConfig={globalConfig}/>
	</Provider>,
    document.getElementById('app')
);
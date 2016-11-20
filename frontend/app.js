import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'
import apiClient from './apiClient.js'

// todo api client
apiClient.search();

render(
    <App />,
    document.getElementById('app')
);
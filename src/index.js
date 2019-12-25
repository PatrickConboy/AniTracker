/* Author: Patrick Conboy
 * Date Created: 10/20/2019
 * Description: This file serves as the index for the AniTracker
 * website.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import * as serviceWorker from './serviceWorker'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

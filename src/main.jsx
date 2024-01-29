import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App.jsx'

import './stylesheet/vars.css'
import './stylesheet/common.css'
// import './index.css'
import './i18n'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="uwaga-smartfon">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

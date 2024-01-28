import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import { ModalProvider } from './components/Modal/ModalProvider.jsx'

import './stylesheet/vars.css'
import './stylesheet/common.css'
import './i18n'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ContextGlobal  from './utils/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGlobal>
    <BrowserRouter>
          <App />
    </BrowserRouter>
    </ContextGlobal>
  </React.StrictMode>,
)

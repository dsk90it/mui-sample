import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'

import Home from './pages/Home.jsx'

const rootEl = ReactDOM.createRoot(document.getElementById('root'))
rootEl.render(
  <React.StrictMode>
    <CssBaseline />
    <Home />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import routes from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

import AuthProvidre from './Provider/AuthProvidre.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvidre>
      <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
  </AuthProvidre>
 
    
)

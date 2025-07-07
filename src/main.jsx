import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './route/index.jsx'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://web-production-ed1b4.up.railway.app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

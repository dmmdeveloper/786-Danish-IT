import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages/index.js';
import "@fortawesome/fontawesome-free/css/all.css";

const router = createBrowserRouter(
  createRoutesFromElements(<>
  <Route path='/' element={<Home/>} />
  </>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, Contact, Home, PageNotFound, Portfolio, Service } from './pages/index.js';
import "@fortawesome/fontawesome-free/css/all.css";

const router = createBrowserRouter(
  createRoutesFromElements(<>
  <Route  path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/services'  element={<Service/>} />
  <Route path='/portfolio' element={<Portfolio/>} />

  {/* 404 page */}
  <Route path='*' element={<PageNotFound/>} />
  </>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import Momento1 from './pages/Momento1.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar.tsx'

const router = createBrowserRouter([{
  path: '/',
  Component: Navbar,
  children:[{
    path: '',
    element: <Home></Home>
  }, {
    path: 'exploracion',
    element: <Momento1></Momento1>
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import Momento1 from './pages/Momento1.tsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar.tsx'
import Momento2 from './pages/Momento2.tsx'
import Momento3 from './pages/Momento3.tsx'
import FichaTecnica from './pages/FichaTecnica.tsx'

const router = createHashRouter([{
  path: '/',
  Component: Navbar,
  children:[{
    path: '',
    element: <Home></Home>
  }, {
    path: 'exploracion',
    element: <Momento1></Momento1>
  },{
    path:'profundizacion',
    element: <Momento2></Momento2>
  },{
    path: "transformacion",
    element: <Momento3></Momento3>
  },{
    path: "ficha-tecnica",
    element: <FichaTecnica></FichaTecnica>
  }
]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

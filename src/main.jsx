import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Myself from './components/Myself.jsx'
import Projects from './components/Projects.jsx'
import SkillsPage from './components/Skillspage.jsx'
import Contact from './components/Contact.jsx';
import './index.css'
import Layout from './Layout.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<About/>
      },
      {
        path:"/about",
        element:<Myself/>
      },
      {
        path:"/skills",
        element:<SkillsPage/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
         path:"contact",
         element:<Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

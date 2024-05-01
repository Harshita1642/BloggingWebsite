import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './Components/About.jsx'
import Login from './Components/Login.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import PostDetails from './Components/PostDetails.jsx'
import Postcreateform from './Components/Postcreateform.jsx'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:'/',
    element:<><App/></>
  },
  {
    path:'/app',
    element:<><App/></>
  },
  {
    path:"/about",
    element:<><Navbar/><About/><Footer /></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/PostDetails",
    element:<><Navbar /><PostDetails /><Footer /></>
  },
  {
    path: "/Postcreateform",
    element: <><Navbar /><Postcreateform /><Footer /></>
  }
      // {
      //   path:"",
      //   element:<Post/>
      // }

    
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

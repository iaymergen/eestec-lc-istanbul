
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Magazine from './pages/Magazine/Magazine';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import { useState } from 'react'




import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"

function App() {

  const Layout = () =>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        { 
          path: "/about",
          element: <About/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },
        {
          path: "/magazine",
          element: <Magazine/>
        },
        {
          path: "/team",
          element: <Team/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ]
    },

  
  ]);

  
  
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

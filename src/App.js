import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Navbar from './Components/Navbar'
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<>
      
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      </> 
    },
    {
      path: "/about",
      element: <>

<Home />
<About /> </>
      
    },
    {
      path: "/contact",
      element: 
      <>
      
      <Navbar/>
        <Contact />
      <Footer />
      </> 
    },
    {
      path: "/services",
      element:  <>

 
<Home title="Over Services" />
      <About />
      <Work />
      <Footer />
      </>

    },
  ])
  return (

    <>
   
    <RouterProvider router={router}>

    </RouterProvider>

   
    
    </>

  );
}

export default App;

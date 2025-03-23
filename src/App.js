import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import RedirectPage from "./pages/RedirectPage";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Navbar from './Components/Navbar';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        
          <Home />
          <About />
          <Work />
          <Testimonial />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
         
          <Home />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
        
          <Home title="Our Services" />
          <About />
          <Work />
          <Footer />
        </>
      ),
    },
    {
      path: "/redirect", // ✅ Add this new route
      element: <RedirectPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

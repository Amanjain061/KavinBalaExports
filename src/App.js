import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./components/home/Footer";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Products from "./pages/Product"
import Form from "./pages/form"

function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route  path="/" index element={<Home />} />
    {/* <Route path="/About" element={<About />}/> */}
    <Route path="/Products" index element={<Products />} />
    <Route path="/data" index element={<Form />} />

   </Routes>
  </BrowserRouter>

  );
}
export default App;
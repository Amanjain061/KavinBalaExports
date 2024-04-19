import React from "react";
import image from "../../images/Instagram.png"
import logo from "../../images/KAVIN BALA EXPORTS.png"
import image1 from "../../images/Facebook.png"
import { Outlet, Link } from "react-router-dom";
import Modal from "./Modal";
function Footer(){
    return(<div className="content-center lg:w-full mt-16">       
   <div className="lg:flex lg:flex-row lg:-mt-12">
        <div className="   ">
            <img className="w-20 mt-10 ml-40  lg:w-36 lg:ml-32" src={logo}></img>
            
            
        
        
         <p className="text-xs    ml-5 mt-2 mr-5 lg:text-xl lg:w-72 lg:mt-4 lg:ml-32 lg:mr-16">Kavin Bala Exports: Your gateway 
to premium spice import-export 
solutions. Explore our curated 
selection sourced from global 
markets, ensuring quality and 
authenticity in every spice journey.</p>
</div>
        <div className="flex flex-row ml-5 mt-10  ">




        <div className="mr-5 ml-5">
            <h1 className="text-sm font-bold lg:text-2xl">
            Explore
            </h1>
            
            <h2 className="text-xs mt-2 lg:text-lg"><Link to="/Products" onClick={window.screenTop} >Products</Link></h2>
        </div>





        <div className="ml-5  lg:ml-32 lg:mr-28">
             <h1 className="text-sm font-bold lg:text-2xl">
             Contact Us
            </h1>
            <h2 className="lg:text-lg"><a href="tel:+919344709123">9344709123</a></h2>
            <h2 className="text-xs lg:text-lg "><a href="mailTo:kavinbalaexports@gmail.com
">kavinbalaexports@gmail.com</a></h2>

        </div>






        <div className="mr-5 ml-5" >
             <h1 className="text-sm font-bold lg:text-2xl">
             Follow Us            </h1>
             <div className="flex mt-2 ">
             <img className="w-8 h-8 lg:mr-8" src={image}></img>
             <img  className="w-8 h-8" src={image1}></img>
             </div>
        </div>
        </div>
        </div>
        <div className="text-center mt-5">
        <h2 >Admin? <button style={{background: "none",
    border: "none",
    textDecoration:"underline"}}><Link to="/data">Login</Link></button></h2>
        </div>
        
        </div>

    );
}
export default Footer;
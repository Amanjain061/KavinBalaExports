import React, { useRef } from "react";
import "../cssfiles/Navbar.css"
import image  from "../images/Homehomelogo.png";
import image1 from "../images/Shopping Cartproducts.png";
import image2 from "../images/Phonelogo.png";
import image3 from "../images/KAVIN BALA EXPORTS.png"
import { Outlet, Link } from "react-router-dom";
function Nav(){
    const locate  = async()=>{
        window.scrollTo(0,document.body.scrollHeight);
    }
   
    return(
        <div>
       <div className="w-full">
        <div className="flex flex-row w-full ">
            <div >
         <img  className="w-44 h-4 mt-6 ml-5 lg:mr-96 lg:ml-4 lg:w-36 "src={image3}></img>
         </div>
        <div className="lg:ml-96">
            <ul className=" flex md:flex md:flex-grow flex-row-reverse  ml-20 mb-25 my-5 lg:flex-row-reverse  ">

            <li  className="mr-2 text-sm font-bold lg:text-xl lg:mr-4"  onClick={locate} >Contact</li>
            <li  className="mr-2 w-5 lg:w-5 lg:mt-2 lg:mr-2"> <img src={image2} ></img></li>
            <li className="mr-2 text-sm font-bold lg:text-xl lg:mr-4"><Link to="/Products" >Products</Link></li>
            <li className="mr-2 w-5 lg:mt-2 "> <img src={image1} ></img></li>
            <li className="mr-2 text-sm font-bold lg:text-xl lg:mr-4"><Link to="/" >Home</Link></li>
            <li className="mr-2 w-5 lg:mt-2 "> <img src={image} ></img></li>
            </ul>
        </div>
            
        </div>
       </div>
        {/* <div className="navbar">
        <img style={{width:"12%",height:"2.2rem",marginTop:"2%",marginRight:"54.8%"}} src={image3}></img>
        
        <h2 className="text">Home</h2>
        <img src={image1} className="image"></img>
        <Link to="/Products" style={{textDecoration:"none",marginRight:"2%"}}><h2 className="text">Products</h2></Link>
      
        <h2 className="text">Contact</h2>
        </div> */}
        </div>
    );
}
export default Nav;
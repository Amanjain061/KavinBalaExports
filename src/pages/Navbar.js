import React from "react";
import "../cssfiles/Navbar.css"
import image  from "../images/Homehomelogo.png";
import image1 from "../images/Shopping Cartproducts.png";
import image2 from "../images/Phonelogo.png";
import image3 from "../images/KAVIN BALA EXPORTS.png"
import { Outlet, Link } from "react-router-dom";
function Nav(){
    return(
        <div>
       
        <div className="navbar">
        <img style={{width:"12%",height:"2.2rem",marginTop:"2%",marginRight:"54.8%"}} src={image3}></img>
        <img src={image} className="image"></img>
        <h2 className="text">Home</h2>
        <img src={image1} className="image"></img>
        <Link to="/Products" style={{textDecoration:"none",marginRight:"2%"}}><h2 className="text">Products</h2></Link>
        <img src={image2} className="image"></img>
        <h2 className="text">Contact</h2>
        </div>
        </div>
    );
}
export default Nav;
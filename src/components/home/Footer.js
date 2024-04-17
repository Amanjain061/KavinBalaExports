import React from "react";
import image from "../../images/Instagram.png"
import image1 from "../../images/Facebook.png"
import { Outlet, Link } from "react-router-dom";
import Modal from "./Modal";
function Footer(){
    return(<div>        <div style={{display:"flex"}}>
        <div style={{ width:"20%",marginLeft:"5%"}}>
            <h2 style={{color:"#F58220"}}>
            KAVIN BALA<br />
EXPORTS
            </h2>
            <p style={{textAlign:"start"}}>Kavin Bala Exports: Your gateway 
to premium spice import-export 
solutions. Explore our curated 
selection sourced from global 
markets, ensuring quality and 
authenticity in every spice journey.</p>
        </div>






        <div style={{ width:"20%",marginLeft:"7.5%"}}>
            <h1>
            Explore
            </h1>
            <h2 style={{fontWeight:"normal"}}>About Us</h2>
            <h2 style={{fontWeight:"normal"}}>Products</h2>
        </div>





        <div style={{ width:"20%"}}>
             <h1>
             Contact Us
            </h1>
            <h2 style={{fontWeight:"normal"}}>kavinbalaexports@gmail.com</h2>
            <h2 style={{fontWeight:"normal"}}>9344709123</h2>
        </div>






        <div style={{ width:"20%",marginLeft:"8%"}}>
             <h1>
             Follow Us            </h1>
             <div style={{display:"flex"}}>
             <img style={{marginRight:"4%",width:"15%",height:"3rem"}} src={image}></img>
             <img  style={{marginRight:"4%",width:"15%",height:"3rem"}} src={image1}></img>
             </div>
        </div>
        </div>
        <div style={{textAlign:"center"}}>
        <h2>Admin? <button style={{background: "none",
    border: "none",
    textDecoration:"underline"}}><Link to="/data">Login</Link></button></h2>
        </div>
        
        </div>

    );
}
export default Footer;
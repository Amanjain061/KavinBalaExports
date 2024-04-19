import React from "react";
import Nav from "./Navbar";
import Ourproducts from "../components/Products/Ourproducts"
import Card from "../components/Products/Cards";
import Footer from "../components/home/Footer";

function About(){
    return (
        <div>
        <Nav />
        <Ourproducts />
        <Card /> 
        <Footer /> 
        
        </div>
    );
}
export default About;
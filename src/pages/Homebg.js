import React from "react";
import css from "../cssfiles/Home.css";
import image from "../images/homepagecontainer.jpg"
function Homebj(){
    return(
        <div>
        <div >
        
       <div> <img src={image} className="w-full h-40 lg:w-full lg:h-svh opacity-75"></img></div>
        <p className="absolute top-0 mt-24 ml-5 font-bold lg:text-7xl lg:top-40 ">From <span className="text-white">farm </span>to <span className="text-white">table</span> </p>
        <p className="absolute top-10 mt-20 ml-5 font-bold lg:text-7xl lg:top-64 ">our <span className="text-white">spices </span>travel the <span className="text-white">globe.</span> </p>
        <p className="absolute top-0  mt-36 font-bold ml-5 text-white lg:text-4xl lg:top-64 opacity-75	">Discover a faster way of shipping</p>
   
    </div>
       
        </div>
    );
}
export default Homebj;
import React from "react";
import css from "../../cssfiles/Home.css"
import image from "../../images/map.png"
function world(){
    return(
        <div>
        <div className="w-100 ml-1 mt-1 mr-1 h-2 bg-linecolor rounded-md	mt-5 lg:mt-20 lg:mb-20"></div>

        {/* <div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div> */}
        <div className="flex flex-row mt-10">
            <img style={{height:"60%",width:"55%"}} className="lg:ml-10" src={image}></img>
            <span>
            <h1 className="text-4xl ml-1 font-bold text-around lg:text-9xl">AROUND</h1>
            <h1 className="text-4xl ml-1 font-bold text-the lg:text-9xl">THE</h1>
            <h1 className="text-4xl ml-1 font-bold lg:text-9xl">WORLD</h1>
            </span>
        </div>
        <p className="text-xs ml-5 mr-5 lg:text-2xl lg:mt-10">Step into a world where spices ignite the senses, sourced from the corners of the globe. Our collection 
embodies the essence of diverse cultures, from the robust flavors of India to the aromatic blends of Morocco. 
With a dedication to quality and authenticity, we invite you to savor the richness of global cuisine through our 
meticulously curated selection. Let every sprinkle and dash be a journey of culinary exploration – welcome 
to our world of spices.</p>
<div className="w-100 ml-1 mt-1 mr-1 h-2 bg-linecolor rounded-md	mt-5 lg:mt-20 lg:mb-20"></div>

        </div>
    );
}
export default world;
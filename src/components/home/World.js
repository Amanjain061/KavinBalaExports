import React from "react";
import css from "../../cssfiles/Home.css"
import image from "../../images/map.png"
function world(){
    return(
        <div>
        <div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div>
        <div style={{
            marginTop:"8%",
            marginLeft:"1%",
            display:"flex",
            flexDirection:"row"
        }}>
            <img style={{height:"60%",width:"55%"}} src={image}></img>
            <span>
            <h1 style={{
               
                marginTop:"10%",
                marginLeft:"-10%",
                fontWeight:"900",
                fontSize:"7rem",
                // letterSpacing:"2rem",
                opacity:"33%",
            }}>AROUND</h1>
            <h1 style={{
               
               marginTop:"-20%",
               marginLeft:"43%",
               fontWeight:"900",
               fontSize:"7rem",
            //    letterSpacing:"2rem",
               opacity:"70%",
           }}>THE</h1>
            <h1 style={{
               
               marginTop:"-20%",
               marginLeft:"5%",
               fontWeight:"900",
               fontSize:"7rem",
            //    letterSpacing:"2rem",
             
           }}>WORLD</h1>
            </span>
        </div>
        <p style={{
            textAlign:"end",
          marginRight:"3%",
          width:"96%",
          fontSize:"1.8rem"
        }}>Step into a world where spices ignite the senses, sourced from the corners of the globe. Our collection 
embodies the essence of diverse cultures, from the robust flavors of India to the aromatic blends of Morocco. 
With a dedication to quality and authenticity, we invite you to savor the richness of global cuisine through our 
meticulously curated selection. Let every sprinkle and dash be a journey of culinary exploration – welcome 
to our world of spices.</p>
<div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div>

        </div>
    );
}
export default world;
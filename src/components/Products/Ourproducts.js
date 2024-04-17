import React from "react";
import image from "../../images/bigimage.png"
function Products(){
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <h1 style={{fontSize:"4rem"}}>
                    OUR PRODUCTS
                </h1>
                {/* <img src={image} style={{height:"40rem"}}></img> */}
                <p style={{marginLeft:"25%",width:"50%",fontSize:"1.5rem",marginTop:"5%"}}>Elevate your culinary creations with our premium selection of 
imported spices sourced from around the globe. Indulge your 
senses in a journey of exquisite flavors with our extensive 
range of imported spices, meticulously sourced from the 
world's finest regions. Elevate your culinary creations to new 
heights as you explore the rich aromas and vibrant hues of our 
premium selection. Whether you're seeking the subtle warmth 
of cinnamon or the bold kick of paprika, our diverse array 
caters to every palate and recipe. Discover the essence of 
culinary excellence with our top-quality spices, guaranteed to 
add depth and authenticity to your dishes.</p>
            </div>
            <div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div>

        </div>
    );
}
export default Products;
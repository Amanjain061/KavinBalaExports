import React from "react";
import image from "../../images/bigimage.png"
function Products(){
    return (
        <div>
            <div className="text-center lg:mt-8 lg:mb-8">
                <h1 className="text-2xl font-bold mt-5 pb-5 lg:text-4xl lg:mb-8">
                    OUR PRODUCTS
                </h1>
                {/* <img src={image} style={{height:"40rem"}}></img> */}
                <p className="text-sm ml-5 mr-5 lg:text-lg lg:ml-8 lg:mr-8">Elevate your culinary creations with our premium selection of 
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
            <div className="w-100 ml-1 mt-10 mb-10 mr-1 h-2 bg-linecolor rounded-md	mt-5 lg:mt-10"></div>

        </div>
    );
}
export default Products;
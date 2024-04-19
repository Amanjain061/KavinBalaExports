import React from "react";
import css from "../../cssfiles/Home.css"
import image from "../../images/ourprocesses.png"
function Ourprocess(){
    var count=0;
    return (
        <div className="mt-5 text-center lg:text-center">
        <h1 className="text-xl mt-8 mb-10  font-bold lg:text-4xl  ">
        
            OUR PROCESS
        </h1>
        <div className=" mr-8 w-64 ml-4 -mb-8 lg:w-60  lg:ml-96">
        <h1 className="text-lg font-semibold mb-1  ml-28 lg:text-xl  lg:ml-64 ">Shipping</h1>
        <p className="  text-xs ml-32  lg:text-base lg:w-full lg:ml-44" >ship our premium spices to destinations 
worldwide, ensuring that the flavors of 
exotic cuisines are accessible no matter 
                  where you are.</p>
        </div>
        <div className="flex">





        {/* left */}
        
        {/* style={{textAlign:"center",width:"20%",marginTop:"8%",marginRight:"2%"}} */}
        <div className="text-center w-28 ml-4 lg:w-60 lg:ml-52 lg:mr-12 lg:mt-20">
            <h1 className="text-lg font-semibold text-center lg:text-xl">Factory Verification</h1>
            <p className=" text-xs mb-1 text-start lg:text-lg lg:w-full lg:ml-4 ">Our factory verification process 
begins with a comprehensive 
evaluation of potential 
suppliers' facilities, focusing 
on factors such as hygiene 
standards, production 
capabilities.</p>

        
        <div className="ml-20 w-28 -mt-8 lg:w-60 lg:mt-12 lg:ml-32" >
            <h1 className="text-lg font-semibold lg:text-xl  ">Source</h1>
            <p className=" text-xs mb-1 text-start lg:text-lg lg:w-full lg:ml-4">Elevate your culinary creations with 
our virtual spice marketplace, offering
curated selections, expert recommendations.</p>
        </div>
        </div>






        {/* centre */}
        <img className="w-40 h-40 mt-10 lg:w-96 lg:h-96 "src={image}></img>
        <div style={{
            width:"30%"
        }}>







        {/* right */}
        {/* style={{textAlign:"center",width:"20%",marginTop:"8%",marginRight:"2%"}} */}
        <div className="lg:w-60 lg:mt-16 lg:ml-8 lg:mt-24">
            <h1 className="text-lg text-center font-semibold mb-1 lg:text-xl ">Customs Support</h1>
            <p className="w-30 text-xs mb-1 text-end lg:text-lg lg:w-full lg:ml-4">experienced customs support 
team navigates the complexities 
of international trade regulations 
      on your behalf.</p>

        </div>
        <div className="  w-32 mt-12 -ml-12 lg:w-60 lg:mt-24 lg:-ml-20">
            <h1 className="text-lg font-semibold lg:text-xl ">Client Strategy</h1>
            <p className="  text-xs  text-end lg:text-lg lg:w-full lg:ml-4">We believe in understanding the unique 
needs and preferences of each client to 
develop tailored import-export strategies.</p>
        </div>
        </div>
        </div>
        
           
            
       
        <div className="w-100 ml-1 mb-10 mt-1 mr-1 h-2 bg-linecolor rounded-md	mt-5 lg:mt-16 lg:mb-16"></div>

        </div>
    );
}
export default Ourprocess;
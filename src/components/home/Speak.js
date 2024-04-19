import React from "react";
import css from "../../cssfiles/Home.css"
import image from "../../images/Ringer Volume.png";
import image1 from "../../images/Place Marker.png";
import image2 from "../../images/iPhone SE.png";

function speak(){
    return(
        <div>
        <div className="bg-primary pb-12">
        <div className="flex flex-row lg:w-full" >
        <span className="mt-10  lg:w-64 lg:ml-32 text-center"><h1 className="text-lg font-semibold lg:text-3xl">Speak</h1>
     
        <p className="text-xs w-28 mt-5 lg:text-lg lg:w-full">Discuss your inquiries<br /><a href="tel:+919344709123"> call 9344709123</a> </p>
        <img  className="w-10 mt-6 ml-8 lg:ml-28 lg:mt-8 lg:w-16"src={image}></img>
        </span>
        <div className="w-2 h-25 mt-10 mb-5 mr-5 rounded-md bg-linecolor lg:ml-16"></div>
        <span className="mt-10 -ml-4 lg:w-64  lg:ml-20 text-center"><h1 className="text-lg font-semibold lg:text-3xl">Connect</h1>
        <p className="text-xs w-28 mt-5 lg:text-lg lg:w-full">32, I Street, Angalamman Nagar, <br></br>
Muthiyalpet, Puducherry - 3 </p>
        <img className="w-10 mt-3 ml-8 lg:mt-8 lg:ml-28 lg:w-16" src={image1}></img></span>
        <div className="w-2 h-25 mt-10 mb-5 mr-5 rounded-md bg-linecolor lg:ml-16"></div>
        <span className="mt-10 mr-5 lg:w-64 lg:ml-20  text-center"><h1 className="text-lg font-semibold lg:text-3xl">Write</h1>
        <p className="text-xs w-28 mt-5 lg:text-lg lg:w-full">Send a question/inquiry on <br /><a href="mailTo:kavinbalaexports@gmail.com
">kavinbalaexports@gmail.com</a></p>
<img  className="w-10 mt-3 lg:ml-28 ml-8 lg:w-16 lg:mt-8"  src={image2}></img></span>
        </div>

        </div>
        <div className="w-100 ml-1 mt-10 -mb-14 mr-1 h-2 bg-linecolor rounded-md	lg:mt-16 lg:mb-16"></div>

        </div>
    );
}
export default speak;
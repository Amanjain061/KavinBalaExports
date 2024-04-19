import React from "react";
import css from "../../cssfiles/Home.css"
import Servicescard from "./servicecard";
import Servicescard1 from "./Servicescard1";
import image from "../../images/Guarantee.png"
import image1 from "../../images/Rupee.png"
import image2 from "../../images/Green Earth.png"
function Whychosse(){
    return (
        <div >
        <div className="bg-primary ">
            <h1 className="text-center text-2xl font-semibold pt-10 mb-10 lg:text-4xl">
                Why Choose Us?
            </h1>
            <div className="flex flex-row lg:ml-10 lg:mr-10">
            <Servicescard1 
        img={image}
        heading={"Quality"}
        para={"your rigorous quality control measures, including sourcing only the finest spices from reputable suppliers."}

    />
            <Servicescard1 
        img={image1}
        heading={"Competitive Pricing"}
        para={"pricing strategy by highlighting cost-saving initiatives such as efficient sourcing and logistics, bulk purchasing discounts."}

    />
            <Servicescard1 
        img={image2}
        heading={"Sustainability"}
        para={"Emphasize your commitment to sustainability by highlighting eco-friendly sourcing practices."}

    />
    </div>
    

        </div>
        <div>
        <div className="w-100 ml-1 mt-10 mb-10 mr-1 h-2 bg-linecolor rounded-md	lg:mt-16 lg:mb-16"></div>
    </div>
        </div>
    );
}
export default Whychosse;
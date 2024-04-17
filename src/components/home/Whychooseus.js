import React from "react";
import css from "../../cssfiles/Home.css"
import Servicescard from "./servicecard";
import image from "../../images/Guarantee.png"
import image1 from "../../images/Rupee.png"
import image2 from "../../images/Green Earth.png"
function Whychosse(){
    return (
        <div>
        <div className="whychooseus">
            <h1 className="whychooseheading">
                Why Choose Us?
            </h1>
            <div style={{display:"flex",flexDirection:"row",marginLeft:"5%",paddingBottom:"5%"}}>
            <Servicescard 
        img={image}
        heading={"Quality"}
        para={"your rigorous quality control measures, including sourcing only the finest spices from reputable suppliers."}

    />
            <Servicescard 
        img={image1}
        heading={"Competitive Pricing"}
        para={"pricing strategy by highlighting cost-saving initiatives such as efficient sourcing and logistics, bulk purchasing discounts."}

    />
            <Servicescard 
        img={image2}
        heading={"Sustainability"}
        para={"Emphasize your commitment to sustainability by highlighting eco-friendly sourcing practices."}

    />
    </div>
    

        </div>
        <div>
    <div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div>
    </div>
        </div>
    );
}
export default Whychosse;
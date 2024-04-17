import React from "react";
import css from "../../cssfiles/services.css"
import image from "../../images/Globe.png"
import image1 from "../../images/Best Seller.png"
import image2 from "../../images/Cardboard Box.png"
import image3 from "../../images/Cargo Ship.png"
import image4 from "../../images/Certificate.png"
import image5 from "../../images/Online Support.png"
import Servicescard from "./servicecard";
function Services(){
    return (<div className="servicebg">
    <h1 className="Servicesh1">OUR SERVICES</h1>
    <div style={{display:"flex",flexDirection:"row",marginLeft:"5%",marginTop:"-2%"}}>
        <Servicescard 
        img={image}
        heading={"Global Sourcing"}
        para={"Offer a wide range of spices sourced from various regions around the india."}

    />
    <Servicescard 
        img={image1}
        heading={"Quality Assurance"}
        para={"highest quality standards for all spices,quality control measures of the sourcing, processing, and packaging."}

    />
    <Servicescard 
        img={image2}
        heading={"Customized Packaging"}
        para={"Provide customizable packaging, options for bulk packaging for commercial clients & retail ready packaging for consumers"}

    />
    </div>
    <br>

    </br>
    <div style={{display:"flex",flexDirection:"row",marginLeft:"5%",marginTop:"2%"}}>
        <Servicescard 
        img={image3}
        heading={"Logistics and Shipping"}
        para={"   Streamline the import and export process with efficient shipping solutions. managing customs clearance, & timely delivery to clients."}

    />
    <Servicescard 
        img={image4}
        heading={"Certifications "}
        para={"Highlight certifications such as organic, fair trade, and food safety certifications to assure clients of the quality."}

    />
    <Servicescard 
        img={image5}
        heading={"Customer Support"}
        para={"Provide excellent customer support and expertise to assist clients in selecting the right spices for their needs."}

    />
    </div>


    </div>);
}
export default Services;
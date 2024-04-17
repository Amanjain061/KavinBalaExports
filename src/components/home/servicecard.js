import React from "react";

function Servicescard(props){
   
    return (<div className="cardbox">
        
        
        <img classname="cardimg" src={props.img} />
        <h2 classname="card">{props.heading}</h2>
        <p className="servicepara">{props.para}</p>
      
   
    </div>);
}
export default Servicescard;
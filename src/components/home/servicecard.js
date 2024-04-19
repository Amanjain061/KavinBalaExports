import React from "react";

function Servicescard(props){
   
    return (<div className="text-center mr-1 flex items-center flex-col ">
        <img className="w-24 pl-6 pr-6 h-14 object-center lg:w-60 lg:h-40 " src={props.img} />
        <h2 className="text-xs  font-bold pt-2 pb-2 lg:text-4xl">{props.heading}</h2>
        <p className="text-xs pb-10 lg:text-xl">{props.para}</p>
    </div>);
}
export default Servicescard;
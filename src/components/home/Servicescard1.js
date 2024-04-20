import React from "react";

function Servicescard1(props){
   
    return (<div className="text-center mr-1 flex items-center flex-col lg:m-5 lg:w-72 lg:ml-20 lg:mr-20">
        <img className="w-36 pl-10 pr-10 h-12 object-center lg:w-40 lg:h-24" src={props.img} />
        <h2 className="text-xs  font-bold pt-2 pb-2 lg:text-2xl lg:mt-5">{props.heading}</h2>
        <p className="text-xs pb-10 lg:w-full lg:text-lg">{props.para}</p>
    </div>);
}
export default Servicescard1;    
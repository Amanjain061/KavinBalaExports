import React from "react";
import css from "../cssfiles/Home.css";
import image from "../images/homepagecontainer.jpg"
function Homebj(){
    return(
        <div>
        <div style={{position:"relative"}}>
            <img src={image} className="bgimage"></img>
            <p className="hometext">From <span className="spantext">farm </span>to <span className="spantext">table</span> </p>
            <p className="hometext2">our <span className="spantext2">spices </span>travel the <span className="spantext2">globe.</span> </p>
            <p className="hometext3">Discover a faster way of shipping</p>
        </div>
        </div>
    );
}
export default Homebj;
import React from "react";
import css from "../../cssfiles/Home.css"
import image from "../../images/Ringer Volume.png";
import image1 from "../../images/Place Marker.png";
import image2 from "../../images/iPhone SE.png";

function speak(){
    return(
        <div>
        <div className="speakbg">
        <div className="speak" >
        <span className="spancontent"><h1>Speak</h1>
     
        <p>Discuss your inquiries<br />call 9344709123</p>
        <img src={image}></img>
        </span>
        <div className="verticalbar"></div>
        <span className="spancontent"><h1>Connect</h1>
        <p>32, I Street, Angalamman Nagar, <br></br>
Muthiyalpet, Puducherry - 3 </p>
        <img src={image1}></img></span>
        <div className="verticalbar"></div>
        <span className="spancontent"><h1>Write</h1>
        <p>Send a question/inquiry on <br />
kavinbalaexports@gmail.com</p>
<img src={image2}></img></span>
        </div>

        </div>
        <div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div>

        </div>
    );
}
export default speak;
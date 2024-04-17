import React from "react";
import css from "../../cssfiles/Home.css"
import image from "../../images/ourprocesses.png"
function Ourprocess(){
    var count=0;
    return (
        <div style={{marginTop:"6%"}}>
        <h1 style={{
            textAlign:"center",
            fontSize:"4rem",
            
            
        }}>
        
            OUR PROCESS
        </h1>
        <div style={{textAlign:"center",width:"20%",marginTop:"1%",marginLeft:"38%"}}>
        <h1>Shipping</h1>
        <p>ship our premium spices to destinations 
worldwide, ensuring that the flavors of 
exotic cuisines are accessible no matter 
                  where you are.</p>
        </div>
        <div style={{display:"flex"}}>





        {/* left */}
        <div style={{
            width:"30%"
        }}>
        {/* style={{textAlign:"center",width:"20%",marginTop:"8%",marginRight:"2%"}} */}
        <div style={{textAlign:"center",width:"70%",marginTop:"20%",marginLeft:"20%"}}>
            <h1>Factory Verification</h1>
            <p>Our factory verification process 
begins with a comprehensive 
evaluation of potential 
suppliers' facilities, focusing 
on factors such as hygiene 
standards, production 
capabilities.</p>

        </div>
        <div style={{textAlign:"start",width:"60%",marginTop:"25%",marginLeft:"75%"}}>
            <h1>Source</h1>
            <p>Elevate your culinary creations with 
our virtual spice marketplace, offering
curated selections, expert recommendations.</p>
        </div>
        </div>






        {/* centre */}
        <img style={{width:"40%",height:"30rem",borderRadius:"500px",position:"absolute",marginLeft:"28%"}}src={image}></img>
        <div style={{
            width:"30%",marginLeft:"40%"
        }}>







        {/* right */}
        {/* style={{textAlign:"center",width:"20%",marginTop:"8%",marginRight:"2%"}} */}
        <div style={{textAlign:"center",width:"70%",marginTop:"25%",marginLeft:"-3%"}}>
            <h1>Customs Support</h1>
            <p>experienced customs support 
team navigates the complexities 
of international trade regulations 
      on your behalf.</p>

        </div>
        <div style={{textAlign:"center",width:"60%",marginTop:"35%",marginLeft:"-20%"}}>
            <h1>Client Strategy</h1>
            <p>We believe in understanding the unique 
needs and preferences of each client to 
develop tailored import-export strategies.</p>
        </div>
        </div>
        </div>
           
            
       
<div style={{width:"98%",marginLeft:"1%",height:"0.5rem",backgroundColor:"#0C0C0C",opacity:"25%",marginTop:"5%",marginBottom:"5%",borderRadius:"10px"}}></div>

        </div>
    );
}
export default Ourprocess;
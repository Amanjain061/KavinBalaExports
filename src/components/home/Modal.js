import React, { useState } from 'react'
import Insert from './Insert';
import Design from "../Products/Craddesign"
function Modal() {
    let inputfile=document.getElementById("input-file")
    let stringv=document.getElementById("imagevalue") ;
    const[headingtext,setHeading]=useState("")
    const [data,setData]= useState(null)
    function getData(val){
        setData(val.target.value);
    }
    function handleClick(){
        if(data=="apple"){
            stringv.src=URL.createObjectURL(inputfile.files[0]);
            setHeading("ok");
            
        }
    }
    
  return (
    <div style={{position:"fixed",inset:"0",backdropFilter:"blur(2px)",marginLeft:"40%",marginTop:"10%"}}>
   
    <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file"></input>
    <input placeholder='enter password' type="password" onChange={getData}></input>
    <button onClick={handleClick}>submit</button>
    <p>{headingtext}</p>
    <script>
         a = passwordc({data})
    </script>
    <img  src="" id='imagevalue'></img>
  {/* <img src="" id='imagevalue1'> </img> */}
    </div>
  )
}

export default Modal
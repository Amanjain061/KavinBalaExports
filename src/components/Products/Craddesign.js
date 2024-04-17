import React, { useEffect, useState } from "react";
import {getDownloadURL,getStorage,ref,uploadBytes} from "firebase/storage"
import { getFirestore,collection,addDoc,getDocs } from 'firebase/firestore';
import {app} from "../../firebase"
import css from "../../cssfiles/Product.css"
const storage = getStorage(app)
const firestore = getFirestore(app);

function Carddesign(props){
   if(props.int%2==0){
    a="Productcardbox";

   }
   else{
    var a="productCradBox2";
   }

   const getImageurl = (path) => {
    return getDownloadURL(ref(storage,path));
   }  ;
   const [url,setURL] = useState(null);
   useEffect(()=>{
    getImageurl(props.imageURL).then((url)=> setURL(url));
   })
   return(
        
        <div style={{paddingTop:"7%"}}>

        <div className={a} >
            <img src={url}></img>
            <div style={{textAlign:"center"}}>
            <h1 style={{marginLeft:"-15%"}}>{props.spicename}</h1>
            <p style={{color:"#F58220"}}>{props.paraa}</p>
            <p>{props.parab}</p>

            </div>
        </div>

        </div>
    );
}
export default Carddesign;
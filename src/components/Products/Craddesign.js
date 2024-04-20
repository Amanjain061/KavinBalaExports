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
        
        <div className="pb-8">

        <div className={a} >
            <img className=" w-40 h-52 ml-2 mr-2 lg:m-8 lg:ml-16 lg:mr-16 lg:w-96 lg:h-96" src={url}></img>
            <div className="text-center lg:w-full lg:ml-5 lg:mr-5 lg:mt-16">
            <h1 className=" text-2xl  lg:text-5xl">{props.spicename}</h1>
            <p className="text-kavin  ml-12 mr-5 w-36 text-xs lg:text-2xl lg:w-3/4 lg:ml-28 lg:mt-8">{props.paraa}</p>
            <p className="ml-5 mr-5  text-xs lg:text-2xl lg:ml-24 lg:w-3/4  lg:mt-8">{props.parab}</p>

            </div>
        </div>

        </div>
    );
}
export default Carddesign;
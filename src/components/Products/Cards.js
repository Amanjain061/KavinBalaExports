import React, { useEffect, useState } from "react";
import image from "../../images/Cardamom.png"
import image1 from "../../images/clove.png"
import image2 from "../../images/peper.png"
import Design from "./Craddesign"
import {app} from "../../firebase"
import { getFirestore,collection,addDoc,getDocs,getCountFromServer,orderBy} from 'firebase/firestore';

import {getDownloadURL,getStorage,ref,uploadBytes} from "firebase/storage"
const storage = getStorage(app)
const firestore = getFirestore(app);
function Card(props){
   
const Listall = ()=>{
    return getDocs(collection(firestore,'spices'),orderBy("int","asc"));
}
const[spice,setSpice]=useState([]);
useEffect(()=>{
    Listall().then((spice) => setSpice(spice.docs));
},[]);


        
       
       
    return(<div>
        <div className="bg-primary  pt-10">
        {spice.map((spice)=>(<Design {...spice.data()}/>))}
        </div>
        <div className="w-100 ml-1 mt-8 -mb-20 mr-1 h-2 bg-linecolor rounded-md	 lg:mt-10"></div>

        </div>
        
    );
}
export default Card;
import React, { useState} from 'react'
import { getFirestore,collection,addDoc,getCountFromServer } from 'firebase/firestore';
// import {app} from "firebase"
import {app} from "../firebase";
// import {getFirestore} from "firebase/firestore"



import {  query, where, getDocs } from "firebase/firestore";


// import {app} from "../firebase";

import  {getStorage,ref,uploadBytes} from "firebase/storage"
const firestore = getFirestore(app);
const storage = getStorage(app);

function Form() {
  const [spiceName, setName]=useState("");
  const [paraa, setParaa]=useState("");
  const [parab, setParab]=useState("");
  const [images, setImage]=useState("");
  const [email, setEmail]=useState("");
  const [pasword, setpassword]=useState("");
  
// const getData = async ()=>{

// }
const getCount = async()=>{
  
}
  const writeData = async() =>{
    const imageRef= ref(storage,`uploads/images/${Date.now()}-${images.name}`);
  const uploadresult = await uploadBytes(imageRef,images);
  const totallen= await getCountFromServer(collection(firestore,'spices'));
  console.log('count',totallen.data().count);
  if(email=="cakranjithk@gmail.com" && pasword=="KavinBalaExports@061"){
    
    const result= addDoc(collection(firestore,'spices'),{
      int:totallen.data().count+1,
      spicename:spiceName,
      paraa:paraa,
      parab:parab,
      imageURL: uploadresult.ref.fullPath,

    });
    console.log("Result",result);

  }
  };
  return (
    <div>
    <form style={{marginTop:"10%",marginLeft:"10%"}}>
    
      <input className='lsitbox' type='email' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} value={email}></input><br></br>
      <input className='lsitbox' type='password' placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)} value={pasword}></input><br></br>
      <input className='lsitbox' type='text' placeholder='Enter Spice Name' onChange={(e)=>setName(e.target.value)} value={spiceName}></input><br></br>
      <input className='lsitboxa'   type='text' placeholder='Enter para 1' onChange={(e)=>setParaa(e.target.value)} value={paraa}></input><br />
      <input className='lsitboxa' type='text' placeholder='Enter para 2' onChange={(e)=>setParab(e.target.value)} value={parab}></input><br />
      <input className='lsitbox' type="file" onChange={(e)=>setImage(e.target.files[0])}></input><br />
    </form>
    <button  style={{marginLeft:"40%",marginTop:"2%"}}onClick={writeData}>click</button>
    

   </div> 
    
  )
}

export default Form
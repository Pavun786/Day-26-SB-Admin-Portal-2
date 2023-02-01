import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import React from "react";


function UserView(){
  //useParams is a one of hook concept in react-router-dom
    const params =useParams()
     console.log(params)
    
    //  const [searchParams,setSearchParams]=useSearchParams()
    //  console.log(...searchParams)
   
     const [userData,setUserData]=useState([])
     
     useEffect(()=>{
      
        loadUser()
     
    },[])
//https://63770e2281a568fc250af260.mockapi.io/users/${params.pavun}
     let loadUser=async()=>{
        try{
            let user =await axios.get(`https://63770e2281a568fc250af260.mockapi.io/users/${params.pavun}`)
            console.log(user.data)
            setUserData(user.data)
        } catch (error){

        }
    
     }
    return(
        <>
        {/* <h1>{params.userid}</h1>
        <button onClick={()=>{
            setSearchParams(
                {
                    name:"guna",
                    age:26
                }
            )
        
        
        }}>click</button> */}
        <h1>{userData.name}</h1>
        <h1>{userData.position}</h1>
        <h1>{userData.office}</h1>
        <h1>{userData.age}</h1>
        <h1>{userData.startdata}</h1>
        <h1>{userData.salary}</h1>
    </>)
}
export default UserView;
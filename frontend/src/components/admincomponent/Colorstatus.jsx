'use client'

import { axiosbaseURL,notify } from '@/helper/helper';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Colorstatus({status,flag,id}) {
  const roter= useRouter()
     let dispay= "";
    if(flag=="status"){
        dispay= status? "Active":"Inactive"
    }
   
      function statusHnadler(id,field){
 axiosbaseURL.patch(`/color/status/${id}`,{ field })
.then(
      (res)=>{
        if(res.data.success){

          // tostifire ka use krna h yaha yhi se class dekhna h
          notify(res.data.message,res.data.success);
          if(res.data.success){
          roter.refresh()


            
          }
         
        }

      }
    ).catch(
      (error)=>{
       // console.log(error)
notify(error?.response?.data?.message,false)
      }
    )

   

      }

  return (
    <>
   
     <span onClick={()=>statusHnadler(id,flag)}
      className={`px-3 cursor-pointer py-1 text-xs font-semibold rounded-full flex
      ${status
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
      }`}
    >
      {/* {status ? "Active" : "Inactive"} */}
      {dispay}
    </span>
    </>
  )
}

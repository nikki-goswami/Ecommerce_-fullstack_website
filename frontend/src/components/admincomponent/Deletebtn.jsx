'use client'

import React from 'react'
import { notify,axiosbaseURL } from '@/helper/helper';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'


export default function Deletebtn({url}) {
      const roter= useRouter()
    
     function deleteHnadler(){
        // delete conform
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
          axiosbaseURL.delete(url).then(
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
});





  

   

      }
  return (
    <button onClick={deleteHnadler} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
              Delete
            </button>
  )
}

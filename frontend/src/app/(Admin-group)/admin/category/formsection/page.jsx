'use client'

import axios from 'axios';
import React, { useRef } from 'react'
import { axiosbaseURL, notify, slugCreate } from '@/helper/helper';

export default function FormSection() {

  const nameref= useRef()
  const slugref =useRef()

  function generateSlug(){
    const slug =slugCreate(nameref.current.value);
    slugref.current.value=slug

  }

 
   function submitHandler(e){
    e.preventDefault();
    const payload = new FormData()
    payload.append("name",nameref.current.value);
    payload.append("slug",slugref.current.value);
    payload.append("image",e.target.image.files[0])
   
    axiosbaseURL.post("category/create",payload).then(
      (res)=>{
        if(res.data.success){

          // tostifire ka use krna h yaha yhi se class dekhna h
          notify(res.data.message,res.data.success);
          if(res.data.success){
          nameref.current.value="";
          slugref.current.value="";


            
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
   

  <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">

    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Add Category
    </h2>

    {/* Form */}
    <form onSubmit={submitHandler} className="space-y-4">

      {/* Category Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category Name
        </label>
        <input
        onChange={generateSlug}
        ref={nameref}
          type="text"
          placeholder="Enter category name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Slug
        </label>
        <input
        ref={slugref}
        readOnly
          type="text"
          placeholder="Enter slug (eg: men-shoes)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category Image
        </label>
        <input
          type="file"
          accept='image/*'
          name='image'
          className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Save Category
      </button>

    </form>
  </div>
</div>

  )
}

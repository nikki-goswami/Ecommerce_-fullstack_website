'use client'

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { axiosbaseURL, notify, slugCreate } from '@/helper/helper';
import { getCategories } from '@/api/categoriesapi';
import { getbrand } from '@/api/brand';
import { getColors } from '@/api/colors';
import Select from 'react-select';

import { Editor } from 'primereact/editor';
        


export default function FormSection() {
  const[descriptiontext,setDescriptiontext]=useState("")  // ye texteditor ke liye bana h
  const[setcolor_id,setcolorid]= useState([]) // ye multipe color ke liye h
  const [category,setCategory]= useState([]);
  const [barand,setBrand]= useState([]);
    const [color,setColor]= useState([])

   async function fatchData(){
    const category= await getCategories();
    const barnd= await getbrand();
   const colors= await getColors();


setCategory(category?.categoryApi || []);
  setBrand(barnd?.brandApi || []);
  setColor(colors?.deta || []);

}

useEffect(
  ()=>{
    fatchData()

  },
  []
)

  const nameref= useRef()
  const slugref =useRef()
  const originalPrice =useRef()
    const discountPrice =useRef()
     const finalPrice =useRef()




  function generateSlug(){
    const slug =slugCreate(nameref.current.value);
    slugref.current.value=slug

  }

  function calulateDiscountpercentage(){
    const originalPricees= Number(originalPrice.current.value);
    const finalPrices= Number(finalPrice.current.value);

   if(originalPricees<=0 || finalPrices<0){
    console.log("Invalid prices");
    return;
   }

   const Discount=Number(((originalPricees-finalPrices)/originalPricees)*100);
   discountPrice.current.value = Discount.toFixed(2)


  }

  function colorIdSet(e){
    console.log(e,"froem e")
    const colorArryId= e.map (data=>data.value);
    setcolorid(colorArryId)


  }
 



 
   function submitHandler(e){
    e.preventDefault();
    const payload = new FormData()
    payload.append("name",nameref.current.value);
    payload.append("slug",slugref.current.value);
    payload.append("description", descriptiontext);
    payload.append("original_price",originalPrice.current.value);
    payload.append("discount_percentage",discountPrice.current.value);
    payload.append("final_price",finalPrice.current.value);
    payload.append("category_id",e.target.categoryId.value);
    payload.append("color_id",JSON.stringify(setcolor_id));
    payload.append("brand_id", e.target.brandId.value);







    payload.append("thumbnail",e.target.image.files[0])
   
    axiosbaseURL.post("product/create",payload).then(
      (res)=>{
        if(res.data.success){

          // tostifire ka use krna h yaha yhi se class dekhna h
          notify(res.data.message,res.data.success);
          if(res.data.success){
          // nameref.current.value="";
          // slugref.current.value="";


            
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
   

  <div className="max-w-4xl mx-auto  bg-white rounded-xl shadow-md p-6">

    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Add Product
    </h2>

    {/* Form */}
    <form onSubmit={submitHandler} className="space-y-4">
      <div className='grid grid-cols-2 gap-2'>
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

     <div className='col-span-2 grid grid-cols-3 gap-4'>

       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Original Price
        </label>
        <input
        onChange={calulateDiscountpercentage}
        ref={originalPrice}
          type="text"
          placeholder="Enter orginal price"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Discount(%)
        </label>
        <input
        readOnly
        ref={discountPrice}
          type="text"
          placeholder="Enter Discount %"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Final price
        </label>
        <input
        onChange={calulateDiscountpercentage}
        ref={finalPrice}
          type="text"
          placeholder="Enter final price"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
     

     </div>

<div className='col-span-full'>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descriptions
        </label>
        {/* <textarea
        onChange={generateSlug}
        name='description'
          type="text"
          placeholder="Enter category name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
        



            <Editor  onTextChange={(e) => setDescriptiontext(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    

        
 </div>
   <div className='col-span-2 grid grid-cols-3 gap-4'>

       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
           Category
        </label>
        <Select name='categoryId' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
       
        options={
           category.map((cat)=>{
                return(
  { value: cat._id, label: cat.name }


                )
              })

        }
      />
 

        
        
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
           Brand
        </label>
        <Select name='brandId' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
       
        options={
          barand .map((bar)=>{
                return(
  { value: bar._id, label: bar.name }


                )
              })

        }
      />
        
        
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
           Color
        </label>
        <Select isMulti closeMenuOnSelect={false} onChange={colorIdSet} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
       
        options={
           color.map((col)=>{
                return(
  { value: col._id, label: col.name }


                )
              })

        }
      />
        
        
      </div>

       

     </div>



      

      {/* Category Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          thumbnail
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

  )
}

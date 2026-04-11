'use client'

import axios from 'axios';
import { axiosbaseURL, notify, slugCreate } from '@/helper/helper';

export default function MultipleImage({productData}) {
    //console.log(productData,"pro")

 

 
   function submitHandler(e){
    e.preventDefault();
    const payload = new FormData()
   
    // payload.append("image",e.target.image.files)
   // console.log(e.target.image.files)
   for(let img of e.target.image.files ){
    payload.append("image",img)

   }
   
    axiosbaseURL.post(`product/otherImagesAdd/${productData.productId?._id}`,payload).then(
      (res)=>{
        if(res.data.success){

          // tostifire ka use krna h yaha yhi se class dekhna h
          notify(res.data.message,res.data.success);
          if(res.data.success){
         e.reset()


            
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
      Add Image
    </h2>
<div className='flex  gap-5 overflow-x-scroll'>
  {
    productData.productId.other_images.map((item, index) => (
      <img className='w-20 h-20'
        key={item}   // ✅ UNIQUE KEY
        src={`${productData.imagebaseUrl}/other/${item}`}

        alt="product"
      />
    ))
  }
</div>

    {/* Form */}
    <form onSubmit={submitHandler} className="space-y-4">


      {/* Category Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category Image
        </label>
        <input
          type="file"
          accept='image/*'
          multiple
          name='image'
          className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Save 
      </button>

    </form>
  </div>
</div>

  )
}

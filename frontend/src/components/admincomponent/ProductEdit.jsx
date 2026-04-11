'use client'

import axios from 'axios';
import React, { useRef } from 'react'
import { axiosbaseURL, notify, slugCreate } from '@/helper/helper';
import { useRouter } from 'next/navigation';

export default function ProductEdit({editdeta}) {
   // console.log(editdeta)
    const router= useRouter()

  const nameref= useRef()
  const slugref =useRef()

  function generateSlug(){
    const slug =slugCreate(nameref.current.value);
    slugref.current.value=slug

  }

 
 
   
function submitHandler(e) {
  e.preventDefault();

  const payload = new FormData();
  payload.append("name", nameref.current.value);
  payload.append("slug", slugref.current.value);

  // ✅ Correct way to send image
  if (e.target.image.files[0]) {
    payload.append("image", e.target.image.files[0]);
  }

  axiosbaseURL.put(`product/update/${editdeta._id}`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }

  )
 

  .then((res) => {
    if (res.data.success) {
      notify(res.data.message, true);
      router.push("/admin/product"); // ✅ corrected
    }
  })
  .catch((error) => {
    notify(error?.response?.data?.message, false);
  });
}


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
   

  <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">

    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Edit product
    </h2>

    {/* Form */}
    <form onSubmit={submitHandler}  className="space-y-4">

      {/* Category Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
        onChange={generateSlug}
        ref={nameref}
          type="text"
            defaultValue={editdeta.productId?.name}

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
          defaultValue={editdeta.productId?.slug}

          type="text"

          placeholder="Enter slug (eg: men-shoes)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Image */}
      <div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Image
        </label>
       <input
  type="file"
  accept="image/*"
  name="image"
  className="w-full px-3 py-2 border rounded-lg bg-white"
/>

      </div>
        <div className="px-6 py-4 text-gray-800">
            <img
  src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE_URL + editdeta.productId?.thumbnail}
  alt={editdeta.productId?.name}
/>
          </div> 
      </div>


      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Edit Product
      </button>

    </form>
  </div>
</div>

  )
}

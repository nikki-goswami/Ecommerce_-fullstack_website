'use client'

import axios from 'axios';
import React, { useRef } from 'react'
import { axiosbaseURL, notify, slugCreate } from '@/helper/helper';
import { useRouter } from 'next/navigation';

export default function EditCategory({ editdeta }) {
  console.log(editdeta,"edit")
  const router = useRouter();

  const nameref = useRef();
  const slugref = useRef();

  // Generate slug on name change
  function generateSlug() {
    const slug = slugCreate(nameref.current.value);
    slugref.current.value = slug;
  }

  // Submit handler
  
 function submitHandler(e) {
  e.preventDefault();

  const payload = {
    name: nameref.current.value,
    slug: slugref.current.value,
    code: e.target.code.value   // 🔥 MUST BE "code"
  };

  axiosbaseURL
    .put(`/color/update/${editdeta._id}`, payload)
    .then((res) => {
      notify(res.data.message, true);
      router.push("/admin/color");
    })
    .catch((err) => {
      notify(err?.response?.data?.message, false);
    });
}



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Edit Color
        </h2>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-4">

          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color Name
            </label>
            <input
              onChange={generateSlug}
              ref={nameref}
              type="text"
              defaultValue={editdeta?.name}
              placeholder="Enter color name"
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
              defaultValue={editdeta?.slug}
              placeholder="Auto-generated slug"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Color
            </label>
         <input
  type="color"
  name="code"
  defaultValue={editdeta?.code}
/>

   
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit Color
          </button>

        </form>
      </div>
    </div>
  )
}

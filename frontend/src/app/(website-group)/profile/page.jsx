import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='w-full'>
    <div className='max-w-7xl mx-auto px-4 py-2  bg-gray-50'>
    <div className="w-full bg-white border px-6 py-5 rounded-xl mb-3">
      <div className="flex items-center text-sm text-gray-500 gap-2">

        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>

        <span>/</span>

        <Link href="/pages" className="hover:text-gray-700">
          pages
        </Link>

        <span>/</span>

        <span className="text-black font-medium">
          profile
        </span>

      </div>
    </div>
 <div className=" bg-gray-50 flex justify-center gap-2 p-6">
      
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm grid grid-cols-12 overflow-hidden">

        {/* LEFT SIDEBAR */}
        <div className="col-span-12 md:col-span-3  p-6">

          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/avatar.svg"
              alt=""
              className=" object-cover rounded-2xl"
            />
            <h3 className="mt-3 font-semibold text-gray-800">
              Mark Cole
            </h3>
            <p className="text-sm text-gray-400">
              swoog@gmail.com
            </p>
          </div>

          {/* Menu */}
          <div className="mt-6 space-y-2 text-sm">

            <div className="bg-teal-600 text-white px-4 py-2 rounded-md flex justify-between items-center">
              <span>Account Info</span>
              <span>➜</span>
            </div>

            <div className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer flex justify-between items-center">
              <span>My order</span>
              <span>➜</span>
            </div>

            <div className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer flex justify-between items-center">
              <span>My address</span>
              <span>➜</span>
            </div>

            <div className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer flex justify-between items-center">
              <span>Change password</span>
              <span>➜</span>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-12 md:col-span-9 p-8">

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Account Info
          </h2>

          {/* Form UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* First Name */}
            <div>
              <label className="text-sm text-gray-600">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Mark"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm text-gray-600">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Cole"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="swoog@gmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="+1 0231 4554 452"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

          </div>

          {/* Save Button */}
          <button className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-md text-sm">
            SAVE
          </button>

        </div>
      </div>
    </div>

    </div>
    </div>
  )
}

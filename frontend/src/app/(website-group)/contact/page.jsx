import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='w-full '>
    <div className='max-w-7xl mx-auto p-4  bg-gray-50'>
 <div className=" bg-white  px-6 py-6 rounded-xl ">
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
          Contact
        </span>

      </div>
</div>
    <div className=" bg-white px-6 py-12 flex justify- mb-2.5">

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT FORM */}
        <div className="lg:col-span-2">

          <h2 className="text-sm font-semibold text-gray-800 uppercase font-bold">
            Ready to work with us
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Contact us for all your questions and opinions
          </p>

          <div className="mt-8 space-y-5">

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input className="w-full mt-1 px-4 py-2 border rounded-md outline-none" />
              </div>
              <div>
                <label className="text-sm text-gray-600">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input className="w-full mt-1 px-4 py-2 border rounded-md outline-none" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input className="w-full mt-1 px-4 py-2 border rounded-md outline-none" />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input className="w-full mt-1 px-4 py-2 border rounded-md outline-none" />
            </div>

            {/* Country */}
            <div>
              <label className="text-sm text-gray-600">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select className="w-full mt-1 px-4 py-2 border rounded-md outline-none">
                <option>United States (US)</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-600">
                Subject <span className="text-gray-400">(Optional)</span>
              </label>
              <input className="w-full mt-1 px-4 py-2 border rounded-md outline-none" />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none resize-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <input type="checkbox" className="mt-1" />
              <p>
                I want to receive news and updates once in a while. By submitting,
                I'm agree to the{" "}
                <span className="text-teal-600 cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* Button */}
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md text-sm">
              SEND MESSAGE
            </button>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="mt-12">

          {/* Address Card */}
          <div className="bg-gray-100 rounded-xl p-6 text-sm text-gray-700">

            <p className="text-xs text-gray-500 uppercase mb-3">
              United States (Head Quarter)
            </p>
            <p className='font-medium'>152 Thatcher Road St, Mahattan, 10463, US</p>
            <p className='font-medium mb-3'>(+025) 3886 25 16</p>
            <p className="text-green-600">hello@swattehcmart.com</p>


            <p className="text-xs text-gray-500 uppercase mb-3 font-medium">
              United Kingdom (Branch)
            </p>
            <p className='font-medium'>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
            <p className='font-medium mb-3'>(+718) 895-5350</p>
            <p className="text-green-600 mb-4">contact@swattehcmart.co.uk</p>

            {/* Social Icons (UI circles) */}
           
            <div className="flex gap-3">
            <div className="w-8 h-8 bg-[#E1E3EB] rounded-full flex justify-center items-center" > 
              <img src="/symbol.svg" alt="" className='object-cover' />
             </div>
             <div className="w-8 h-8 bg-[#E1E3EB] rounded-full flex justify-center items-center" > 
              <img src="/symbol1.svg" alt="" className='object-cover' />
             </div>
             <div className="w-8 h-8 bg-[#E1E3EB] rounded-full flex justify-center items-center" > 
              <img src="/symbol2.svg" alt="" className='object-cover' />
             </div>
             <div className="w-8 h-8 bg-[#E1E3EB] rounded-full flex justify-center items-center" > 
              <img src="/symbol3.svg" alt="" className='object-cover' />
             </div>
           
          </div>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="/contact.svg"
              alt=""
              className=" object-cover"
            />
          </div>

        </div>

      </div>
    </div>

    <div className='pt-4 px-2 pb-2'>
<h2 className='font-bold mb-2.5'>find us on google map</h2>
<img src="/map.svg" alt=""  className='object-cover'/>

    </div>
    </div>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white  w-full p-4">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 text-md md:text-sm pl-5 sm:pl-0">
        
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 items-center sm:px-2.5 '>
        {/* Brand */}
        <div>
          <h2 className="font-bold text-base mb-3">
            SWOO – 1ST NYC TECH ONLINE MARKET
          </h2>

          <p className="text-gray-500 mb-2">Hotline 24/7</p>
          <p className="text-red-500 font-semibold text-lg mb-2">
            (025) 3886 25 16
          </p>

          <p className="text-gray-500 text-xs mb-4">
            257 Thatcher Rd, Brooklyn, Manhattan, NY 10058
          </p>

          {/* Social Icons (placeholder) */}
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

        {/* Top Categories */}
        <div>
          <h3 className="font-semibold mb-3">TOP CATEGORIES</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops</li>
            <li>PC & Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
            <li>Networks</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Swoo</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Store Locations</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-semibold mb-3">HELP CENTER</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Customer Service</li>
            <li>Policy</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>Product Support</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-semibold mb-3">PARTNER</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section row 2 */}
      <div className=" py-6 hidden md:block">
        <div className=" px-3 flex flex-col md:flex-row items-center gap-36">
          <div className='flex gap-5 items-center '>
            <button className='flex items-center gap-2 px-3  pl-5 py-2 w-25 bg-gray-100 rounded-xl'>
               USD <span><img src="/symbol4.svg" alt="" /></span>
            </button>

             <button className='flex items-center gap-2 px-3  py-2 w-25 bg-gray-100 rounded-xl'><span><img src="/eng.svg" alt="" /></span>
               USD <span><img src="/symbol4.svg" alt="" /></span>
            </button>

          </div>
        <div>
            <p className="text-sm font-medium">
            SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
          </p>
        </div>

          
        </div>
       
        
      </div>
      <div className=' mb-2 mt-3.5 md:mt-0 '>
         <div className="flex justify-center pb-5 border-b-[1px]  ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border px-4 py-2   outline-none border-0"
            />
            <button className="text-red-500 px-6 py-2 text-sm  md:ml-64 ml-0">
              SUBSCRIBE
            </button>
          </div>
        
      </div>
        <div className='flex justify-center items-center text-gray-500 mb-2.5'>By subscribing, you’re accepted the our Policy</div>

      {/* Bottom Footer */}
      <div className="border-t py-4 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2024 Shawonetc3 . All Rights Reserved</p>

          <div className="flex gap-3 pt-2 pb-3.5">
            <img src="/pay1.svg" alt="" />
            <img src="/pay2.svg" alt="" />
            <img src="/pay3.svg" alt="" />
            <img src="/pay4.svg" alt="" />
            <img src="/pay5.svg" alt="" />
          </div>
          <div className='text-[#0D6EFD]'> Mobile Site</div>
        </div>
      </div>
      </div>
    </footer>
  );
}

import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className='w-full'>
        <div className='max-w-7xl mx-auto p-4'>
              <div className=" bg-white  px-6 py-5 rounded-xl my-2 shadow-xl ">
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
          Somseng Galatero X6 Ultra LTE 4G/128 GB Black Smartphone
        </span>

      </div>
    </div>

        </div>

        <div className='max-w-7xl mx-auto p-4'>
            <div className='grid grid-cols-3 items-center gap-1.5'>
                <div className='grid-cols-2'>
                   <div>
                    <div className='flex justify-between mb-3'>
                        <button className='bg-black text-white px-2 py-1 rounded-md'>new</button>
                        <span className='bg-[#EBEDF3] w-7 h-7 rounded-full'></span>

                    </div>
                    <img src="/mo.svg" alt=""  className='object-cover'/>
                    <div>
                        <img src="/threephone.svg" alt="" className='object-cover' />
                    </div>


                    </div> 

                    <div>
                        
                    </div>

                </div>
                <div className='col-span-1'>

                </div>

            </div>

        </div>

    </div>
  )
}

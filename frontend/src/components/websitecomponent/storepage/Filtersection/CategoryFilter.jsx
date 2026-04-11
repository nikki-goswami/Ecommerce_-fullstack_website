'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export default function CategoryFilter({categories}) {
    const pathname= usePathname()
  return (
    
     <div className='gap-3 px-2 mb-3.5 '>
        
          <div className='flex justify-between mb-4 px-2'>




                  <h2 className='text-xl font-bold '>categories</h2>
        
                  </div>
        <Link href="/topcellphone">
 <button className={`w-full  border rounded-md py-2 mb-4 font-medium ${pathname==='/topcellphone' ? 'bg-teal-700 text-white ' :'bg-gray-50 hover: bg-gray-100'}`}>All Categories</button>
        
        </Link>
                 
    <div>
    <ul>
      {
        categories?.categoryApi?.map((cat)=>{
          // console.log(cat)
          const isActive=pathname===`/topcellphone/${cat.slug}`
          return(
            <Link key={cat._id} href={`/topcellphone/${cat.slug}`}>
            <li className={`ml-3 hover:text-black cursor-pointer mb-2 flex justify-between ${isActive ? 'bg-teal-800 text-white w-full':'text-gray-700 hover:bg-gray-100'}`}>
              <span>{cat.name}</span>
              <span>({cat.count})</span>
            </li>
            </Link>
          )
        })
    
      }
    </ul>
    </div>
    
    </div>
    
  )
}

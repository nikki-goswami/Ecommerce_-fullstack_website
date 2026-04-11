'use client'

import React, { useState } from 'react'
import  { useEffect } from 'react'

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';



export default function BynumberFilter() {
    const [limit,setLimit]= useState(0)
const router= useRouter();
      const searchparam = useSearchParams()
      function limitFilterhandler(limit){
        
     const query= new URLSearchParams(searchparam.toString());
     setLimit(limit)
     query.set("limit",limit)
     router.push(`?${query.toString()}`)
    
       
    
      }
    
    //   useEffect(()=>{
    //     const min= searchparam.get('min_price') ?? 300;
    //         const max = searchparam.get('max_price') ?? 80000;
    //         setPrice([Number(min),Number(max)])
    
    
    //   },[searchparam])
    

function sorthandler(data){
 // console.log(data)
  const query= new URLSearchParams(searchparam.toString());
     query.set("sort",data)
     router.push(`?${query.toString()}`)
    

}

  return (
    
   <div className='flex justify-between items-center py-7 px-3.5'>
  <div className='text-gray-500'>1-40 of 120 results</div>
 <div className='flex justify-between gap-3.5 items-center'>
   <div>
    <select onChange={(e)=>limitFilterhandler(e.target.value)} className='border px-3 py-1 rounded'>
     <option defaultValue={0} >All</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="10">10</option>
    </select>
  </div>

   <div>
    <select onChange={(e)=>sorthandler(e.target.value)} className='border px-3 py-1 rounded w-40'>
      <option >Latest</option>
      <option value="price_assen">Price Low To High</option>
      <option value="price_dessen">Price High To Low</option>
    </select>
  </div>

 </div>
</div>

  )
}

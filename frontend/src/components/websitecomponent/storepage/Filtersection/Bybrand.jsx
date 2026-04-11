import React from 'react'
import { getbrand } from '@/api/brand'


export default async function Bybrand() {


  const Brand = await getbrand()
  //console.log(Brand)
  return (

     
 
<div className='px-2'>
            <h2 className='font-bold mb-2'>By Brands</h2>
            <input type="text" className='px-2 py-2 bg-white rounded-xl outline-0 w-full mb-4' />
           <div className='border-b-[1px] pb-2.5 mb-2'>  
            

           {
            Brand?.brandApi?.map((brand)=>{
              return(
          <div key={brand._id} className='flex gap-2 mx-1.5 mb-3'>
             <input type="checkbox" />
             <img className='w-7 h-7' src={`${Brand?.imagebaseUrl}/${brand.image}`} alt="" />
            <span>(14)</span>
           </div>
              )
            })

           }
           
           </div>



 </div> 


  )
}

import React from 'react'
import { getbrand } from '@/api/brand';


export default async function FeaturedBrand() {
  const brands= await getbrand({limit:5,status:true,is_best:true});
//console.log(brands)
  return (

     <div className=" p-3 bg-[#FFFFFF]">
          <div className="flex justify-between p-2 items-center">
          <h3 className="text-xl font-bold">featured brands</h3>
          <button>view all</button>

          </div>


   <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  items-center gap-4">
               
  
{
  brands?.brandApi?.map((item) => (
    <img
      key={item._id}
      className="w-8 h-8"
      src={`${brands.imagebaseUrl}/${item.image}`}
      alt={item.name}
    />
  ))
}



            

          </div>


        </div>
  )
}

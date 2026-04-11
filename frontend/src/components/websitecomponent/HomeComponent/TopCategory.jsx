import { getCategories } from '@/api/categoriesapi';
import Link from 'next/link';

import React from 'react'

export default  async function TopCategory() {


const categories= await getCategories({limit:5,status:true,is_top:true});


  return (

    <div className="p-3 bg-[#FFFFFF]">
          <div className="flex p-2 justify-between gap-5 items-center">
            <h3 className="text-xl font-bold">top categories</h3>
          <button>view all</button>
          {/* <button className=" px-8 py-2.5 rounded-xl ml-44 bg-[#EBEDF3] ">
          </button> */}

          </div>
     <div className="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-1">


 
     


   {
  categories?.categoryApi?.map((item) => (

    <Link key={item._id} href={`/topcellphone/${item.slug}`}>
     <figure
      
      className="flex flex-col items-center object-cover"
    >
     
      <img className="w-8 h-8 rounded-md " src={`${categories?.imagebaseUrl}/${item.image}`} alt={item?.name}/>


      <figcaption className="mt-1 text-sm text-gray-600 font-medium">
        {item.name}
      </figcaption>
    </figure>

    </Link>
   
  ))
}


      </div>
          </div>


  )
}

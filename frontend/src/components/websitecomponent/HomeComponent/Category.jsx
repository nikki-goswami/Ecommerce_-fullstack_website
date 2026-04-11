import { getCategories } from '@/api/categoriesapi';
import React from 'react'
import Link from 'next/link';

export default async function Category() {


 
const categories= await getCategories({limit:5,status:true,home:true});


  return (
     <div className="text-sm md:text-sm">
              

             {
  categories?.categoryApi.map((item) => (
    <Link key={item.id} href={`/topcellphone/${item.slug}`}>
   <div className="flex justify-around px-3 py-4 m-4 border-[1px] rounded-xl">
<img className="w-8 h-8 rounded-md" src={`${categories?.imagebaseUrl}/${item.image}`} alt={item?.name}/>

      <h1 className="text-sm">{item.name}</h1>

      <div className="w-[20px] h-[20px] rounded-full bg-teal-300 flex items-center justify-center">
        {item.count}
      </div>
    </div>
    </Link>
   
  ))
}
</div>
  )
}

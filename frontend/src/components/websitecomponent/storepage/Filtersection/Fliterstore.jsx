
import React from 'react'
import { getCategories } from '@/api/categoriesapi';
import { getbrand } from '@/api/brand';
import { getColors } from '@/api/colors';

import Bycolor from './Bycolor';
import Byprice from './Byprice';
import Bybrand from './Bybrand';
import Link from 'next/link';
import BrandNamefilter from './BrandNamefilter';
import CategoryFilter from './CategoryFilter';

export default async function Fliterstore() {

  const categories= await getCategories({status:true});
  //console.log(categories)

    const Brand = await getbrand()
    const colors= await getColors({status:true});
  //console.log(colors)

  
  

  



  
  

  return (
<div>
  <div className='flex justify-between items-center py-7 px-2.5'>
    <h2 className='font-bold text-xl'>Filters</h2>
    <Link href="/topcellphone">
    <button className='text-blue-500'>Clear All</button>
    </Link>

  </div>

 <div className='col-span-1 bg-gray-50 p-2.5 hidden sm:block mt-3'>








  {/* by categories */}
         <div>
         



 <CategoryFilter categories={categories} />



         </div>

         {/* <Bybrand/> */}
        <Bybrand/>

         {/* <Byprice/> */}
          <Byprice/>




          {/* <Bycolor/> */}
          <Bycolor colors={colors}  />
          
  

 {/* by Brand Name */}
 <BrandNamefilter Brand={Brand} />
 
            

</div>
</div>

  )
}

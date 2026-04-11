// 'use client'

// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import React, {useState } from 'react'
// import { FaCheckCircle } from "react-icons/fa";


// export default  function BrandNamefilter({Brand}) {
//     const router= useRouter()
//       const [userBrand,setUserBrand]=useState(null)
//       const searchparam = useSearchParams()
//      function handlerbarandclick (slug){
//     const query= new URLSearchParams(searchparam.toString());
  
//     if(userBrand===slug){
//       query.delete("brand_slug");
//       setUserBrand(null);
//       router.push(`?${query.toString()}`)
//       return;
//     }
//     console.log(query)


//     query.set("brand_slug",slug);
//     setUserBrand(slug);
//     router.push(`?${query.toString()}`);


//   }

//   return (
// <div>
//            <div className=' mb-4 px-2'>
//           <h2 className='text-2xl font-bold '>Brand Name</h2>

//           </div>
//   <div className=' px-2 mb-3.5 '>
             

// <ul>
//   {
//     Brand?.brandApi?.map((cat)=>{
//       const isActive = userBrand ===cat.slug

//       return(
//         <li onClick={()=>handlerbarandclick(cat.slug)} key={cat._id} className={`ml-3 hover:text-black cursor-pointer mb-3 relative flex justify-between items-center ${isActive ? 'bg-teal-700 text-white w-full' :'text-gray-700 hover:bg-gray-100  w-full'}`}>
//           <span>{cat.name}</span>
//           <span>({cat.count})</span>

//           {
//             isActive && <FaCheckCircle size={14} className="absolute top-[25%] right-[5%]"/>

//           }
//         </li>
        
//       )
//     })

//   }
// </ul>

//           </div>
//   </div>

//   )
// }

'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaCheckCircle } from "react-icons/fa";

export default function BrandNamefilter({ Brand }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlBrand = searchParams.get("brand_slug");

  function handlerbarandclick(slug) {
    const query = new URLSearchParams(searchParams.toString());

    if (urlBrand === slug) {
      query.delete("brand_slug");
    } else {
      query.set("brand_slug", slug);
    }

    router.push(`?${query.toString()}`, { scroll: false });
  }

  return (
    <div>
      <div className='mb-4 px-2'>
        <h2 className='text-2xl font-bold'>Brand Name</h2>
      </div>

      <div className='px-2 mb-3.5'>
        <ul>
          {Brand?.brandApi?.map((cat) => {
            const isActive = urlBrand === cat.slug;

            return (
              <li
                key={cat._id}
                onClick={() => handlerbarandclick(cat.slug)}
                className={`ml-3 cursor-pointer mb-3 relative flex justify-between items-center w-full
                  ${isActive
                    ? 'bg-teal-700 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                  }`}
              >
                <span>{cat.name}</span>
                <span>({cat.count})</span>

                {isActive && (
                  <FaCheckCircle
                    size={14}
                    className="absolute top-[25%] right-[5%]"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// 'use client'

// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { FaCheckCircle } from "react-icons/fa";

// import React, { useEffect, useState } from 'react'

// export default function Bycolor({colors}) {
//   const router= useRouter()
//   const [userColor,setUserColor]=useState(null)
//   const searchparam = useSearchParams()
//   function colorFilterhandler(id){
//     const query= new URLSearchParams(searchparam.toString());
  
//     if(userColor===id){
//       query.delete("color_id");
//       setUserColor(null);
//       router.push(`?${query.toString()}`)
//       return;
//     }
//    // console.log(query)


//     query.set("color_id",id);
//     setUserColor(id);
//     router.push(`?${query.toString()}`);


//   }


//   useEffect(
//     ()=>{
//       const urlcolor= searchparam.get("color_id");
//       setUserColor(urlcolor)
//     },
//     [searchparam]
//   )








 

//   return (
//     <div className='mb-3 pb-5 border-b-[1px]'>
//   <h2 className='font-bold mb-2.5'>By Color</h2>
//        <div className="flex flex-wrap gap-3">

// {colors?.deta?.map((item) => {
//   const isActive= userColor === item._id
//   return (
//     <div onClick={()=>colorFilterhandler(item._id)}
//       key={item._id}
//       style={{ background: item.code }}
//       className={`w-[30px] h-[30px] rounded-md border cursor-pointer relative ${userColor==item._id ? "scale-130" :""}`}>


// {
//   isActive && (
//     <FaCheckCircle size={14} className='text-white drop-shadow absolute top-[25%] left-[25%]' />

//   )
// }




// </div>

//   );
// })}



 
// </div>
// </div>

//   )
// }

'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaCheckCircle } from "react-icons/fa";

export default function Bycolor({ colors }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlcolor = searchParams.get("color_id");

  function colorFilterhandler(id) {
    const query = new URLSearchParams(searchParams.toString());

    if (urlcolor === id) {
      query.delete("color_id");
    } else {
      query.set("color_id", id);
    }

    router.push(`?${query.toString()}`,{scroll:false});
  }

  return (
    <div className='mb-3 pb-5 border-b-[1px]'>
      <h2 className='font-bold mb-2.5'>By Color</h2>

      <div className="flex flex-wrap gap-3">
        {colors?.deta?.map((item) => {
          const isActive = urlcolor === item._id;

          return (
            <div
              key={item._id}
              onClick={() => colorFilterhandler(item._id)}
              style={{ background: item.code }}
              className={`w-[30px] h-[30px] rounded-md border cursor-pointer relative 
                ${isActive ? "scale-125" : ""}`}
            >
              {isActive && (
                <FaCheckCircle
                  size={14}
                  className='text-white drop-shadow absolute top-[25%] left-[25%]'
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

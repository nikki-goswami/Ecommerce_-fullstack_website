// 'use client'

// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
// import { useSearchParams } from 'next/navigation';

// export default function Byprice() {
//   const router= useRouter();
//   const searchparam = useSearchParams()
  

//   const [price,setPrice]= useState([300,80000])

//   function pricehandler(data){
//     //console.log(data)

//     // setPrice([data[0],data[1]])  ye bhi kr skte h  ye and niche wala bhi kr skte h
//         const query= new URLSearchParams(searchparam.toString());

//     setPrice(data)
    
//     query.set("min_price",data[0]);
//    query.set("max_price",data[1]);

//     router.push(`?${query.toString()}`);

//   }

//   useEffect(()=>{
//     const min= searchparam.get('min_price') ?? 300;
//         const max = searchparam.get('max_price') ?? 80000;
//         setPrice([Number(min),Number(max)])


//   },[searchparam])

 


//   return (
   
//    <div className='p-2'>
//    <h2 className='font-bold mb-2'>By Price</h2>
//    <div className='mb-3'>
    
//     <RangeSlider min="200" max="80000" value={price} onInput={pricehandler} />


//    </div>
//    <div className='flex gap-2 pb-7 border-b-[1px] mb-3'>
//      <h2 className='px-[13px] py-[10px] w-25 bg-white rounded-xl flex  items-center gap-2.5 justify-between'><span>$</span>{price[0]}</h2>
//      <span className='flex items-center font-bold '>-</span>
//       <h2 className='px-[13px] py-[10px] w-25 bg-white rounded-xl flex  items-center gap-2.5 justify-between'><span>$</span>{price[1]}</h2>
   
//      <button  className='px-[15px]  bg-green-700 text-white'>Go</button>
//    </div> 
//    </div> 
//   )
// }

'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

export default function Byprice() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const minPrice = Number(searchParams.get('min_price') ?? 300);
  const maxPrice = Number(searchParams.get('max_price') ?? 80000);

  const price = [minPrice, maxPrice];

  function pricehandler(data) {
    const query = new URLSearchParams(searchParams.toString());

    query.set("min_price", data[0]);
    query.set("max_price", data[1]);

    router.push(`?${query.toString()}`,{scroll:false});
  }

  return (
    <div className='p-2'>
      <h2 className='font-bold mb-2'>By Price</h2>

      <div className='mb-3'>
        <RangeSlider
          min={200}
          max={80000}
          value={price}
          onInput={pricehandler}
        />
      </div>

      <div className='flex gap-2 pb-7 border-b-[1px] mb-3'>
        <h2 className='px-[13px] py-[10px] w-25 bg-white rounded-xl flex items-center gap-2.5 justify-between'>
          <span>$</span>{price[0]}
        </h2>

        <span className='flex items-center font-bold'>-</span>

        <h2 className='px-[13px] py-[10px] w-25 bg-white rounded-xl flex items-center gap-2.5 justify-between'>
          <span>$</span>{price[1]}
        </h2>

        <button className='px-[15px] bg-green-700 text-white'>Go</button>
      </div>
    </div>
  );
}

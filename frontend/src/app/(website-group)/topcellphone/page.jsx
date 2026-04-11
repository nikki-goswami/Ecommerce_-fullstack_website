// import React from 'react'
// import Link from 'next/link'
// import { ImCross } from "react-icons/im";
// import { HiCheckCircle } from "react-icons/hi";
// import Topcellphonecardslider from '@/components/websitecomponent/Topcellphonecardslider'
// import PapularCategories from '@/components/websitecomponent/storepage/PapularCategories'
// import Fliterstore from '@/components/websitecomponent/storepage/Filtersection/Fliterstore';
// import StoreRightproduct from '@/components/websitecomponent/storepage/StoreRightproduct';



// export default function page() {




//   return (
//     <div className='w-full px-2 py-2  bg-gray-50'>
//     <div className='max-w-7xl mx-auto px-4 py-3 '>
//         <div className='p-5  my-2 flex gap-3 bg-white rounded-xl'>
//             <span className='text-[#999999]'><Link href={"/"}>Home</Link></span>
//             <span className='text-[#999999]'><Link href={"/shop"}>/Shop</Link></span>
//          <span className='font-medium'><Link href={"/topcellphone"}>/Top Cell Phones & Tablets</Link></span>


//         </div>
//     </div>

// <div className='max-w-7xl mx-auto p-5 bg-white mb-3  '>
// <div className=''>
//     <h2 className='text-2xl font-bold mb-4'>top cell phones & tablets</h2>
//  <div className='relative'>
// <div className='relative'>
// <img src="/slider3.svg" alt="" className='object-cover' />
// <div className='absolute top-[13%] left-[5%] pb-4 sm:pb-0 '>
//     <h2 className='mb-4'><span className='text-[#FFFFFF] md:font-bold sm:text-3xl'>Noise Cancelling</span>
//     <p className='text-[#FFFFFF] sm:text-2xl'>Headphone</p>
//     </h2>
// <div className='text-[#FFFFFF] mb-3.5 mx-2 hidden sm:block'>
//     <p>Boso Over-Ear Headphone</p>
//     <p>Wifi, Voice Assistant,</p>
//     <p >Low latency game mde</p>
// </div>

// <div>
//     <button className='px-5 py-2 rounded-2xl bg-white text-black'>buy now</button>
// </div>
// </div>

// </div>
// <div className='absolute right-0 bottom-0 hidden md:block'>
//     <img src="/banner1.svg" alt="" />
// </div>

// <div className="absolute bottom-[10%] right-[36%] hidden md:block">
//   <button className="flex items-center gap-2 bg-white px-5 py-[4px] rounded-full text-[10px] text-black shadow">

//     <span className="flex flex-col items-center leading-[8px]">
//       <span>pr</span>
//       <span>e</span>
//       <span>v</span>
//     </span>

//     <span className="text-[11px] font-medium">3 / 3</span>

//     <span className="flex flex-col items-center leading-[8px]">
//       <span>n</span>
//       <span>e</span>
//       <span>x</span>
//     </span>

//   </button>
// </div>
// <div className='absolute right-[15%] top-[10%] hidden md:block'>

//  <h2 className='mb-2'><span className='text-black font-bold text-3xl'>redmi note 12</span>
//     <p className='text-black text-2xl'>Pro+ 5g</p>
//     </h2>
//     <p>Rise to the challenge</p>
// </div>
// <div className='absolute right-[2%] top-[10%] hidden md:block' >
//     <button className='px-5 py-2 rounded-2xl bg-black text-white'>Shop Now</button>
// </div>

// </div>
// </div>

// </div>


// <PapularCategories/>


// <div className='max-w-7xl mx-auto p-5 bg-white mb-3 '>
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5'>
//         <div className='col-span-1 bg-gray-50 p-2.5'>
//             <h2 className='text-2xl font-bold mb-2'>categories</h2>
//             <button className=' py-3 pl-7 pr-2.5 bg-white text-black rounded-xl font-bold mb-2'> All Categories</button>
//             <h3 className='font-medium text-xl mb-3'>Cell Phones & Tablets</h3>
//             <ul className='list-none pl-10'>
//              <li className='mb-2'>All</li>
//              <li className='mb-2'>Iphone</li>
//              <li className='mb-2'>Samsung</li>
//              <li className='mb-2'>Xiaomi</li>
//              <li className='mb-2'>Asus</li>
//             <li className='mb-2'>Oppo</li>
//             <li className='mb-2'>Gaming Smartphone</li>
//             <li className='mb-2'>Ipad</li>
//             <li className='mb-2'>Window Tablets</li>
//             <li className='mb-2'>eReader</li>
//              <li className='mb-2'>Smartphone Chargers</li>
//               <li className='mb-2'>5G Support Smartphone</li>
//             <li className='mb-2'>Smartphone Accessories</li>
//              <li className='mb-2'>Tablets Accessories</li>
//             <li className='mb-2'>Cell Phones   $200</li>
             


//             </ul>

//         </div>

//         {/* right side start */}
//         <div className=' col-span-1 sm:col-span-1 md:col-span-3 p-2.5 border-b-[1px]  relative '>
//             <h2 className='text-2xl font-bold mb-3.5'>Best seller in this category</h2>
//             <div className='px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2.5 '>
//                               {[...Array(4)].map((_, index) => (
                                
//                 <div key={index}>
//                     <div className='flex items-center justify-between '>
//                         <button className='px-[20px] py-[5px] bg-green-500 text-white rounded-2xl'>
//                             <p>save</p>
//                             <h3>$59.00</h3>
//                         </button>

//                         <span className='w-8 h-8 rounded-full bg-[#E2E4EB]'></span>

//                     </div>
//                     <img src="/prod11.png" alt="" className='object-cover' />
//                     <span className='flex justify-center items-center mb-2.5'>(8)</span>

//                     <h2 className=' font-bold mb-2.5'>uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB</h2>
//                     <div className='mb-2.5'>
//                         <span className='text-red-400'>$1,729.00 </span><span>$2,119.00</span>
//                     </div>
//                     <button className='px-2.5 py-2 bg-gray-50 text-green-400 rounded-xl mb-2.5'>free shipping</button>
//                     <div className='flex items-center gap-3.5'>
//                     <ImCross  className='bg-red-500 text-white rounded-2xl'/>
//                     <p className='text-gray-400'> Out of stock</p>


//                     </div>
//                 </div>

//                ))}


                 
                

  

//             </div>

//         </div>

//     </div>

// </div>



// <div className='max-w-7xl mx-auto p-5 bg-white mb-3 '>
//     <div className='grid  md:grid-cols-4 gap-3.5'>
//       {/* left side */}
// <Fliterstore/>
// {/* right side */}
// <div className='md:col-span-3 p-2.5  sm:col-span-3  '>
//   <div className='p-2 flex justify-between items-center text-gray-500 mb-3'>
//       <div>
//         <p className='text-gray-500'><span className='font-bold'>1</span> - <span className='font-bold'>40</span> of 120 results</p>
//       </div>
//       <div className='flex gap-2 items-center hidden sm:block'>
//         <span className='text-gray-500'>Show item</span>
//         <p className=' p-1 bg-gray-50 flex gap-3'><span>24</span>  <span>48</span>  <span>72</span></p>

//       </div>

//       <div className='flex items-center gap-2.5 hidden sm:block'>
//         <span>Show item</span>
//         <div className='w-44 p-2 bg-gray-100 flex justify-between items-center'>
//           <span className='font-bold'>Default</span>
//           <img src="/image.svg" alt="icon" className="object-cover" />

//         </div>

//       </div>

//       <button>View As</button>



//   </div>

//   <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  items-center  p-2 gap-4 '>



    

//     <StoreRightproduct/>


//   </div>


           
// </div>

//     </div>

// </div>



//     </div>
//   )
// }

// my code



   // paste code 

   import React from 'react'
import { getProducts } from '@/api/productapi'
import { HiCheckCircle } from "react-icons/hi"
import BynumberFilter from '@/components/websitecomponent/storepage/Filtersection/BynumberFilter'
import AddToCartButton from '@/components/websitecomponent/AddToCartButton'
import { getuser } from '@/api/user'

export default async function StoreRightproduct({ searchParams }) {
  const usertoken = await getuser()

  const promiseReslove = await searchParams

  const color_id   = promiseReslove?.color_id ?? null
  const brand_slug = promiseReslove?.brand_slug ?? null
  const min_price  = promiseReslove?.min_price ?? null
  const max_price  = promiseReslove?.max_price ?? null
  const limit      = promiseReslove?.limit ?? null
  const sort       = promiseReslove?.sort ?? null

  const productdata = await getProducts({
    status: true,
    color_id,
    brand_slug,
    min_price,
    max_price,
    limit,
    sort
  })

  return (
    <div>
      <BynumberFilter />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2">
        {productdata?.productApi?.map((data) => {

          // ✅ IMAGE URL VARIABLE
          const imageUrl = `${productdata.imagebaseUrl}/main/${data.thumbnail}`

          return (
            <div
              key={data._id}
              className="bg-white rounded-2xl border hover:shadow-md transition p-3 flex flex-col"
            >

              {/* Badges */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2">
                  {data.is_best_seller && (
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}

                  {data.is_hot && (
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                      Hot
                    </span>
                  )}
                </div>

                {data.discount_percentage && (
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                    {data.discount_percentage}% OFF
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="h-40 flex items-center justify-center mb-3">
                <img
                  src={imageUrl}
                  alt={data.name}
                  className="object-contain h-full"
                />
              </div>

              {/* Name */}
              <h2 className="font-semibold text-sm mb-2 line-clamp-2">
                {data.name}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600 font-bold">
                  ₹{data.final_price}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  ₹{data.original_price}
                </span>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2 text-sm mb-3">
                <HiCheckCircle className="text-green-600" />
                <span className="text-gray-500">
                  {data.stock ? "In stock" : "Out of stock"}
                </span>
              </div>

              {/* Shipping */}
              <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full w-fit mb-3">
                Free Shipping
              </span>

             
  <AddToCartButton
  id={data._id}
  name={data.name}
  image={imageUrl}
  final_price={data.final_price}       // 900
  original_price={data.original_price} // 1000
  discount_percentage={data.discount_percentage}
  qty={data.qty || 1}
  usertoken={usertoken}
/>


            </div>
          )
        })}
      </div>
    </div>
  )
}

 

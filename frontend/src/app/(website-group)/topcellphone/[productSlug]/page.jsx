import React from 'react'
    import { getProducts } from '@/api/productapi'
    import { HiCheckCircle } from "react-icons/hi"
import BynumberFilter from '@/components/websitecomponent/storepage/Filtersection/BynumberFilter';



export default async function StoreRightproduct({params,searchParams}) {

  const CategorySlugpromise = await params ;
//  console.log(CategorySlugpromise,"promis")
  const productSlug= CategorySlugpromise.productSlug;
  // console.log(productSlug,"cateslug")
  const ColorSlugpromise = await searchParams ;
 //console.log(ColorSlugpromise ,"promis")
  const color_id= ColorSlugpromise.color_id;
  // console.log(color_id,"cateslug")
   const promiseReslove = await searchParams;
  //console.log(promiseReslove)
  //console.log(color_ids)
  const brand_slug = promiseReslove?.brand_slug ?? null

  const min_price = promiseReslove?.min_price ?? null
  const max_price = promiseReslove?.max_price ?? null;
  const limit= promiseReslove?.limit??null;






  const productdata = await getProducts({status:true ,productSlug:productSlug,color_id:color_id,brand_slug,max_price,min_price,limit})

  return (
    <div>
   <BynumberFilter/>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2 mt-3">
      {productdata?.productApi?.map((data) => (
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
              src={`${productdata.imagebaseUrl}/main/${data.thumbnail}`}
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

          {/* Add to cart (UI only – server side) */}
          <button
          disabled={!data.stock}
     className={`mt-auto w-full py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition
        ${data.stock? "bg-blue-600":"bg-gray-300"}`}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </div>
  )
}
 
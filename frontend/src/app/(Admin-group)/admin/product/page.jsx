import Link from "next/link"
import React from "react"

import Deletebtn from "@/components/admincomponent/Deletebtn";
import { getProducts } from "@/api/productapi";
import ProductViewbtn from "@/components/admincomponent/Productviewbtn";
import ProductStatus from "@/components/admincomponent/ProductStatus";

export default async function UserTable() {
  const productsapidata= await  getProducts();
 //console.log(productsapidata)

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md">

  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800">
      Product Management
    </h2>
    <p className="text-gray-500 text-sm">Manage User, roles and status</p>

    <Link href="/admin/product/formsection">
      <button className="border-2 bg-amber-600 text-white px-4 py-1 rounded-2xl">
        + Add Product
      </button>
    </Link>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-xl overflow-hidden">

      {/* Table Head */}
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            image
          </th> 
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Name
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Slug
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Status
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Price
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Actions
          </th>
        </tr>
      </thead>

      {/* Table Body */}
     


     <tbody>
  {
 
    //categoriesapidata.data?.length>0 ?
    productsapidata?.productApi?.map((cat) => {
      //console.log(cat,"form ")
      return (
        <tr
          key={cat._id}
          className="border-t hover:bg-gray-50 transition "
        >
           <td className="px-6 py-4 text-gray-800">
            <img className="w-10 h-10 rounded-md" src={productsapidata.imagebaseUrl + `/main/${cat.thumbnail}`} alt="image" />
          </td> 
          <td className="px-6 py-4 text-gray-800">
            {cat.name}
          </td>

          <td className="px-6 py-4 text-gray-700">
            {cat.slug}
          </td>
           <td className="px-6 py-4 mx-3 my-3  ">
             {/* status */}

        <ProductStatus url={`product/status/${cat._id}`} status={cat.status} flag="status"/>
      <ProductStatus url={`product/status/${cat._id}`} status={cat.is_featured} flag="is_featured"/>
      <ProductStatus url={`product/status/${cat._id}`} status={cat.is_hot} flag="is_hot"/>
     <ProductStatus url={`product/status/${cat._id}`} status={cat.is_home} flag="is_home"/> 



            
          </td>
          <td className="px-6 py-4 text-gray-700">
            Final:200
          </td>

         

          <td className="px-6 py-4 flex gap-2">
           <Link href={`/admin/product/edit/${cat._id}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
           </Link>
            <Deletebtn url={`product/delete/${cat._id}`}/>

            <ProductViewbtn product={cat} path={productsapidata.imagebaseUrl + `/main/${cat.thumbnail}`} />

             <Link href={`/admin/product/multipleImages/${cat._id}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
              MultipleImages
            </button>
           </Link>

          </td>
        </tr>
      )
    })
   // : <h2 className="text-center font-medium py-10 flex justify-center items-center">No Categories</h2>
  }
      </tbody>



    </table>
  </div>
</div>

  )
}

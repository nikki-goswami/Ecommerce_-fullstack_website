import Link from "next/link"
import React from "react"
import { getCategories } from "@/api/categoriesapi";
import Statusbage from "@/components/admincomponent/Statusbage";
import Deletebtn from "@/components/admincomponent/Deletebtn";

export default async function UserTable() {
  const categoriesapidata= await  getCategories();
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">

  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800">
      Category Management
    </h2>
    <p className="text-gray-500 text-sm">Manage User, roles and status</p>

    <Link href="/admin/category/formsection">
      <button className="border-2 bg-amber-600 text-white px-4 py-1 rounded-2xl">
        + Add Category
      </button>
    </Link>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">

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
            Actions
          </th>
        </tr>
      </thead>

      {/* Table Body */}
     


     <tbody>
  {
 
    //categoriesapidata.data?.length>0 ?
    categoriesapidata?.categoryApi?.map((cat) => {
      return (
        <tr
          key={cat._id}
          className="border-t hover:bg-gray-50 transition "
        >
           <td className="px-6 py-4 text-gray-800">
            {/* <img className="w-10 h-10 rounded-md" src={process.env.NEXT_PUBLIC_CATEGORY_IMAGE_URL+cat.image} alt="" /> 
          */}
    
<img className="w-10 h-10 rounded-md" src={`${categoriesapidata?.imagebaseUrl}/${cat.image}`} alt={cat?.name}/>

          </td> 
          <td className="px-6 py-4 text-gray-800">
            {cat.name}
          </td>

          <td className="px-6 py-4 text-gray-700">
            {cat.slug}
          </td>

          <td className="px-6 py-4 mx-3 my-3  ">
             {/* status */}
          {/* <Statusbage id={cat._id} status={cat.status} flag="status"/>
          <Statusbage id={cat._id} status={cat.is_top} flag="is_top"/>
          <Statusbage id={cat._id} status={cat.is_best} flag="is_best"/>
         <Statusbage id={cat._id} status={cat.is_home} flag="is_home"/> */}

        <Statusbage url={`category/status/${cat._id}`} status={cat.status} flag="status"/>
      <Statusbage url={`category/status/${cat._id}`} status={cat.is_top} flag="is_top"/>
      <Statusbage url={`category/status/${cat._id}`} status={cat.is_best} flag="is_best"/>
     <Statusbage url={`category/status/${cat._id}`} status={cat.is_home} flag="is_home"/> 



            
          </td>

          <td className="px-6 py-4 flex gap-2">
           <Link href={`/admin/category/edit/${cat._id}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
           </Link>
            <Deletebtn url={`category/delete/${cat._id}`}/>
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

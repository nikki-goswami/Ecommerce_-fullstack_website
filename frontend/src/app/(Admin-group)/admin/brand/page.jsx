import Link from "next/link"
import React from "react"
import Deletebtn from "@/components/admincomponent/Deletebtn";
import { getbrand } from "@/api/brand";
import Brandstatus from "@/components/admincomponent/Brandstatus";

export default async function UserTable() {
  const categoriesapidata= await  getbrand();
  console.log(categoriesapidata,"from cat")

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">

  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800">
    Brand Management
    </h2>
    <p className="text-gray-500 text-sm">Manage User, roles and status</p>

    <Link href="/admin/brand/formsection">
      <button className="border-2 bg-amber-600 text-white px-4 py-1 rounded-2xl">
        + Add Brand
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
    categoriesapidata?.brandApi?.map((cat) => {
      return (
        <tr
          key={cat._id}
          className="border-t hover:bg-gray-50 transition "
        >
           <td className="px-6 py-4 text-gray-800">
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
  <Brandstatus url={`brand/status/${cat._id}`} status={cat.status} flag="status"/>
<Brandstatus url={`brand/status/${cat._id}`} status={cat.is_top} flag="is_top"/>
<Brandstatus url={`brand/status/${cat._id}`} status={cat.is_best} flag="is_best"/>
<Brandstatus url={`brand/status/${cat._id}`} status={cat.is_home} flag="is_home"/> 

          



            
          </td>

          <td className="px-6 py-4 flex gap-2">
           <Link href={`/admin/brand/edit/${cat._id}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
           </Link>
            <Deletebtn url={`brand/delete/${cat._id}`}/>
                {/* btand/delete router se aa ya h */}
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

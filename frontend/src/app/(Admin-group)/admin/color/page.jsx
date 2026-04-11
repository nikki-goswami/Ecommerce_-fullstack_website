import Link from "next/link"
import React from "react"
import Statusbage from "@/components/admincomponent/Statusbage";
import Deletebtn from "@/components/admincomponent/Deletebtn";
import { getColors } from "@/api/colors";
import Colorstatus from "@/components/admincomponent/Colorstatus";

export default async function UserTable() {
  const categoriesapidata= await  getColors();
  //console.log(categoriesapidata)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">

  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-gray-800">
      Color Management
    </h2>

    <Link href="/admin/color/formsection">
      <button className="border-2 bg-amber-600 text-white px-4 py-1 rounded-2xl">
        + Add Color
      </button>
    </Link>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">

      {/* Table Head */}
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            color
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
    categoriesapidata?.deta?.map((cat) => {
      return (
        <tr
          key={cat._id}
          className="border-t hover:bg-gray-50 transition "
        >
           <td  className="px-6 py-4 text-gray-800">
           <div style={{background:cat.code}} className="w-20 rounded-md h-10"></div>
          </td>  
          <td className="px-6 py-4 text-gray-800">
            {cat.name}
          </td>

          <td className="px-6 py-4 text-gray-700">
            {cat.slug}
          </td>

          <td className="px-6 py-4 mx-3 my-3  ">
                {/* status */}
          {/* <Statusbage url={`color/status/${cat._id}`}  status={cat.status} flag="status"/> */}
<Colorstatus 
  id={cat._id}
  status={cat.status}
  flag="status"
/>
          


            
          </td>

          <td className="px-6 py-4 flex gap-2">
           <Link href={`/admin/color/edit/${cat._id}`}>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
              Edit
            </button>
           </Link>
            <Deletebtn url={`color/delete/${cat._id}`}/>
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

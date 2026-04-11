'use client'

import React, { act } from 'react'
import { MdDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorFill } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';





export default function Sidebar() {
    const naveItems=[
    {
        name:"Dashboard",
        icon: MdDashboard,

        link:"/admin"
    },
     {
        name:"Category",
        icon: MdCategory,


        link:"/admin/category"
    },
       {
        name:"Colors",
        icon:IoIosColorFill
,



        link:"/admin/color"
    },
    {
        name:"Brand",
        link:"/admin/brand",
        icon: FaProductHunt
    },
    {
        name:"Cards",
        link:"/admin/cards",
        icon:FaProductHunt
    },
     {
        name:"Product",
        icon: FaProductHunt,



        link:"/admin/product"
    },
    {
        name:"Settings",
        link:"/admin/settings",
        icon:FaProductHunt
    }
   

]
const pathname = usePathname()

  return (
    <aside className='bg-white w-64 h-[100vh] flex flex-col shadow-xl'>
        <div className="p-6 py-5 text-[#ff7b00]">
            <h2 className='text-2xl font-bold'>Admin<span className='text-black'>Panel</span></h2>
        </div>
        <nav className='p-4 space-y-2.5 flex-1'>
           
            {
                naveItems.map((item,index)=>{
                    const Icon= item.icon
                    const  active= pathname==item.link
                    return(

            <Link
  key={index}
  href={item.link}
  className={`${
    active ? "bg-[#ff2b00] text-white" : "bg-white"
  } group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-orange-100 duration-100`}
>

            <Icon  className={` ${active ? "text-white"  : "text-[#ff7b00]"}`}/>
            <span className={` ${active ? "text-white" :"text-gray-300"}font-medium group-hover:text-[#ff7b00] `}>{item.name}</span>
            {active && <span className='w-2 h-2 bg-white rounded-full ml-auto'></span>
}
            </Link>
                    )
                })
            }
        </nav>




    </aside>
  )
}

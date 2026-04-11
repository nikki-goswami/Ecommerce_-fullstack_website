'use client'

import React, { useEffect, useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { localStorageToCart, removetoCart } from '@/redux/reducers/cartReducers';

import { axiosbaseURL, formatIndianCurrency } from '@/helper/helper';
import { useRouter } from 'next/navigation';
import store from '@/redux/store/store';


export default function Middleheader({userData}) {
  const router= useRouter()
  const cart = useSelector((store)=>store.cart)
 const dispacher= useDispatch();
  const [open,setOpen]= useState(false)


    const navItem= [
        {
            name:"HOMES",
            path:"/"
        },
       
        {
          name:"ABOUT",
            path:"/about"

        },
        {
            name:"PRODUCTS",
            path:"/topcellphone"
        },
        {
            name:"CONTACT",
            path:"/contact"
        }
        


    ]




useEffect(()=>{
dispacher(localStorageToCart())

},[])


 async function logoutHndler(){
const res=  await axiosbaseURL.get("userlogin/logout")
dispacher(removetoCart())
router.refresh()

}



  return (
    
      <div className =" w-full bg-white sticky top-0  z-50">
        {/* Main Header */}
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
         
          <div>
            <img src="/LOGO.svg" alt="" className='object-cover' />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            
            {
                navItem.map((item,index)=>{
                    return(
            <Link key={index} href={item.path}>
             <div className="flex items-center gap-1.5"><span className="cursor-pointer">{item.name}</span><span className='pt-1.5'><SlArrowDown  className='font-normal w-[12px] h-[12px]'/></span></div>
            </Link>
                    )
             

                })
            }
           
          </nav>

          {/* Right */}
         <div className="flex items-center gap-6 text-sm">
  {/* User Section */}
  {userData ? (
    <Link href={"/profile"} className="flex items-center gap-2 hidden md:block">
      <button
        onClick={logoutHndler}
        className="text-xs text-gray-500 font-medium"
      >
        Logout
      </button>
      <div className="relative">
        <span className="bg-black text-white font-medium text-xs flex items-center justify-center w-7 h-7 rounded-full">
          {userData.name[0]}
        </span>
      </div>
    </Link>
  ) : (
    <div className="text-right hidden md:block">
      <p className="text-xs text-gray-500">WELCOME</p>
      <p className="font-medium">
        <Link href={"/userlogin"}>LOG IN</Link> /{" "}
        <Link href={"/userlogin"}>REGISTER</Link>
      </p>
    </div>
  )}

  {/* Cart Section - always visible */}
  <div className="flex items-center gap-2 ml-0 sm:ml-52 md:ml-6">
    <Link href={"/cart"}>
      <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer">
        <CiShoppingCart className="w-7 h-7 text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          {cart.data.length}
        </span>
      </div>
    </Link>
    <p className="font-semibold">{formatIndianCurrency(cart.final_total)}</p>
  </div>
</div>


















          {/* icon */}
          <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
            <FaBars />

        </div>

 {/* Mobile Sidebar Menu */}
<div
  className={`fixed left-0 top-[72px] h-90 w-64 bg-white shadow-lg z-40
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* Close */}
  <div className="flex justify-end p-4">
    <FaTimes
      className="text-xl cursor-pointer"
      onClick={() => setOpen(false)}
    />
  </div>

  {/* Menu Items */}
  <nav className="flex flex-col gap-4 px-6 text-sm font-medium">
    {navItem.map((item, index) => (
      <Link
        key={index}
        href={item.path}
        onClick={() => setOpen(false)}
      >
        {item.name}
      </Link>
    ))}

    {/* 🔹 Auth links */}
  <Link href="/login" onClick={() => setOpen(false)}>
  LOGIN
  </Link>

  <Link href="/register" onClick={() => setOpen(false)}>
  REGISTER
  </Link>

  {/* 🔹 Cart */}
  {/* <Link href="/cart" onClick={() => setOpen(false)}>
    CART
  </Link> */}
  </nav>
</div>

    
</div>
</div>
          
  )
}



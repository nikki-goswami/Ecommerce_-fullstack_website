





import Category from "@/components/websitecomponent/HomeComponent/Category";
import FeaturedBrand from "@/components/websitecomponent/HomeComponent/FeaturedBrand";
import TopCategory from "@/components/websitecomponent/HomeComponent/TopCategory";
import Homeslider from "@/components/websitecomponent/Homeslider";
import Mainslider from "@/components/websitecomponent/Mainslider";
import Recentlyviewpd from "@/components/websitecomponent/Recentlyviewpd";
import Link from "next/link";
import React from "react";

export default function AllCategory() {

  
  return (
    <div className="w-full px-4 py-2  bg-gray-50">
      <div className="max-w-7xl mx-auto ">
        
       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
         {/* LEFT SIDEBAR */}
        <div className="col-span-1  bg-[#FFFFFF] shadow-2xl rounded-xl md:p-3">
          <div className="p-3 border-b-2 mb-2">
            <h1 className="text-2xl font-medium">Category</h1>
          </div>
          <Category/>
        
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 ">
          <Homeslider />
        </div>
       </div>

      </div>


      <div className="max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">  
       
      <FeaturedBrand/>
        <TopCategory/>

      </div>

        {/* row-1 */}
        <div className="max-w-7xl mx-auto p-4 bg-gray-200">
       <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">

      {/* Header */}
      <div className="bg-teal-500 text-white px-12 py-1 font-semibold flex justify-between items-center">
        <div>DEALS OF THE DAY</div>
        <div className="text-white mr-10">
          <p>e</p>
          <p>w</p>
          <p>w</p>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-6">

        {/* LEFT : Images */}
        <div className="flex gap-4 ml-3 md:ml-0">

              <div
                className="flex justify-center items-center"
              >
                <img
                  src="/div3.svg"
                  alt="thumb"
                  className="object-cover"
                />
              </div>

          {/* Main Image */}
          <div className="relative flex-1 flex justify-center items-center">

            {/* Save badge */}
            <span className="absolute top-20 left-5 bg-teal-500 text-white text-xs px-3 py-1 rounded-lg">
              SAVE <br /> $199.00
            </span>

            <img
              src="/div2.svg"
              alt="phone"
              className="h-80 object-contain"
            />
          </div>
        </div>

        {/* RIGHT : Details */}
        <div className="ml-5 md:ml-0">

          {/* Reviews */}
          <p className="text-xs text-gray-400 mb-1">(12)</p>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 leading-snug">
            Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
          </h2>

          {/* Price */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-2xl font-bold text-teal-600">
              $569.00
            </span>
            <span className="text-sm text-gray-400 line-through">
              $759.00
            </span>
          </div>

          {/* Specs */}
          <ul className="text-sm text-gray-600 mt-4 space-y-1 list-disc pl-4">
            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
            <li>DDR5 Compatible: 4*DIMM DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>

          {/* Badges */}
          <div className="flex gap-2 mt-4">
            <span className="text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              FREE SHIPPING
            </span>
            <span className="text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
              FREE GIFT
            </span>
          </div>

          {/* Countdown */}
          <div className="mt-5">
            <p className="text-xs font-semibold text-gray-700 mb-2">
              HURRY UP! PROMOTION WILL EXPIRE IN
            </p>

            <div className="flex gap-3">
              {[
                { value: "162", label: "d" },
                { value: "9", label: "h" },
                { value: "32", label: "m" },
                { value: "34", label: "s" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-12 h-14 bg-gray-100 rounded-lg flex flex-col items-center justify-center"
                >
                  <span className="font-bold">{item.value}</span>
                  <span className="text-xs text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="w-1/3 h-2 bg-teal-500 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Sold: <span className="font-semibold">26</span>/75
            </p>
          </div>

        </div>
 {/* Right images */}
 <div className="ml-8 hidden md:block">
  <img src="/ban1.png" alt="ban"  className=" object-cover mb-2"/>
    <img src="/ban1.png" alt="ban"  className=" object-cover mb-2"/>
      <img src="/ban1.png" alt="ban"  className=" object-cover"/>



 </div>

      </div>
    </div>

        </div>
        {/* row-2 */}





        <div className="max-w-7xl mx-auto p-4 hidden md:block">
          <Mainslider/>

        </div>





{/* row-4 */}
<div className="max-w-7xl mx-auto p-4">
  <div className="flex justify-between items-center text-sm md:text-md">
    <div className="flex gap-3 items-center px-1 gap-10">
      <h2 className="font-normal md:font-bold md:text-2xl text-md">Best seller</h2>
      <p className="md:text-xl text-md text-gray-500">New in</p>
      <p className="md:text-xl text-md text-gray-500">popular</p>

    </div>
    <button className="p-2">view all</button>

  </div>
   
   <div className="px-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm md:text-md relative ">
   


    {[...Array(5)].map((_, index) => (
    <div
      key={index}
      className=" bg-white rounded-2xl shadow-md p-4 mb-3 md:mb-0"
    >
      {/* Product Image */}
      <div className="flex justify-center mt-4 border-b">
        <img
          src="/prod9.svg"
          alt="Headphone"
          className="object-cover"
        />
      </div>

      {/* Reviews */}
      <p className="text-xs text-gray-400 text-center mt-3">
        (152)
      </p>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 text-center mt-1 leading-snug">
        BOSO 2 Wireless On Ear <br /> Headphone
      </h3>

      {/* Price */}
      <p className="text-lg font-bold text-gray-900 text-center mt-2">
        $359.00
      </p>

      {/* Badges */}
      <div className="flex justify-center gap-2 mt-3">
        <span className="text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          FREE SHIPPING
        </span>
        <span className="text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          FREE GIFT
        </span>
      </div>

      {/* Stock */}
      <div className="flex justify-center items-center gap-2 mt-3">
        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        <span className="text-xs text-gray-600">In stock</span>
      </div>

      {/* Color Variants */}
      <div className="flex justify-center gap-3 mt-4">
        <button className="w-10 h-10 border rounded-lg flex items-center justify-center">
          <img src="/one.svg" alt="variant 1" />
        </button>

        <button className="w-10 h-10 border rounded-lg flex items-center justify-center">
          <img src="/twp.svg" alt="variant 2" />
        </button>
      </div>
    </div>
  ))}
    
    
   </div>




   


</div>





      
{/* row-5 */}
 <div className=" max-w-7xl mx-auto p-4 border-b-[1px] " >
         <div className="flex justify-between items-center">
        <h2 className=" text-xl font-medium md:text-2xl md:font-bold my-6"> top cellphones & tablets</h2>

      <Link href={"/topcellphone"}><button className=" p-2">view all</button></Link>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-15 ">
           <div className="ml-1.5 md:ml-0">
     <div className="">
      <div className="relative">
    <img src="/Prod18.png" alt="" className="object-cover" />
  <div className='absolute left-[5%] top-[10%]'>

 <h2 className='md:mb-2'><span className='text-black font-bold text-2xl md:text-3xl'>redmi note 12</span>
    <p className='text-black text-xl md:text-2xl'>Pro+ 5g</p>
    </h2>
    <p>Rise to the challenge</p>
</div>
  <div className='absolute left-[5%] bottom-[10%]' >
  <button className='px-5 py-2 rounded-2xl bg-black text-white hidden md:block'>Shop Now</button>
</div>
      </div>

     </div>
            

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 items-center ml-3 md:ml-0">
            <div className="flex gap-7 items-center">
            <div>
              <h2 className="text-md font-medium">iPhone (iOS)</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/prod20.png" alt="#" className="object-cover" />
              </div>       
            </div>
             <div className="flex gap-5">
            <div>
              <h2 className="text-md font-medium"> Macbook</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/image.png" alt="#" className="object-cover" />
              </div>       
            </div>
             <div className="flex gap-5">
            <div>
              <h2 className="text-md font-medium"> Macbook</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/image.png" alt="#" className="object-cover" />
              </div>       
            </div>
             <div className="flex gap-5">
            <div>
              <h2 className="text-md font-medium"> Macbook</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/image.png" alt="#" className="object-cover" />
              </div>       
            </div>
             <div className="flex gap-5">
            <div>
              <h2 className="text-md font-medium"> Macbook</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/image.png" alt="#" className="object-cover" />
              </div>       
            </div>
             <div className="flex gap-5">
            <div>
              <h2 className="text-md font-medium"> Macbook</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/image.png" alt="#" className="object-cover" />
              </div>       
            </div>
            

          </div>

        </div>
         
</div>





{/* row-6 */}

<div className="max-w-7xl mx-auto p-4 relative">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-sm">
 
    {[...Array(5)].map((_, index) => (
  <div className=" bg-white rounded-2xl shadow-md p-2 relative ml-2.5 mr-2.5 mb-3 md:mb-0">

      {/* Save Badge */}
      <span className="absolute top-5 left-4 md:top-10 md:left-9 bg-teal-500 text-white font-normal md:font-medium  md:px-3 md:py-1 rounded-md">
        SAVE <br /> $199.00
      </span>

      {/* Wishlist Dot */}
      <span className="absolute top-5 right-6  md:top-10 md:right-9 w-5 h-5 md:w-7 md:h-7 bg-gray-300 rounded-full"></span>

      {/* Product Image */}
      <div className="flex justify-center mt-10 mb-6">
        <img
          src="/prod5.svg"
          alt="Smart Phone"
          className="object-cover"
        />
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-2">(152)</p>

        <h3 className="text-sm font-semibold text-gray-800 leading-snug">
          SROK Smart Phone 128GB, <br />
          Oled Retina
        </h3>

        {/* Price */}
        <div className="flex justify-center items-center gap-2 mt-3">
          <span className="text-lg font-bold text-teal-500">
            $579.00
          </span>
          <span className="text-sm text-gray-400 line-through">
            $859.00
          </span>
        </div>

        {/* Free Shipping */}
        <span className="inline-block mt-3 text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          FREE SHIPPING
        </span>

        {/* Stock */}
        <div className="flex justify-center items-center gap-2 mt-3">
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          <span className="text-xs text-gray-600">In stock</span>
        </div>
      </div>
 </div>

   ))}
   </div>


  

</div>


        {/* row-7 */}
        <div className=" max-w-7xl mx-auto p-4 border-b-[1px] " >
        <div>
           <div className="flex justify-between">
           <h2 className="md:text-2xl md:font-bold my-6 font-medium"> Best Laptops & Computers</h2>
          <button className="p-2">view all</button>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 ">
           <div className="">
            
            {/* here */}
             <div className="relative">
              <img src="/Prod19.png" alt="" className="object-cover" />
            {/* paste hoga */}
  <div className='absolute left-[5%] top-[10%]'>

 <h2 className='mb-4'><span className='text-white text-xl md:font-bold md:text-2xl  '>Mobok 2
  <p className="text-white font-medium md:font-bold text-md md:text-2xl" >superchard</p> 

</span>
    <p className='text-white md:text-xl text-md'>by M2</p>
    </h2>
    <p className="text-white absolute left-[2%] bottom-[-30px] hidden md:block">Start from <span className="text-green-800">$1,199</span></p>
</div>
 

            </div>
            

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-7 md:gap-17 ml-4 md:ml-0 ">
            
             {[...Array(6)].map((_,index)=>(
              <div className="flex gap-5">
            <div>
              <h2 className="text-md font-medium"> Macbook</h2>   
            <p>74 Items</p> 
             </div>   
             <div>
              <img src="/image.png" alt="#" className="object-cover" />
              </div>       
            </div>

             ))}
            

          </div>

        </div>
        </div>
         
        </div>


        {/* row-8 */}
        <div className="max-w-7xl mx-auto p-4 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-1 ">
            {[...Array(5)].map((_, index) => (
          <div className=" bg-white rounded-2xl shadow-md p-4 relative ml-2.5 mr-2.5 mb-2">
      
      {/* NEW Badge */}
      <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded-md">
        NEW
      </span>

      {/* Wishlist / Dot */}
      <span className="absolute top-4 right-4 w-7 h-7 bg-gray-300 rounded-full"></span>

      {/* Product Image */}
      <div className="flex justify-center mt-6 mb-4">
        <img
          src="/prod37.svg"
          alt="Macbook"
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-1">(152)</p>

        <h3 className="text-sm font-semibold text-gray-800 leading-tight">
          Pineapple Macbook Pro <br /> 2022 M1 / 512 GB
        </h3>

        <p className="text-lg font-bold text-gray-900 mt-2">
          $579.00
        </p>

        {/* Shipping */}
         <span className="inline-block mt-3 text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          FREE SHIPPING
        </span>

        {/* Stock */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          <span className="text-xs text-gray-600">In stock</span>
        </div>
      </div>
         </div>


  ))}

          </div>
           
   


    

        </div>




    <div className="max-w-7xl mx-auto p-4">
   <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-1">
         {[...Array(4)].map((_, index) => (
       <div className="w-full max-w-sm bg-white rounded-xl shadow-sm p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm font-semibold">AUDIOS & CAMERAS</h2>
        <span className="text-xs text-gray-500 cursor-pointer">
          View All
        </span>
      </div>

      {/* Banner */}
      <div className="relative rounded-xl overflow-hidden mb-6">
        

        <img
          src="/prod43.svg"
          alt="Speaker"
          className=" object-cover"
        />

         <div className="p-4 absolute top-[10%] left-[5%]">
          <p className="text-white text-xs">Best</p>
          <p className="text-white text-lg font-semibold leading-tight">
            Speaker
          </p>
          <p className="text-white text-xs">2023</p>
        </div> 
      </div>

      {/* Divider */}
      <div className="border-t mb-6"></div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-6 text-center">

        {/* Speaker */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <img src="/prod46.svg" alt="" className="object-cover" />
          </div>
          <p className="text-sm font-medium">Speaker</p>
          <p className="text-xs text-gray-500">12 Items</p>
        </div>

        {/* DSLR */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <img src="/prod47.svg" alt="" className="object-cover" />
          </div>
          <p className="text-sm font-medium">DSLR Camera</p>
          <p className="text-xs text-gray-500">9 Items</p>
        </div>

        {/* Earbuds */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <img src="/prod48.svg" alt="" className="object-cover" />
          </div>
          <p className="text-sm font-medium">Earbuds</p>
          <p className="text-xs text-gray-500">5 Items</p>
        </div>

        {/* Microphone */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <img src="/prod49.svg" alt="" className="object-cover" />
          </div>
          <p className="text-sm font-medium">Microphone</p>
          <p className="text-xs text-gray-500">12 Items</p>
        </div>

      </div>
    </div>



  ))}

   </div>

   



    </div>

        

<div className="max-w-7xl mx-auto px-4  bg-[#FFFFFF]">

        {/* Header */}
        <div className="flex items-center gap-5 mb-3 pt-3 pl-2.5 ">
          <h2 className="text-lg font-semibold">YOUR RECENTLY VIEWED</h2>
          <button className="text-sm text-gray-500 hover:text-black">
            View All
          </button>
        </div>

        {/* Products */}
        <Recentlyviewpd/>


   


       
 </div>


<div className="max-w-7xl mx-auto px-4 py-16 hidden md:block ">
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Swoo – #1 Online Marketplace for technology
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-600 text-sm leading-7 max-w-4xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            posuere mi. Quisque iaculis dignissim scelerisque. Morbi condimentum
            sagittis leo vitae tempor. Suspendisse in dolor odio. Sed aliquet ac
            lacus ut luctus. Fusce mattis sollicitudin sem, id lobortis nibh
            ullamcorper a. Donec vehicula dolor et arcu consequat mattis. Fusce
            mattis nec nulla in scelerisque.
          </p>

          <p>
            Morbi pharetra sem mauris, nec aliquet ipsum vestibulum suscipit.
            Curabitur non euismod dui. Proin eget justo eu erat luctus placerat.
            Nam rhoncus ipsum ac enim faucibus, at consequat ante maximus.
            Vestibulum at nibh ac odio ultrices varius. Duis vitae libero mollis,
            lobortis ligula id, varius erat. Sed id odio dictum, laoreet enim ac,
            commodo magna. Praesent sodales porttitor maximus. Sed a lacus felis.
            Maecenas consectetur consequat orci scelerisque malesuada. Fusce vel
            orci eu tortor consequat mattis quis at ante.
          </p>
        </div>

        {/* View All */}
        <div className="mt-8">
          <button className="text-sm font-medium underline hover:text-black transition">
            View All
          </button>
        </div>

</div>

</div>
  )
}

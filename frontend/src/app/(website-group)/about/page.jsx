import React from 'react'
import Link from 'next/link'

export default function() {
  return (
    <div className='w-full bg-gray-50'>
        <div className='max-w-7xl mx-auto py-4'>
            <div className=" bg-white  px-6 py-5 rounded-xl ">
      <div className="flex items-center text-sm text-gray-500 gap-2">

        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>

        <span>/</span>

        <Link href="/pages" className="hover:text-gray-700">
          pages
        </Link>

        <span>/</span>

        <span className="text-black font-medium">
          Contact
        </span>

      </div>
</div>

        </div>

        <div className='max-w-7xl mx-auto px-4 py-4 bg-white'>
            <section className='bg-white'>
                <div>
                 <img src="/aboutbanner.svg" alt="image" className='object-cover'/>   
                </div>

            </section>
 <section className=' grid grid-cols-1 md:grid-cols-2 justify-between py-8 px-3.5 bg-white mb-1.5 border-b-[1px]'>
                <div className='text-2xl  ml-7 text-center md:text-left'>
                    <p className='font-bold'>our purpose is to <span className='text-green-400'>enrich</span></p>
                    <p className='font-bold'><span className='text-green-400'>and enhance lives</span > through</p>
                    <p className='font-bold'>technology</p>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='mt-2'>
                        <h1 className='text-2xl font-bold'>$12,5M</h1>
                        <p>total revenue from</p>
                        <p>2001 - 2023</p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-2xl font-bold'>12K+</h1>
                        <p>orders delivered</p>
                        <p>successful on everyday</p>
                    </div>
                    <div className='mt-2'>
                        <h1 className='text-2xl font-bold'>725+</h1>
                        <p>store and office in U.S</p>
                        <p>and worldwide</p>
                    </div>

                </div>

            </section>

            <section className='grid grid-cols-2 justify-between bg-white mb-2.5'>
                <div>
                    <img src="/about2.svg" alt=""  className='object-cover'/>
                </div>
                <div className='bg-[#E2E4EB] p-10'>
                    <h2 className='text-2xl font-medium mb-4'>We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all.</h2>
                    <p className='mb-9'>
                        Within our markets, millions of people around the world connect,
both online and offline, to make, sell and buy unique goods. We also
offer a wide range of Seller Services and tools that help creative
entrepreneurs start, manage & scale their businesses.
                    </p>

                    <div className=''>
                        <button className='px-5 p-2.5 bg-teal-600 rounded-2xl text-white'> our showreel</button>
                    </div>

                </div>

            </section>

            <section className='pb-5 pt-5 grid grid-cols-3 gap-3 bg-gray-50 mb-2.5'>
                <div className='bg-[#FFFFFF] rounded-md p-5 '>
                    <div className='flex justify-between mb-7'>
                        <div className='text-xl font-bold'>
                            <h2>100% authentic</h2>
                            <h2>products</h2>
                        </div>
                        <div className='w-12 h-12 rounded-full bg-teal-700'>

                        </div>

                    </div>
                    <div>
                        <p>Swoo Tech Mart just distribute 100% authorized products &
                            guarantee quality. Nulla porta nulla nec orci vulputate, id
                            rutrum sapien varius.</p>
                    </div>

                </div>
                 <div className='bg-[#FFFFFF] rounded-md p-5'>
                    <div className='flex justify-between mb-7'>
                        <div className='text-xl font-bold'>
                            <h2>fast</h2>
                            <h2>delivery</h2>
                        </div>
                        <div className='w-12 h-12 rounded-full bg-teal-700'>

                        </div>

                    </div>
                    <div>
                       <p>
                        Fast shipping with a lots of option to delivery. 100%
                        guarantee that your goods alway on time and perserve
                        quality.
                       </p>
                    </div>

                </div>
                 <div className='bg-[#FFFFFF] rounded-md p-5'>
                    <div className='flex justify-between mb-7'>
                        <div className='text-xl font-bold'>
                            <h2>affordable</h2>
                            <h2>price</h2>
                        </div>
                        <div className='w-12 h-12 rounded-full bg-teal-700'>

                        </div>

                    </div>
                    <div>
                       <p>
                        We offer an affordable & competitive price with a lots of
                        special promotions.
                       </p>
                    </div>

                </div>

            </section>


            <section className='p-4'>
                <h2 className=' text-2xl font-bold mb-4'>our mission and vision</h2>
                <p className='text-justify mb-3'>Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget
                    quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                    <div className='pt-3 pb-8 mb-3.5  border-b-[1px]'>
                        <img src="/about3.svg" alt="image" className='object-cover' />
                    </div>

            </section>


            <section className='px-4  pt-4 mb-3 border-b-[1px]'>
                <h2 className='text-2xl font-bold mb-3.5'>from a retail store to the global chain of stores</h2>
                <p className='mb-3.5'>Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.</p>

                <div className='grid grid-cols-2 justify-between gap-2.5'>
                   <div>
                     <div>
                        <p><span className='font-bold'>1997:</span> A small store located in Brooklyn Town, USA</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>1998:</span> It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2000:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2002:</span> Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2004:</span> Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                    </div>
                     <div>
                <p><span className='font-bold text-justify'>2005:</span> The point of using Lorem Ipsum is that it has      a more-or-less normal 
                <p className='ml-9'>distribution of   letters, as opposed to using 'Content here    </p>
                                
                                
                    </p>
                    </div>
                     <div>
                        <p><span className='font-bold text-justify'>2006:</span> There are many variations of passages of Lorem Ipsum available, but the 
                        <p className='ml-9'>majority have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even slightly believable.</p>
                       
                        </p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2010:</span> All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2013:</span> Lorem Ipsum comes from sections 1.10.32</p>
                    </div>

                   </div>
                    <div>
                    
                     <div>
                        <p><span className='font-bold text-justify'>2014:</span> There are many variations of passages of Lorem Ipsum available, but the 
                        <p className='ml-9'>majority have
                        suffered alteration in some form</p>
                        </p>
                    </div>
                    
                     <div>
                        <p><span className='font-bold'>2016:</span> All the Lorem Ipsum generators on the Internet tend to repeat predefined 
                        <p className='ml-9'>chunks as necessary</p>
                        </p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2020:</span> Lorem Ipsum comes from sections 1.10.32</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2021:</span> Making this the first true generator on the Internet</p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2022:</span> Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore 
                        <p className='ml-9'>always free from repetition, injected humour</p>
                        </p>
                    </div>
                     <div>
                        <p><span className='font-bold'>2023:</span> here are many variations of passages of Lorem Ipsum available, but the  </p>
                        <p className='ml-9'> majority have suffered alteration in some form</p>
                    </div>
                   

                   </div>
                </div>
            </section>


 <section className='p-4 mb-6 '>
<div className='flex justify-between px-5 mb-3'>
 <h2 className='text-2xl font-bold'>leaderships</h2>
 <button className='text-[#666666]'>see all</button>

</div>
<div className='p-2.5 grid grid-cols-4 justify-between pb-3.5'>
    <div>
        <img src="/mem1.svg" alt=""  className='object-cover rounded-xl'/>
        <div className='mt-1.5'>
            <h2 className='font-bold'>Henry Avery</h2>
        <p className='text-[#666666]'>Chairman</p>
        </div>
    </div>
    <div>
        <img src="/mem1.svg" alt=""  className='object-cover rounded-xl'/>
        <div className='mt-1.5'>
            <h2 className='font-bold'>Henry Avery</h2>
        <p className='text-[#666666]'>Chairman</p>
        </div>
    </div>
    <div>
        <img src="/mem1.svg" alt=""  className='object-cover rounded-xl'/>
        <div className='mt-1.5'>
            <h2 className='font-bold'>Henry Avery</h2>
        <p className='text-[#666666]'>Chairman</p>
        </div>
    </div>
    <div>
        <img src="/mem1.svg" alt=""  className='object-cover rounded-xl'/>
        <div className='mt-1.5'>
            <h2 className='font-bold'>Henry Avery</h2>
        <p className='text-[#666666]'>Chairman</p>
        </div>
    </div>


</div>


 </section>







        </div>

    <div className='max-w-7xl mx-auto bg-gray-50 mt-6 pb-5'>
    <section>
    <div>
    <img src="/lastabout.svg" alt=""  className='object-cover'/>
    </div>
    </section>
        </div>




    </div>
  )
}

import { getCategories } from '@/api/categoriesapi';

import React from 'react'

export default async function PapularCategories() {
    const categories= await getCategories({limit:5,status:true,is_best:true});
    //console.log(categories)



  return (
    
<div className='max-w-7xl mx-auto p-5 bg-white mb-3 '>
    <h2 className='text-2xl font-bold mb-5 sm:py-3.5'>popular categories</h2>
    <div className='px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-17  pb-3 '>

        {/* pasete */}

{
    categories?.categoryApi.map((data)=>{
        return(
            
              <div key={data._id} className="flex gap-7">
            <div>
              <h2 className="text-md font-medium">{data.name}</h2>   
            <p>{data.count} Items</p> 
             </div>   
             <div>
              {/* <img src="/prod20.png" alt="#" className="object-cover" /> */}
                    <img className="w-8 h-8 rounded-md " src={`${categories?.imagebaseUrl}/${data.image}`} alt={data?.name}/>

              </div>       
            </div>
        )
        
    })
}
            
        

            


        

    </div>

</div>
  )
}

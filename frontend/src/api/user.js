 import {cookies}  from "next/headers";

 // cookies ko direct server side iss trh se kiya jata h  

 
 async function getuser(){
     const cookiesStore= await cookies();
  const cokiesStoretoken = cookiesStore.get("user_token")?.value || null;

  if(cokiesStoretoken){
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}userlogin/getcookies`,{
        headers:{
           Authorization: cokiesStoretoken


        },
        
      })

      const response =await res.json()


      if(response.success){
        return response.deta

      }
      
    } catch (error) {
      console.log(error,"error mg")
      return null
      
    }
  }

}


  async function logout(){
     const cookiesStore= await cookies();
  const cokiesStoretoken = cookiesStore.get("user_token")?.value || null;

  if(cokiesStoretoken){
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}userlogin/logout`,{
        headers:{
          Authorization: cokiesStoretoken
        }
      });
      console.log(res)
     
      
    } 
    catch (error) {
      return null
      
    }
  }

}

export {getuser,logout}
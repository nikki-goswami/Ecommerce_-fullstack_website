 import { axiosbaseURL } from "@/helper/helper"
 
 
 const getColors=(queryObject={})=>{
        const query= new URLSearchParams();
    if(queryObject.limit){
        query.append("limit",queryObject.limit)
    }
     if(queryObject.status){
        query.append("status",queryObject.status)
    }
    

   return axiosbaseURL.get(`color/findapi?${query.toString()}`).then(
        (response)=>{
        return response.data

        }
    ).catch(
        (error)=>{
return null
        }
    )

 }
 const getcolorByid=(id)=>{
   return axiosbaseURL.get(`color/${id}`).then(
        (response)=>{
        return response.data

        }
    ).catch(
        (error)=>{
return null
        }
    )

 }

 export {getColors,getcolorByid};
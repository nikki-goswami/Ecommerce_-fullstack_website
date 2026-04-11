 import { axiosbaseURL } from "@/helper/helper"
 
 
 const getbrand=(queryObject={})=>{
 const query= new URLSearchParams();

  if(queryObject.limit){
        query.append("limit",queryObject.limit)
    }
     if(queryObject.status){
        query.append("status",queryObject.status)
    }
     if(queryObject.home){
        query.append("home",queryObject.home)
    }
     if(queryObject.is_top){
        query.append("is_top",queryObject.is_top)
    }
     if(queryObject.is_best){
        query.append("is_best",queryObject.is_best)
    }



   return axiosbaseURL.get(`brand/findapi/?${query.toString()}`).then(
        (response)=>{
        return response.data.deta

        }
    ).catch(
        (error)=>{
return null
        }
    )

 }
 const getbrandByid=(id)=>{
   return axiosbaseURL.get(`brand/${id}`).then(
        (response)=>{
        return response.data

        }
    ).catch(
        (error)=>{
return null
        }
    )

 }

 export {getbrand,getbrandByid};
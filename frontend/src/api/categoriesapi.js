 import { axiosbaseURL } from "@/helper/helper"
 
 
 const getCategories=(queryObject={})=>{
    //console.log(queryObject)
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
   // console.log(query,"query")
  // return axiosbaseURL.get("category/findapi?status=true").then( ese query pass kiya jata h
   return axiosbaseURL.get(`category/findapi/?${query.toString()}`).then(

        (response)=>{
        return response.data.deta

        }
    ).catch(
        (error)=>{
return null
        }
    )

 }
 const getCategoriesByid=(id)=>{
   return axiosbaseURL.get(`category/${id}`).then(
        (response)=>{
        return response.data

        }
    ).catch(
        (error)=>{
            console.log(error,"catg")
return null
        }
    )

 }

 export {getCategories,getCategoriesByid};
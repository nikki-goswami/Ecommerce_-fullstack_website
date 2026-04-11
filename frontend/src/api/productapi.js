 import { axiosbaseURL } from "@/helper/helper"
 
 
 const getProducts=(queryObject={})=>{

     const query= new URLSearchParams();
    if(queryObject.limit){
        query.append("limit",queryObject.limit)
    }
     if(queryObject.status){
        query.append("status",queryObject.status)
    }
     if(queryObject.show_home){
        query.append("show_home",queryObject.show_home)
    }
     if(queryObject.stock){
        query.append("stock",queryObject.stock)
    }
     if(queryObject.is_best_seller){
        query.append("is_best_seller",queryObject.is_best_seller)
    }

 if(queryObject.is_featured){
        query.append("is_featured",queryObject.is_featured)
    }


if(queryObject.is_hot){
        query.append("is_hot",queryObject.is_hot)
    }
if(queryObject.is_top){
        query.append("is_top",queryObject.is_top)
    }

if(queryObject.min_price && queryObject.max_price){
      query.append("min_price",queryObject.min_price)
    query.append("max_price",queryObject.max_price)

    }


    // for categoryslug
    if(queryObject.productSlug){
        query.append("productSlug",queryObject.productSlug)
    }

   // console.log(queryObject)

// for color ids
if (queryObject.color_id) {
    query.append("color_id", queryObject.color_id);
}
// for brand name 
if (queryObject.brand_slug) {
    query.append("brand_slug", queryObject.brand_slug);
}

// for sort
if (queryObject.sort) {
    query.append("sort", queryObject.sort);
}



   return axiosbaseURL.get(`product/findapi/?${query.toString()}`).then(
        (response)=>{
            if(response.data.success==true){
                        return response.data.deta

            }
            else{
                return []
            }

        }
    ).catch(
        (error)=>{
        return []
        }
    )

 }

 const getProductById=(id)=>{
   return axiosbaseURL.get(`product/${id}`).then(
        (response)=>{
            // if(response.deta.success==true){
                return response.data
          //  }
            // else{
            //     return {}  // single object h islye  object retrun krenge
            // }
        

        }
    ).catch(
        (error)=>{
return null
        }
    )

  }



 export {getProducts,getProductById};
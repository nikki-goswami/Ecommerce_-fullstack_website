import { getProductById } from '@/api/productapi';
import MultipleImage from '@/components/admincomponent/MultipleImage';
import React from 'react'

export default  async function page({params}) {
    const resolvePromise= await params;
    const productId = await getProductById(resolvePromise?.productId)
  //  console.log(productId, "id")
    //console.log(productId.deta,"productid")
  return (
    <MultipleImage productData={productId ?.deta}/>
  )
}

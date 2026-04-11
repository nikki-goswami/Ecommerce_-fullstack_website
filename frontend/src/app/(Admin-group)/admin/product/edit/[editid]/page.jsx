import { getProductById } from '@/api/productapi';
import ProductEdit from '@/components/admincomponent/ProductEdit';

import React from 'react'

export default async function page({params}) {
    const reslovepromise= await params;
  const editcategory= await getProductById(reslovepromise.editid);
  //console.log(editcategory.deta)
  const deta= editcategory!=null ? editcategory.deta :{};



  return (
    <ProductEdit  editdeta={deta}/>
  )
}

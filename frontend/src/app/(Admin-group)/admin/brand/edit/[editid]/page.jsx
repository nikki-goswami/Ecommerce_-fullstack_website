import { getbrandByid } from '@/api/brand';
import BrandEdit from '@/components/admincomponent/BrandEdit';

import React from 'react'

export default async function page({params}) {
    const reslovepromise= await params;
  const editcategory= await getbrandByid(reslovepromise.editid);
  //console.log(editcategory.deta)

  
  const deta= editcategory!=null ? editcategory.deta :{};



  return (
    <BrandEdit  editdeta={deta}/>
  )
}

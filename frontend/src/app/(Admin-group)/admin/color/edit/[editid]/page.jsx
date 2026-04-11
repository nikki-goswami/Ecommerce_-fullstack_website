import { getcolorByid } from '@/api/colors';
import EditCategory from '@/components/admincomponent/EditCategory'

import React from 'react'

export default async function page({params}) {
    const reslovepromise= await params;
  const editcategory= await getcolorByid(reslovepromise.editid);
 //console.log(editcategory.deta)
  const deta= editcategory!=null ? editcategory.deta :{};



  return (
    <EditCategory  editdeta={deta}/>
  )
}

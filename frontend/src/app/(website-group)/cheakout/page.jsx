import { getuser } from '@/api/user'
import Cheackoutpage from '@/components/websitecomponent/Cheackoutpage'
import React from 'react'

export default async function page() {
  const useraddress= await getuser()
  return (
    <Cheackoutpage useraddress={useraddress}/>
  )
}

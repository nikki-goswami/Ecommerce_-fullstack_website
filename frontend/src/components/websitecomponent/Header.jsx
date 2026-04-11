import React from 'react'
import Topheader from './Topheader';
import Middleheader from './Middleheader';
import Mainheader from './Mainheader';




export default function Header({userData}) {
  return (
    <header className=" w-full border-b sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <Topheader />
      <Middleheader userData= {userData}/>

      
      {/* Search Bar */}
      <Mainheader/>
     
    </header>
  );
}

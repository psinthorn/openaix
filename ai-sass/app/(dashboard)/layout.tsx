import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full relative'>

      {/* Sidebar */}
      <div className='hidden md:flex md:flex-col md:w-72 md:inset-y-0 z-[80] md:fixed  md:bg-gray-800 md:text-white md:shadow-md'>
       
      </div>
      {/* End sidbar */}

      <main className='md:ml-72'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
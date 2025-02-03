import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex items-center p-4 justify-between'>
      <div>
        <Button variant="ghost" size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </div>
      <div className='justify-end'>
        <UserButton />
      </div>     
    </div>
  )
}

export default Navbar
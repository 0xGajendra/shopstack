import { useProductStore } from '@/store/productStore';
import { ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link, useResolvedPath } from 'react-router'
import { ModeToggle } from './mode-toggle';
// import { ModeToggle } from './mode-toggle'

const Navbar = () => {

    const {pathname} =  useResolvedPath();
    const isHomePage = pathname === "/"
    const {products} = useProductStore();

    console.log("NavBar", products.lenght);
    
    

  return (
    <div className='bg-background backdrop-blur-lg border-b border-accent sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between px-4 min-h-[4rem] items-center'>
            {/* logo section */}
            <div className='flex justify-between px-4 min-h-[4rem] items-center'>
                <Link to="/" className="hover:opacity-60 transition-opacity">
                    <div className='flex items-center gap-2'>
                        <ShoppingBagIcon className='size-9'/>
                        <span className='font-bold tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground'>
                            SHOPSTACK
                        </span>

                    </div>
                </Link>
            </div>
                {/* Right Section */}
            <div className='flex items-center gap-4'>
                {/* need to fix this */}
                {/* <ModeToggle/>  */}
                <ModeToggle/>
                {isHomePage && (
                <div className=''>
                    <div className='px-4 gap-5 justify-center flex items-center py-3 rounded-xl hover:opacity-80 transition-opacity bg-accent'>
                        <ShoppingCart className='size-6'/>
                        <span className='text-accent-foreground'>
                            {products.length}
                        </span>
                    </div>
                </div>
                )}
            </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { navBar } from '../../constant'
import Link from 'next/link';
console.log(navBar);


const Header = () => {
    return (
       
        <div className='flex justify-between'>
        <h1>Todo APP</h1>
          <nav className='flex gap-8'>
            {navBar.map((navItem)=>(
                 <Link href={`${navItem.nav.toLowerCase()}`}>{navItem.nav}</Link>   
            ))} 
          </nav>
        </div>
    
    )
}

export default Header

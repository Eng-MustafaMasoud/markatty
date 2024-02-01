import React from 'react'
import logo from '../assets/images/image 5.png'
const Header = () => {
  return (
    <header>
        <div className="w-[max-content] py-4  ">
            <img src={logo} alt="logo" className='object-contain' />
        </div>
        
    </header>
  )
}

export default Header
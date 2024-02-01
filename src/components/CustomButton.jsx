import React from 'react'

const CustomButton = ({children}) => {
  return (
    <button type="submit" className='hover:opacity-95 bg-[#7244c8] py-1.5 w-full rounded-lg text-white'>{children}</button>
  )
}

export default CustomButton
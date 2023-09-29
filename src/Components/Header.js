import React from 'react'
import { FiMessageSquare } from "react-icons/fi"
import { HiLanguage } from "react-icons/hi2"
import { BsMoon } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { BiBell } from "react-icons/bi"

const Header = () => {
    return (
        
        <div className=' w-full  bg-white flex justify-end mt-4 items-center py-2 gap-4  rounded-md'>
            <HiLanguage className='w-5 h-5  object-contain aspect-square' />
            <FiMessageSquare className='w-5 h-5  object-contain aspect-square'/>
            <BsMoon className='w-5 h-5  object-contain aspect-square' />
            <BiSearch className='w-5 h-5  object-contain aspect-square'/>
            <BiBell className='w-5 h-5  object-contain aspect-square' />
            <div className='flex items-center gap-1'>
                <p>Hi, Thomas</p>
                <img className=' w-8 aspect-square rounded-full mr-2 object-contain ' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60' alt='' />
            </div>
        </div>
    )
}

export default Header

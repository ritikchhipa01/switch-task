

import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"

const ProductItem = (props) => {
    return (
        <>
        <div className='flex  items-center w-full mt-3'>
            <p className='ml-10'>{}</p>
            <input type='text' name='search Product' placeholder='Search Product name, sku, ref, stock status' className='ml-5 outline-none border-2 border-gray-300 px-2 py-1 w-[40%] rounded-md ' />
            <input type="text" pattern="[a-zA-Z0-9]+" name='Unit Cost' placeholder='Cost' className=' ml-28 outline-none border-2 border-gray-300 px-2 py-1 w-[10%] rounded-md  text-center' />
            <input type="text" pattern="[a-zA-Z0-9]+" name='Quantity' placeholder='Qty' className=' ml-20 outline-none border-2 border-gray-300 px-2 py-1 w-[5%] rounded-md text-center' />
           <div className='flex flex-col'>
            <div className='flex gap-4 items-center'>
                <input type="text" pattern="[a-zA-Z0-9]+" name='Unit Cost' placeholder='L Total' className=' ml-12 outline-none border-2 border-gray-300 px-2 py-1 max-w-[180px] rounded-md text-right' />
                <AiOutlineDelete />
            </div>
            <div className='flex text-[11px] ml-12 gap-5 font-bold'>
              <p className='text-[#b1daf2]'>Add VAT/discount</p>
              <p className=' text-[#b0a0c6]'>9% VAT, 10% Disc</p>
            </div>
            </div>
            
        </div>
        <hr className=' mx-10 my-3 bg-gray-200 h-[2px]'/>
        </>
    )
}

export default ProductItem

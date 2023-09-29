import React, { useState } from 'react'
import ProductItem from './ProductItem'

const ProductTable = () => {

    const [addItem, setAddItem] = useState([<ProductItem />]);

    const [count, SetCount] = useState(1);

    const onAddBtnClick = () => {
        const abc = [...addItem, []]
        setAddItem(abc);
        const val = count + 1;
        SetCount(val)
    }
    return (
        <div className=' mt-8 text-black'>
            <div className=' bg-[#D3ECF0] rounded-md flex px-10 mx-5 py-2'>
                <p className='w-[60%]'>Product Name</p>
                <p className='w-[20%]'>Unit Cost</p>
                <p className='w-[10%]'>Qty.</p>
                <p className='w-[20%]'>Line Total</p>
            </div>
            <div>

                {
                    addItem.map((index) => {
                        return (
                            <ProductItem key={index} />)
                    })
                }

                <div className='flex flex-col items-end px-10'>
                    <button
                        onClick={onAddBtnClick}
                        className='flex items-center px-2 py-1 gap-1 bg-[#29677C] text-white rounded-md'
                    >
                        + Add
                    </button>
                    <div className='flex flex-col gap-8 text-xl font-bold mt-10'>
                        <div className='flex gap-10'>
                            <p className='text-[#29677C]'>Subtotal :</p>
                            <p className='text-[#29677C]'>TZS 200.00</p>
                        </div>
                        <p className=' text-[#80c2e9] underline text-xs'>Add VAT/Discount on overall order</p>
                        <div className='flex gap-10'>
                            <p className='text-[#29677C]'>Amount :</p>
                            <p className='text-[#29677C]'>TZS 210.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductTable

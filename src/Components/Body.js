import React from 'react'
import Invoice from './Invoice'

const Body = () => {
  return (
    <div className='w-full py-3'>
      <div className=' flex justify-between'>
        <h4><span className=' font-bold text-xl'>Create Invoice |</span> create a purchase order using our template for tracking purpose.</h4>
        <button className='px-6 py-2 bg-[#296877] text-white rounded-md  text-xl'>Add Attachments</button>
      </div>
      <Invoice/>
    </div>
  )
}

export default Body

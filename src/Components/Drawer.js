import React from 'react'
import {HiOutlineMenu} from "react-icons/hi"
import Select from 'react-select';
const Drawer = () => {

  const options = [
    { value: 'Purchases', label: 'Purchases' },
    { value: 'Online Tracking', label: 'Online Tracking' },
    { value: 'Payments', label: 'Payments' },
    { value: 'invoice', label: 'invoice' },
  ];
  const options1 = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Online Tracking', label: 'Online Tracking' },
    { value: 'Payments', label: 'Payments' },
    { value: 'invoice', label: 'invoice' },
  ];
  return (
    <div className=' w-[12vw] h-screen bg-white p-2'>
      <div className='flex justify-between items-center text-[#296877]'>
        <h3 className="text-xl font-semibold">Switch</h3>
        <HiOutlineMenu className='w-6 h-5  hover:cursor-pointer'/>
      </div>
      
      <div className=' flex  flex-col mt-5 w-full pl-3 text-lg text-[#818284] gap-5 '>
        <p>DashBoard</p>
        <p>Switch Cred </p>
        <p>Inventory</p>
        <p>Supplier</p>
        <p>Customer</p>
        <div> Switch Businesses
        

        <Select options={options}
          className='outline-none bg-[#7e9da8]'
        />
        <Select defaultInputValue='Sales' options={options1} />
        
        

        </div>
      </div>

      
    </div>
  )
}

export default Drawer

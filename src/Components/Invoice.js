import React, { useRef, useState } from 'react'
import ProductTable from './ProductTable';

import JsPDF from "jspdf";
import html2canvas from "html2canvas";



const Invoice = () => {
    const pdfRef = useRef();
    const [selectImage, setSelectedImage] = useState(null);

    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new JsPDF('p', 'mm', 'a4', true);
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio);
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('invoice.pdf');

        });
    };

    return (
        <div className='bg-white  rounded-md  text-black'>
            <div className='w-full my-5 bg-white  rounded-md  text-black' ref={pdfRef}>
                <div className=' flex justify-around pt-10'>
                    <div className=' flex gap-2'>
                        {selectImage && (
                            <div>
                                <img
                                    alt="not found"
                                    // width={"40px"}
                                    className='w-[40px] object-contain'
                                    src={URL.createObjectURL(selectImage)}
                                />
                                <br />
                                <button onClick={() => setSelectedImage(null)}>Remove</button>
                            </div>
                        )}
                        {!selectImage && <input
                            type="file"
                            name="file-input"
                            className=' '
                            onChange={(event) => {
                                //   console.log(event.target.files[0]);
                                setSelectedImage(event.target.files[0]);
                            }}
                        />
                        }
                    </div>
                    {/* <label id="file-input-label" for="file-input">Drag your Logo here or Upload file here</label> */}
                    <div className=' text-3xl font-bold'>Invoice</div>
                    <input type='text' placeholder='This is invoice no' className=' outline-none border-2 border-gray-300 px-2 h-10 text-black  rounded-md w-[200px] ' />
                </div>

                {/* section 2 */}
                <div className='flex justify-between w-full mt-10 '>

                    <div className='w-[50%] pl-10 flex flex-col gap-4'>
                        <div>
                            <label for="DateIssued" className=' font-bold'>Date Issued:</label>
                            <input type="date" id="DateIssued" name="DateIssued" className='ml-4 outline-none border-2 border-gray-300 px-2   rounded-md w-[200px] py-1' />
                        </div>
                        <div>
                            <label for="DueDate" className=' font-bold'>Due Date:</label>
                            <input type="date" id="DueDate" name="DueDate" className='ml-8 outline-none border-2 border-gray-300 px-2  rounded-md w-[200px] py-1' />
                        </div>
                        <div>
                            <label className=' font-bold'>Invoice To:</label>
                            <select className='ml-7 outline-none border-2 border-gray-300 px-2  rounded-md w-[200px] py-4 z-50'>
                                <option value={"Tony"}>Tony Herrera</option>
                            </select>
                        </div>
                        <div className='ml-28' >
                            <p className=' text-[#296877] font-semibold'>Tony Herrera</p>
                            <p className=' text-[#999A9C] font-semibold'>Leonard-Garcia and Sons <br /> 5345 Robert Squares, Denmark <br /> 0775 405 789 | smithtiffany@powers.com</p>
                        </div>


                    </div>
                    <div className='w-[50%] text-right pr-10 flex flex-col gap-4'>
                        <div>
                            <label for="lpoNo">LPO No:</label>
                            <input type="number" id="lpoNo" name="lpoNo" className='ml-4 outline-none border-2 border-gray-300 px-2   rounded-md w-[200px] py-1' />

                        </div>
                        <div>
                            <label for="invoiceNo">Invoice No:</label>
                            <input type="number" id="invoiceNo" name="invoiceNo" className='ml-4 outline-none border-2 border-gray-300 px-2   rounded-md w-[200px] py-1' />
                        </div>
                        <div>
                            <label for="totalAmt">Total Amount:</label>
                            <input type="number" id="totalAmt" name="totalAmt" className='ml-4 outline-none border-2 border-gray-300 px-2   rounded-md w-[200px] py-1' />
                        </div>
                    </div>
                </div>
                <ProductTable />

                <div className='flex flex-col mx-10'>
                    <label for="notes">
                        Notes:
                    </label>
                    
                    <textarea id="notes" name="notes" rows="4" cols="50"
                     className='w-full   px-2 border   outline-none border-gray-300 mt-3'
                    >
                    Add notes or terms and Conditions
                   </textarea>
                </div>

            </div>
            <div className='flex justify-end gap-5 mx-10 mt-10 pb-10'>
                <button className=' bg-[#29677C] text-white px-8 py-2 rounded-md'>Cancel</button>
                <button onClick={downloadPdf} className=' bg-[#F4B100] text-white px-8 py-2 rounded-md'>Save</button>
            </div>

        </div>
    )
}

export default Invoice

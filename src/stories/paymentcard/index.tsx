import React from 'react'
import { currencyCalculation } from 'src/utils/currencyCalculation'

function Paymentcard({datas}) {
    
  const calculationdata =  datas.map((data) =>{ 
    return (
      <div className="grid grid-cols-2" key={data.title} >
      <h2  className='text-[#545456] font-Brandon font-normal text-sm md:tracking-wider whitespace-nowrap' >{data.title}</h2  >
      <h2  className='text-[#545456] font-Brandon font-normal text-sm place-self-end' >{data.price}</h2>
   </div>  
    )
 } ) 
  return (
    <div className=' w-full   xl:w-[350px]  ' >
    <h2 className="text-pantonepink">SECURE PAYMENT</h2>
    <h2 className='uppercase -tracking-[0.64px] text-[32px] pb-[27.5px] font-light' >summary</h2>  
    <div className="grid grid-cols-1 gap-4 border-b-2 pb-4 ">
      {calculationdata}
    </div>
    <div className="grid  grid-cols-2 pt-6 ">
        <h2 className="">Total Price</h2>
        <h2 className='place-self-end' >{currencyCalculation(datas)}</h2>
    </div>
    </div>
  )
}

export default Paymentcard
import React from 'react'
import Image from 'next/image'
import ad from '../../../public/images/architectural-digest.png'
import platform from '../../../public/images/plateform.png'
import traveller from '../../../public/images/traveller.png'
import hindugroup from '../../../public/images/the-hindu-group.png'

export default function Sponser () {
  const data = [hindugroup, platform, traveller, ad]
  return (
    <div className='flex max-[720px]:flex-col gap-10 justify-evenly py-12 items-center '>
      {data?.map((el, idx)=> (
        <div key={idx}>
            <Image src={el} alt="" />
        </div>
      ))}
    </div>
  )
}


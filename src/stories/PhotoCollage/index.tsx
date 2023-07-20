import Image from 'next/image';
import React from 'react'
import { Iphotocollege } from './types';

function PhotoCollage({ title, description, centerimage, leftimage, rightimage } : Iphotocollege) {
    return (
        <div className='relative overflow-hidden pt-4 p-8 md:p-0 ' >
            <div className=" w-full flex flex-col justify-center text-center gap-8 md:w-[596px] m-auto">
                <div className=" text-[40px] sm:text-[54px] font-light">{title}</div>
                <p className='  sm:w-full leading-[22px] font-normal sm:text-xl font-centaur sm:leading-[34px]' >{description}</p>
                <div className="hidden sm:block">
                    <button className=' bg-pantonepink font-Brandon py-3 px-20 text-white ' >KNOW MORE</button>
                </div>
                <div className="w-full mb-8">
                    <Image
                        width={"100"}
                        height={"100"}
                        alt='altag'
                        src={centerimage}
                        loading='lazy'
                        className='custom-shadow w-full'
                    />

                </div>

            </div>
            <Image
                width={"100"}
                height={"100"}
                alt='altag'
                className=' hidden absolute top-1/4 -left-[10%]   w-[533px] 2xl:-left-[10%] xl:-left-[15%]   lg:-left-[25%]  lg:block custom-shadow'
                src={leftimage}
                loading='lazy' />
            <Image
                width={"100"}
                height={"100"}
                alt='altag'
                className=' hidden absolute top-1/4 -right-[10%]  w-[533px] 2xl:-right-[10%] xl:-right-[15%] lg:-right-[25%] lg:block custom-shadow'
                src={rightimage}
                loading='lazy' />


        </div>
    )
}

export default PhotoCollage;
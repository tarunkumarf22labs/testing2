/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import MediaListing from 'src/stories/MediaListing'
import { mediaImages } from 'src/data/constants'
import Contactform from 'src/stories/contactusform'
function Contact() {
    const reusedStyle = "w-full flex flex-col justify-center items-center";
    const reusedstyleheading = "tracking-[4.2px] text-white font-normal uppercase";
    const reusedstylecontent = "text-xl font-normal font-centaur text-white pb-8 whitespace-nowrap";
    const reusedContentparagraph = "text-lg font-normal  text-white  text-center"
    return (
        <Layout title="LuxUnlock">
            <>
                <div className="relative text-center md:-mt-[100px] h-[480px] md:h-screen" >
                    <Image
                        alt='baannerimage'
                        width={0}
                        height={0}
                        src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/Picnic_on_the_Lawns_b4a2953158.jpg"
                        className="shadow-xl w-full h-full object-cover"
                        sizes="100vw"
                    />
                    <div className="flex  top-[50%] justify-center absolute flex-col mx-auto sm:top-[45%] inset-x-0 max-w-[830px]">

                        <h4 className='text-[14px]  font-normal pb-5 uppercase tracking-[4.2px] text-[#8A1E61] ' >Contact us</h4>
                        <h3 className=' text-2xl  sm:text-3xl md:text-4xl  lg:text-5xl font-sans font-[330] uppercase tracking-[1px]  ' >We’d love to hear from you</h3>
                    </div>
                </div>
                <div className="bg-[#8A1E61]  ">
                    <div className={`${reusedStyle} p-[5rem] `}>
                        <h2 className={reusedstyleheading} >Location</h2>
                        <h3 className={reusedstylecontent} >Visit us Mon - Fri from 8am to 5pm.</h3>
                        <p className={reusedContentparagraph}  >LuxUnlock Private Limited, B-4, RM Towers, 108 Chamiers Road, Chennai 600 018, India</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 mygradient">
                        <div className={`${reusedStyle} pt-[60px] pb-[80px]  mygradientleft `}>
                            <h2 className={reusedstyleheading} >Support</h2>
                            <h3 className={reusedstylecontent} >Our friendly team is here to help</h3>
                            <p className={reusedContentparagraph} >+91 98988 55663 | +91 89898 60606</p>
                        </div>
                        <div className={`${reusedStyle} p-[60px] pb-[80px] mygradientmobile sm:border-l-0 `}>
                            <h2 className={reusedstyleheading} >Sales</h2>
                            <h3 className={reusedstylecontent} >Question or query? Get in touch!</h3>
                            <p className={reusedContentparagraph}>reservations@luxunlock.com</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 lg:order-1  flex flex-col w-full">
                        <Contactform onSubmit={() => { }} />
                    </div>
                    <div className="order-1 lg:order-2">
                        <Image
                            alt='baannerimage'
                            width={0}
                            height={0}
                            src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/Picnic_on_the_Lawns_b4a2953158.jpg"
                            className="shadow-xl w-full h-full object-cover"
                            sizes="100vw"
                        />
                    </div>
                </div>
                <MediaListing mediaImages={mediaImages} />
            </>
        </Layout>
    )
}

export default Contact
import React from 'react';
import Image from 'next/image';

interface IHomeOwnersList {
  homeOwnersListProps: string[];
}

const HomeOwnersList = ({homeOwnersListProps}:IHomeOwnersList) => {
  return (
    <>
    {
        homeOwnersListProps.map((ele, id) => {
            return (
                <div key={id} className={`flex items-start justify-start ${id !== 0 && 'mt-16'}`}>
                    <div className='relative w-1/12 top-1'>
                     <Image src='images/homeOwnersList.svg' alt='logo' width={20} height={20}/>
                    </div>
                    <div className='w-11/12 '>
                    <p className='text-[#18181B] text-xl '>{ele}</p>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default HomeOwnersList

{/* <div style={{width: 578, color: '#18181B', fontSize: 20, fontFamily: 'Brandon Grotesque', fontWeight: '390', lineHeight: 26, letterSpacing: 0.40, wordWrap: 'break-word'}}>Do you have a beautiful vacation home that was once used by you extensively and exclusively for yourself, but now lies idle for long periods of time?</div> */}
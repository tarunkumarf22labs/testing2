import React from 'react';
import Image from 'next/image';

interface IHomeOwnersList {
  homeOwnersListProps: string[];
}

const HomeOwnersList = ({homeOwnersListProps}:IHomeOwnersList) => {
  return (
    <>
    {
        homeOwnersListProps?.map((ele, id) => {
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
  );
};

export default HomeOwnersList;


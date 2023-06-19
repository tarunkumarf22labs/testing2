import React from 'react'
import Image from "next/image";
import styles from './GalleryView.module.css'

export default function GalleryView({data}) {
  return (
    <div className={styles.container}>
      {data?.map((el, idx)=> (
          <div key={idx} className={styles.flexDiv}>
            <Image onClick={el?.onClick} className='cursor-pointer' src={el.url} alt="" />
            <p className='font-sans text-xl leading-7 text-[#18181B]'>{el.title}</p>
          </div>
      ))}
    </div>
  )
}


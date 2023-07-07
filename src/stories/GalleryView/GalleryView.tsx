import React from "react";
import Image from "next/image";
import styles from "./galleryView.module.css";

interface ImageGalleryProps {
  data: IImageGallery[];
}
interface IImageGallery {
  title: string;
  url: string;
  type: string;
  alt: string;
  width: number;
  height: number;
  onClick: () => void;
  selectVilla: (title: any, image: any, width: number, height: number) => void;
}

export default function GalleryView({ data }: ImageGalleryProps) {

  return (
    <div className={styles.container}>
      {data?.map((el, idx) =>
        data.length % 2 === 1 && idx === data.length - 1 ? null : (
          <div key={idx} className={styles.flexDiv}>
            <Image
              onClick={() => {
                el?.onClick();
                el?.selectVilla(el?.title, el?.url, el?.width, el?.height);
              }}
              src={el.url}
              alt={el.alt}
              width={el.width}
              height={el.height}
              className="cursor-pointer w-full h-[400px]"
            />
            <p className="font-sans text-xl leading-7 text-[#18181B]">
              {el.title}
            </p>
          </div>
        )
      )}
      {data?.length % 2 === 1 && (
        <div className={styles.flexDiv}>
          <Image
            onClick={() => {
              data[data.length - 1]?.onClick();
              data[data.length - 1].selectVilla(
                data[data.length - 1].title,
                data[data.length - 1].url,
                data[data.length - 1].width,
                data[data.length - 1].height
              );
            }}
            src={data[data.length - 1].url}
            alt={data[data.length - 1].alt}
            width={data[data.length - 1].width}
            height={data[data.length - 1].height}
            className="cursor-pointer w-full h-[500px]"
          />
          <p className="font-sans text-xl leading-7 text-[#18181B]">
            {data[data.length - 1].title}
          </p>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Filter from 'src/stories/Filter/Filter';
import GalleryView from 'src/stories/GalleryView/GalleryView';
import Sponsor from '@/components/Sponsor/Sponsor';
import Modal from 'src/stories/Modal/Modal';

interface ImageGalleryProps {
  images: IImageGallery[];
}
interface IImageGallery {
  title: string;
  url: string;
  type: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageGallery(props: ImageGalleryProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [galleryViewProps, setGalleryViewProps] = useState<
    {
      title: string;
      url: string;
      type: string;
      alt: string;
      width: number;
      height: number;
      onClick: () => void;
      selectVilla: (title: any, image: any, width: any, height: any) => void;
    }[]
  >();
  const [villaSelected, setVillaSelected] = useState({
    title: '',
    image: '',
    width: 0,
    height: 0
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const selectVilla = (title, image, width, height) => {
    setVillaSelected({
      title,
      image,
      width,
      height
    });
  };

  const getGalleryViewInitialState = (images) => {
    let filteredData = images.map((ele) => {
      return {
        title: ele.title,
        url: ele.url,
        type: ele.type,
        alt: ele.alt,
        width: ele.width,
        height: ele.height,
        onClick: toggleModal,
        selectVilla: selectVilla
      };
    });
    return filteredData;
  };
  useEffect(() => {
    if (currentFilter === 'all') {
      setGalleryViewProps(getGalleryViewInitialState(props.images));
    } else {
      let filteredData = props.images.filter((ele) => {
        return ele.type === currentFilter;
      });
      setGalleryViewProps(getGalleryViewInitialState(filteredData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter]);
  return (
    <div>
      <div>
        <div className="bg-[#F8F8F9] py-16">
          <Filter
            options={[
              'all',
              'Interior',
              'Indoor Kitchen',
              'Exterior',
              'Living Room',
              'Master Bedroom',
              'Bathroom'
            ]}
            setCurrentFilter={setCurrentFilter}
            currentFilter={currentFilter}
            inGallery={true}
          />
          <GalleryView data={galleryViewProps} />
        </div>
        <Sponsor />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={villaSelected.title}
        parentDivStyle="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen px-6 overflow-y-scroll bg-gray-900 bg-opacity-50 md:px-0"
      >
        <Image
          src={villaSelected.image}
          alt=""
          width={villaSelected.width}
          height={villaSelected.height}
          className="w-full h-[400px]"
        />
      </Modal>
    </div>
  );
}

import useIsMobile from '@/hooks/useIsMobile';
import React, { useState } from 'react';
import {
  SearchLocationProps,
  SearchedLocationsProps,
  SearchedVillaCardProps
} from 'src/Props/Search';
import Map from 'src/stories/Map';
import Search from 'src/stories/Search';
import SearchedVillaCard from 'src/stories/SearchedVillaCard';
import BottomSheet from 'src/stories/bottomsheet';
import MobileSearch from 'src/stories/mobilesearch';
import { IMobileMap } from './types';

function MobileMap({
  location,
  data,
  villasResult,
  handleClick,
  cardTopPosition
}: IMobileMap) {
  const isMobile = useIsMobile();
  const [isOpen, setOpen] = useState<boolean>(true);
  const [showSearch, setshowSearch] = useState<boolean>(false);

  const handlemodalnopen = () => {
    setOpen(true);
  };

  function handleshowSearch() {
    setshowSearch((prev) => !prev);
  }
  return (
    <div className=" w-full h-screen xl:block xl:w-[48%] xl:h-[700px] xl:sticky top-20">
      <div className="fixed w-full z-[1000] top-0 bg-white p-3 ">
        {/*  location is showing string | string[]  please remove it   */}
        <MobileSearch onclick={handleshowSearch} text={location as string} />
      </div>

      {showSearch && (
        <>
          <div
            className="fixed w-full h-full inset-0 z-[1000000] "
            onClick={handleshowSearch}
          ></div>
          <div className=" z-[1000000] absolute w-full top-[50px]">
            <Search
              locations={SearchLocationProps(
                data.states,
                data.countries,
                data.cities
              )}
              handleshowSearch={handleshowSearch}
            />
          </div>
        </>
      )}
      <Map
        markers={SearchedLocationsProps(villasResult)}
        highlight={cardTopPosition}
        handleClick={handleClick}
        zoomdata={4.8}
        handlemodalnopen={handlemodalnopen}
      />
      {isMobile && (
        <BottomSheet isOpen={isOpen} handleclose={() => setOpen(false)}>
          {villasResult?.data.map((ele, idx) => {
            return (
              <div
                className="w-full m-auto sm:max-w-2xl"
                key={idx}
                id={`searched-villa-card-${idx}`}
              >
                <SearchedVillaCard {...SearchedVillaCardProps(ele as any)} />
              </div>
            );
          })}
        </BottomSheet>
      )}
    </div>
  );
}

export default MobileMap;

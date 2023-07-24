import { villaInterface } from 'src/Interface';
import { ILocations, IVillaResultInterface } from 'src/Interface/Search';
import { getFilteredImage, getThumbnailUrl, getXl_webpUrl } from '.';

export const SearchLocationProps = (
  states: ILocations,
  countries: ILocations,
  cities: ILocations
) => {
  let locationData = [];
  states?.data?.map((ele) => {
    locationData.push({
      id: ele?.id,
      type: 'state',
      title: ele?.attributes.name
    });
    return;
  });
  countries?.data?.map((ele) => {
    locationData?.push({
      id: ele?.id,
      type: 'country',
      title: ele?.attributes.name
    });
    return;
  });
  cities?.data?.map((ele) => {
    locationData?.push({
      id: ele?.id,
      type: 'city',
      title: ele?.attributes.name
    });
    return;
  });
  return locationData;
};

export const SearchedVillaCardProps = (villaData: villaInterface) => {
  let roomprice = Infinity;

  villaData?.attributes?.rooms?.data?.forEach((ele) => {
    if (ele?.attributes?.pricing?.basic < roomprice)
      roomprice = ele?.attributes?.pricing?.basic;
  });

  let bannerImage = getFilteredImage(villaData, 'Main Image');
  let subImage = getFilteredImage(villaData, 'Interior');
  if (subImage.length === 0) {
    subImage = getFilteredImage(villaData, 'Exterior');
  }
  let bannerImageUrl = getXl_webpUrl(bannerImage);
  const subImageUrl = getThumbnailUrl(subImage);
  let amenities = [
    `${villaData?.attributes?.guestCapacity?.minAdultAndChildren}-${
      villaData?.attributes?.guestCapacity?.maxAdultAndChildren > 0 &&
      villaData?.attributes?.guestCapacity?.maxAdultAndChildren
    } ${
      villaData?.attributes?.guestCapacity?.minAdultAndChildren > 1
        ? 'Guests'
        : 'Guest'
    }`,
    `${villaData?.attributes?.bedRoomCount} ${
      villaData?.attributes?.bedRoomCount > 1 ? 'Bedrooms' : 'Bedroom'
    } `,
    `${villaData?.attributes?.bathRoomCount} ${
      villaData?.attributes?.bathRoomCount > 1 ? 'Bathrooms' : 'Bathroom'
    } `
  ];
  return {
    bannerImage: {
      image: bannerImageUrl.image,
      width: bannerImageUrl.width,
      height: bannerImageUrl.height,
      alt: bannerImageUrl.alt
    },
    image: {
      image: subImageUrl.image,
      width: subImageUrl.width,
      height: subImageUrl.height,
      alt: subImageUrl.alt
    },
    amenities: amenities,
    title: villaData?.attributes?.name,
    city: villaData?.attributes?.address?.city?.data?.attributes?.name,
    state: villaData?.attributes?.address?.state?.data?.attributes?.name,
    description: villaData?.attributes?.about,
    available: villaData?.attributes?.canBookRoom,
    availableDates: '28 Jun - 31 MAY',
    villaPrice: villaData?.attributes?.pricing?.basic,
    roomPrice: roomprice
  };
};

export const SearchedLocationsProps = (villaData: IVillaResultInterface) => {
  let data = villaData?.data?.map((ele) => {
    return {
      address: ele?.attributes?.name,
      lat: ele?.attributes?.address?.latitude,
      lng: ele?.attributes?.address?.longitude
    };
  });

  return data;
};

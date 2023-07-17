import { villaInterface } from "src/Interface";
import { ILocations, IVillaResultInterface } from "src/Interface/Search";

export const SearchLocationProps = (
  states: ILocations,
  countries: ILocations,
  cities: ILocations
) => {
  let locationData = [];
  states?.data?.map((ele) => {
    locationData.push({
      id: ele.id,
      type: "state",
      title: ele.attributes.name,
    });
    return;
  });
  countries?.data?.map((ele) => {
    locationData.push({
      id: ele.id,
      type: "country",
      title: ele.attributes.name,
    });
    return;
  });
  cities?.data?.map((ele) => {
    locationData.push({
      id: ele.id,
      type: "city",
      title: ele.attributes.name,
    });
    return;
  });
  return locationData;
};

export const SearchedVillaCardProps = (villaData: villaInterface) => {
  let roomprice = Infinity;

  villaData.attributes.rooms.data.forEach((ele) => {
    if (ele.attributes.pricing.basic < roomprice)
      roomprice = ele.attributes.pricing.basic;
  });

  let images = villaData.attributes.images;
  let bannerImage = images.filter((ele) => ele.type === "Main Image");
  let subImage = images.filter((ele) => ele.type === "Interior");
  let amenities = [
    `${villaData.attributes.guestCapacity.minAdultAndChildren}-${
      villaData.attributes.guestCapacity.maxAdultAndChildren > 0 &&
      villaData.attributes.guestCapacity.maxAdultAndChildren
    } ${
      villaData.attributes.guestCapacity.minAdultAndChildren > 1
        ? "Guests"
        : "Guest"
    }`,
    `${villaData.attributes.bedRoomCount} ${
      villaData.attributes.bedRoomCount > 1 ? "Bedrooms" : "Bedroom"
    } `,
    `${villaData.attributes.bathRoomCount} ${
      villaData.attributes.bathRoomCount > 1 ? "Bathrooms" : "Bathroom"
    } `,
  ];
  return {
    bannerImage: {
      image: bannerImage[0].image.data.attributes.formats.xl_webp.url,
      width: bannerImage[0].image.data.attributes.formats.xl_webp.width,
      height: bannerImage[0].image.data.attributes.formats.xl_webp.height,
      alt: bannerImage[0].image.data.attributes.formats.xl_webp.name,
    },
    image: {
      image: subImage[0].image.data.attributes.formats.thumbnail.url,
      width: subImage[0].image.data.attributes.formats.thumbnail.width,
      height: subImage[0].image.data.attributes.formats.thumbnail.height,
      alt: subImage[0].image.data.attributes.formats.thumbnail.name,
    },
    amenities: amenities,
    title: villaData.attributes.name,
    city: villaData.attributes.address.city.data.attributes.name,
    state: villaData.attributes.address.state.data.attributes.name,
    description: villaData.attributes.about,
    available: villaData.attributes.canBookRoom,
    availableDates: "28 Jun - 31 MAY",
    villaPrice: villaData.attributes.pricing.basic,
    roomPrice: roomprice,
  };
};

export const SearchedLocationsProps = (villaData: IVillaResultInterface) => {
  let data = villaData?.data?.map((ele) => {
    return {
      address: ele.attributes.name,
      lat: ele.attributes.address.latitude,
      lng: ele.attributes.address.longitude,
    };
  });

  return data;
};

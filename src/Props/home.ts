import { villaInterface } from 'src/Interface';

export const ourDestinationsProps = (villa: villaInterface[]) => {
  let mappedVillaData = villa?.map((villaData) => {
    let filteredthumbnail = villaData.attributes.images.filter(
      (villaData) => villaData.type === 'Main Image'
    );
    let name = villaData.attributes.name;
    let city = villaData.attributes.address.city.data.attributes.name;
    let state = villaData.attributes.address.state.data.attributes.name;
    let image = {
      image: filteredthumbnail[0].image.data.attributes.formats.m_webp.url,
      width: filteredthumbnail[0].image.data.attributes.formats.m_webp.width,
      height: filteredthumbnail[0].image.data.attributes.formats.m_webp.height,
      alt: filteredthumbnail[0].image.data.attributes.formats.m_webp.name
    };
    let amenities = [
      `${villaData.attributes.guestCapacity.minAdultAndChildren}-${
        villaData.attributes.guestCapacity.maxAdultAndChildren > 0 &&
        villaData.attributes.guestCapacity.maxAdultAndChildren
      } ${
        villaData.attributes.guestCapacity.minAdultAndChildren > 1
          ? 'Guests'
          : 'Guest'
      }`,
      `${villaData.attributes.bedRoomCount} ${
        villaData.attributes.bedRoomCount > 1 ? 'Bedrooms' : 'Bedroom'
      } `,
      `${villaData.attributes.bathRoomCount} ${
        villaData.attributes.bathRoomCount > 1 ? 'Bathrooms' : 'Bathroom'
      } `
    ];
    let basicPrice = villaData.attributes.pricing.basic;
    return {
      name,
      city,
      state,
      image,
      amenities,
      basicPrice
    };
  });
  return { villaData: mappedVillaData };
};

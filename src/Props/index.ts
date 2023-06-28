import { villaInterface } from "src/Interface";

export const PropertyDetailsHeroSectionProps = (villaData: villaInterface) => {
  let images = villaData.attributes.images;
  let filterdImage = images.filter((ele) => ele.type === "Main Image");
  return {
    image: filterdImage[0].image.data.attributes.formats.xl_webp.url,
    width: filterdImage[0].image.data.attributes.formats.xl_webp.width,
    height: filterdImage[0].image.data.attributes.formats.xl_webp.height,
    alt: filterdImage[0].image.data.attributes.formats.xl_webp.name,
  };
};

export const VillaOverviewProps = (villaData: villaInterface) => {
  return {
    name: villaData.attributes.name,
    city: villaData.attributes.address.city.data.attributes.name,
    state: villaData.attributes.address.state.data.attributes.name,
    byliner: villaData.attributes.byliner,
    about: villaData.attributes.about,
    amenities: [
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
    ],
  };
};

export const ReserveAndLocationDetailsSectionProps = (
  villaData: villaInterface
) => {
  return {
    locations: villaData.attributes.gettingThere,
    address: villaData.attributes.address.city.data.attributes.name,
    lat: villaData.attributes.address.latitude,
    lng: villaData.attributes.address.longitude,
    infant: villaData.attributes.guestCapacity.infant,
    maxAdultAndChildren: villaData.attributes.guestCapacity.maxAdultAndChildren,
    minAdultAndChildren: villaData.attributes.guestCapacity.minAdultAndChildren,
    pet: villaData.attributes.guestCapacity.pet,
    basicPrice: villaData.attributes.pricing.basic,
    petPrice: villaData.attributes.pricing.pet,
    extraGuestPrice: villaData.attributes.pricing.extraGuest,
  };
};

export const InclusionsExclusionsSectionProps = (villaData: villaInterface) => {
  return {
    heading: `${villaData.attributes.name}'s`,
    inclusions: villaData.attributes.includedServices,
    exclusions: villaData.attributes.availableServices,
  };
};

export const BeforeYouBookProps = (villaData: villaInterface) => {
  return [
    {
      title: "Payment Terms",
      conditions: [
        {
          label: "Modes of Payment",
          text: villaData.attributes.paymentTerm.modesOfPayment,
        },
        {
          label: "Payment Deadlines",
          text: villaData.attributes.paymentTerm.paymentDeadline,
        },
      ],
    },
    {
      title: "Security Deposit",
      conditions: [
        {
          label: "Amount",
          text: villaData.attributes.refundableSecurityDeposit.amount,
        },
        {
          label: "Payment Collection Date",
          text: villaData.attributes.refundableSecurityDeposit
            .paymentCollectionDate,
        },
        {
          label: "Payment Return Date",
          text: villaData.attributes.refundableSecurityDeposit
            .paymentReturnDate,
        },
        {
          label: "How it is used",
          text: villaData.attributes.refundableSecurityDeposit.howItIsUsed,
        },
      ],
    },
    {
      title: "Cancellation Policy",
      conditions: villaData.attributes.cancellationPolicy,
    },
    {
      title: "House Rules",
      conditions: [
        {
          label: "Check-In",
          text: villaData.attributes.houseRule.checkIn,
        },
        {
          label: "Check-Out",
          text: villaData.attributes.houseRule.checkOut,
        },
        {
          label: "Extra Guest",
          text: villaData.attributes.houseRule.extraGuest,
        },
        {
          label: "Children Policy ",
          text: villaData.attributes.houseRule.extraGuest,
        },
        {
          label: "Smoking & Substances",
          text: villaData.attributes.houseRule.smokingAndSubstance,
        },
        {
          label: "Parties and Events",
          text: villaData.attributes.houseRule.partiesAndEvents,
        },
        {
          label: "Pet Policy",
          text: "Lorem Ipsum",
        },
        {
          label: "Alcohol Policy",
          text: villaData.attributes.houseRule.alcoholPolicy,
        },
        {
          label: "Music",
          text: villaData.attributes.houseRule.music,
        },
        {
          label: "Villa Staff",
          text: villaData.attributes.houseRule.villaStaff,
        },
        {
          label: "Accompanying Guest’s Staff",
          text: villaData.attributes.houseRule.accompanyingGuestStaff,
        },
      ],
    },
  ];
};

export const HomeTruthProps = (villaData: villaInterface) => {
  let images = villaData.attributes.images;
  let filterdImage = images.filter((ele) => ele.type === "Master Bedroom");
  return {
    secondheading: "HOME TRUTHS",
    heading: villaData.attributes.name,
    story: villaData.attributes.homeTruths,
    image: {
      image: filterdImage[0].image.data.attributes.formats.xl_webp.url,
      width: filterdImage[0].image.data.attributes.formats.xl_webp.width,
      height: filterdImage[0].image.data.attributes.formats.xl_webp.height,
      alt: filterdImage[0].image.data.attributes.formats.xl_webp.name,
    },
    stringLength: 500,
    initialListToShow: 2,
  };
};

export const HomeStoryProps = (villaData: villaInterface) => {
  let images = villaData.attributes.images;
  let filterdImage = images.filter((ele) => ele.type === "Indoor Kitchen");

  return {
    secondheading: "STORY",
    heading: villaData.attributes.name,
    story: villaData.attributes.story,
    image: {
      image: filterdImage[0].image.data.attributes.formats.xl_webp.url,
      width: filterdImage[0].image.data.attributes.formats.xl_webp.width,
      height: filterdImage[0].image.data.attributes.formats.xl_webp.height,
      alt: filterdImage[0].image.data.attributes.formats.xl_webp.name,
    },
    stringLength: 500,
    initialListToShow: 2,
  };
};

export const DetailedDescriptionSectionProps = (villaData: villaInterface) => {
  return {
    image: "/images/StoryImage.png",
    detailedDescription: {
      propertyName: villaData.attributes.name,
      title: "DETAILED DESCRIPTION",
      list: villaData.attributes.detailedDescription,
    },
  };
};

export const SimilarStaysSectionProps = (villaData: villaInterface) => {
  let villas = villaData.attributes.similarStays.data;
  let mappedVillaData = villas.map((villaData) => {
    
    let filteredthumbnail = villaData.attributes.images.filter(
      (villaData) => villaData.type === "Main Image"
    );
    let name = villaData.attributes.name;
    let city = villaData.attributes.address.city.data.attributes.name;
    let state = villaData.attributes.address.state.data.attributes.name;
    let image = {
      image: filteredthumbnail[0].image.data.attributes.formats.thumbnail.url,
      width: filteredthumbnail[0].image.data.attributes.formats.thumbnail.width,
      height:
        filteredthumbnail[0].image.data.attributes.formats.thumbnail.height,
      alt: filteredthumbnail[0].image.data.attributes.formats.thumbnail.name,
    };
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
    let basicPrice = villaData.attributes.pricing.basic;
    return {
      name,
      city,
      state,
      image,
      amenities,
      basicPrice,
    };
  });
  return { heading: "SMILAR STAYS FOR YOU", villaData: mappedVillaData };
};

export const AmenitiesSectionProps = (villaData: villaInterface) => {
  let amenitiesData = villaData.attributes.amenities.data;
  let data = amenitiesData.map((villaData) => {
    let image = {
      image: villaData.attributes.icon.data.attributes.url,
      width: villaData.attributes.icon.data.attributes.width,
      height: villaData.attributes.icon.data.attributes.height,
      alt: villaData.attributes.icon.data.attributes.name,
    };
    let text = villaData.attributes.title;
    return {
      image,
      text,
    };
  });
  return {
    heading: `${villaData.attributes.name}’S`,
    iconsArray: data,
  };
};

// title header image price short description, long description
export const ExperiencesSectionProps = (villaData: villaInterface) => {
  let props = villaData.attributes.localExperiences.map((ele, id) => {
    return {
      id: ele.id,
      image: {
        image: ele.image.data.attributes.formats.thumbnail.url,
        width: ele.image.data.attributes.formats.thumbnail.width,
        height: ele.image.data.attributes.formats.thumbnail.height,
        alt: ele.image.data.attributes.formats.thumbnail.name,
      },
      shortDescription: ele.shortDescription,
      longDecription: ele.longDescription,
      title: ele.title,
    };
  });
  return { villa: villaData.attributes.name, header: "STAY LONGER", props };
};
export const ImageGalleryProps = (villaData: villaInterface) => {
  let images = villaData.attributes.images.map((ele) => {
    return {
      title: ele.image.data.attributes.formats.xl_webp.name,
      url: ele.image.data.attributes.formats.xl_webp.url,
      type: ele.type,
      alt:ele.image.data.attributes.name,
      width: ele.image.data.attributes.formats.xl_webp.width,
      height: ele.image.data.attributes.formats.xl_webp.height,
    };
  });
  return { images };
};

import { IVillaFAQ, villaInterface } from 'src/Interface';

export function getFilteredImage(villaData, type) {
  let filteredImage = villaData?.attributes?.images?.filter(
    (villaData) => villaData?.type === type
  );
  if (filteredImage?.length > 0) {
    return filteredImage?.[0];
  } else {
    return filteredImage;
  }
}

export function getXl_webpUrl(data) {
  return {
    image: data?.image?.data?.attributes?.formats?.xl_webp?.url,
    width: data?.image?.data?.attributes?.formats?.xl_webp?.width,
    height: data?.image?.data?.attributes?.formats?.xl_webp?.height,
    alt: data?.image?.data?.attributes?.formats?.xl_webp?.name
  };
}

export function getThumbnailUrl(data) {
  return {
    image: data?.image?.data?.attributes?.formats?.thumbnail?.url,
    width: data?.image?.data?.attributes?.formats?.thumbnail?.width,
    height: data?.image?.data?.attributes?.formats?.thumbnail?.height,
    alt: data?.image?.data?.attributes?.formats?.thumbnail?.name
  };
}

export const PropertyDetailsHeroSectionProps = (villaData: villaInterface) => {
  let filterdImage = getFilteredImage(villaData, 'Main Image');
  let Image = getXl_webpUrl(filterdImage);
  return {
    image: Image.image,
    width: Image.width,
    height: Image.height,
    alt: Image.alt
  };
};

export const VillaOverviewProps = (villaData: villaInterface) => {
  return {
    name: villaData?.attributes?.name,
    city: villaData?.attributes?.address?.city?.data?.attributes?.name,
    state: villaData?.attributes?.address?.state?.data?.attributes?.name,
    byliner: villaData?.attributes?.byliner,
    about: villaData?.attributes?.about,
    pdf: villaData.attributes.uploadBrochure.data.attributes.url,
    amenities: [
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
    ]
  };
};

export const ReserveAndLocationDetailsSectionProps = (
  villaData: villaInterface
) => {
  let roomData = villaData?.attributes?.rooms?.data?.map((ele) => {
    return {
      id: ele?.id,
      title: ele?.attributes?.name,
      guestCapacity: {
        minAdultAndChildren:
          ele?.attributes?.guestCapacity?.minAdultAndChildren,
        maxAdultAndChildren:
          ele?.attributes?.guestCapacity?.maxAdultAndChildren,
        infant: ele?.attributes?.guestCapacity?.infant,
        pet: ele?.attributes?.guestCapacity?.pet
      },
      basicPrice: ele?.attributes?.pricing?.basic,
      petPrice: ele?.attributes?.pricing?.pet,
      extraGuestsPrice: ele?.attributes?.pricing?.extraGuest
    };
  });

  return {
    locations: villaData?.attributes?.gettingThere,
    address: villaData?.attributes?.address?.city?.data?.attributes?.name,
    lat: villaData?.attributes?.address?.latitude,
    lng: villaData?.attributes?.address?.longitude,
    infant: villaData?.attributes?.guestCapacity?.infant,
    maxAdultAndChildren:
      villaData?.attributes?.guestCapacity?.maxAdultAndChildren,
    minAdultAndChildren:
      villaData?.attributes?.guestCapacity?.minAdultAndChildren,
    pet: villaData?.attributes?.guestCapacity?.pet,
    basicPrice: villaData?.attributes?.pricing?.basic,
    petPrice: villaData?.attributes?.pricing?.pet,
    extraGuestPrice: villaData?.attributes?.pricing?.extraGuest,
    roomDetails: roomData,
    isOnlineBookingPossible: villaData?.attributes?.isOnlineBookingPossible
  };
};

export const InclusionsExclusionsSectionProps = (villaData: villaInterface) => {
  let data = {
    heading: `${villaData?.attributes?.name}'s`,
    inclusions: villaData?.attributes?.includedServices,
    exclusions: villaData?.attributes?.availableServices
  };
  if (data.exclusions && data.inclusions) {
    return data;
  } else {
    return {
      heading: '',
      inclusions: [],
      exclusions: []
    };
  }
};

export const BeforeYouBookProps = (villaData: villaInterface) => {
  return [
    {
      title: 'Payment Terms',
      conditions: [
        {
          label: 'Modes of Payment',
          text: villaData?.attributes?.paymentTerm?.modesOfPayment
        },
        {
          label: 'Payment Deadlines',
          text: villaData?.attributes?.paymentTerm?.paymentDeadline
        }
      ]
    },
    {
      title: 'Security Deposit',
      conditions: [
        {
          label: 'Amount',
          text: villaData?.attributes?.refundableSecurityDeposit?.amount
        },
        {
          label: 'Payment Collection Date',
          text: villaData?.attributes?.refundableSecurityDeposit
            ?.paymentCollectionDate
        },
        {
          label: 'Payment Return Date',
          text: villaData?.attributes?.refundableSecurityDeposit
            ?.paymentReturnDate
        },
        {
          label: 'How it is used',
          text: villaData?.attributes?.refundableSecurityDeposit?.howItIsUsed
        }
      ]
    },
    {
      title: 'Cancellation Policy',
      conditions: villaData?.attributes?.cancellationPolicy
    },
    {
      title: 'House Rules',
      conditions: [
        {
          label: 'Check-In',
          text: villaData?.attributes?.houseRule?.checkIn
        },
        {
          label: 'Check-Out',
          text: villaData?.attributes?.houseRule?.checkOut
        },
        {
          label: 'Extra Guest',
          text: villaData?.attributes?.houseRule?.extraGuest
        },
        {
          label: 'Children Policy ',
          text: villaData?.attributes?.houseRule?.extraGuest
        },
        {
          label: 'Smoking & Substances',
          text: villaData?.attributes?.houseRule?.smokingAndSubstance
        },
        {
          label: 'Parties and Events',
          text: villaData?.attributes?.houseRule?.partiesAndEvents
        },
        {
          label: 'Pet Policy',
          text: villaData.attributes.houseRule.petPolicy
        },
        {
          label: 'Alcohol Policy',
          text: villaData?.attributes?.houseRule?.alcoholPolicy
        },
        {
          label: 'Music',
          text: villaData?.attributes?.houseRule?.music
        },
        {
          label: 'Villa Staff',
          text: villaData?.attributes?.houseRule?.villaStaff
        },
        {
          label: 'Accompanying Guest’s Staff',
          text: villaData?.attributes?.houseRule?.accompanyingGuestStaff
        }
      ]
    }
  ];
};

export const HomeTruthProps = (villaData: villaInterface) => {
  let filterdImage = getFilteredImage(villaData, 'Master Bedroom');
  if (filterdImage?.length === 0) {
    filterdImage = getFilteredImage(villaData, 'Main Image');
  }
  let Image = getXl_webpUrl(filterdImage);

  return {
    secondheading: 'HOME TRUTHS',
    heading: villaData?.attributes?.name,
    story: villaData?.attributes?.homeTruths,
    image: {
      image: Image.image,
      width: Image.width,
      height: Image.height,
      alt: Image.alt
    },
    stringLength: 500,
    initialListToShow: 2
  };
};

export const HomeStoryProps = (villaData: villaInterface) => {
  let filterdImage = getFilteredImage(villaData, 'Indoor Kitchen');
  if (filterdImage?.length === 0) {
    filterdImage = getFilteredImage(villaData, 'Main Image');
  }
  let Image = getXl_webpUrl(filterdImage);

  return {
    secondheading: 'STORY',
    heading: villaData?.attributes?.name,
    story: villaData?.attributes?.story,
    image: {
      image: Image.image,
      width: Image.width,
      height: Image.height,
      alt: Image.alt
    },
    stringLength: 500,
    initialListToShow: 2
  };
};

export const DetailedDescriptionSectionProps = (villaData: villaInterface) => {
  let filterdImage = getFilteredImage(villaData, 'Indoor Kitchen');
  if (filterdImage?.length === 0) {
    filterdImage = getFilteredImage(villaData, 'Main Image');
  }
  let Image = getXl_webpUrl(filterdImage);

  return {
    image: Image.image,
    detailedDescription: {
      propertyName: villaData?.attributes?.name,
      title: 'DETAILED DESCRIPTION',
      list: villaData?.attributes?.detailedDescription
    }
  };
};

export const stringToArray = (str) => {
  return str
    .split('\n')
    .map((item) => item.replace('-', '').trim())
    .map((item, id) => ({ id: id + 1, service: item }));
};

export const AccordionProps1 = (villaData: villaInterface) => {
  const { heading, inclusions, exclusions } =
    InclusionsExclusionsSectionProps(villaData);

  const story = villaData.attributes.homeTruths;

  const storyList = stringToArray(story);

  const data = [
    { title: 'Included services', data: inclusions },
    { title: 'Available services', data: exclusions },
    { title: 'Home Truths', data: storyList }
  ];

  return { heading, data };
};

export const AccordionProps2 = (villaData: villaInterface) => {
  const { heading } = InclusionsExclusionsSectionProps(villaData);

  const { story } = HomeStoryProps(villaData);

  const storyList = stringToArray(story);

  const {
    detailedDescription: { list }
  } = DetailedDescriptionSectionProps(villaData);

  const data = [
    { title: 'Story', data: storyList },
    { title: 'Detailed Description', data: list }
  ];

  return { heading, data };
};

export const SimilarStaysSectionProps = (villaData: villaInterface) => {
  let villas = villaData?.attributes?.similarStays?.data;
  let mappedVillaData = villas?.map((villaData) => {
    let thumbnail = getFilteredImage(villaData, 'Main Image');

    let Image = getXl_webpUrl(thumbnail);

    let name = villaData?.attributes?.name;
    let city = villaData?.attributes?.address?.city?.data?.attributes?.name;
    let state = villaData?.attributes?.address?.state?.data?.attributes?.name;
    let image = {
      image: Image.image,
      width: Image.width,
      height: Image.height,
      alt: Image.alt
    };
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
    let basicPrice = villaData?.attributes?.pricing?.basic;
    return {
      name,
      city,
      state,
      image,
      amenities,
      basicPrice
    };
  });
  return {
    heading: 'SMILAR STAYS FOR YOU',
    villaData: mappedVillaData,
    inVillaDetails: true
  };
};

export const AmenitiesSectionProps = (villaData: villaInterface) => {
  let amenitiesData = villaData?.attributes?.amenities?.data;
  let data = amenitiesData?.map((villaData) => {
    let image = {
      image: villaData?.attributes?.icon?.data?.attributes?.url,
      width: villaData?.attributes?.icon?.data?.attributes?.width,
      height: villaData?.attributes?.icon?.data?.attributes?.height,
      alt: villaData?.attributes?.icon?.data?.attributes?.name
    };
    let text = villaData?.attributes?.title;
    return {
      image,
      text
    };
  });
  let portraitImage = villaData?.attributes?.images?.filter(
    (ele) => ele?.type === 'portrait'
  );
  let thumbnailImage = villaData?.attributes?.images?.filter(
    (ele) => ele?.type === 'Interior'
  );

  return {
    heading: `${villaData?.attributes?.name}’S`,
    iconsArray: data,
    portraitImage: portraitImage?.[0]?.image?.data?.attributes?.url,
    thumbnailImage: thumbnailImage?.[0]?.image?.data?.attributes?.url
  };
};

export const ExperiencesSectionProps = (villaData: villaInterface) => {
  let props = villaData?.attributes?.localExperiences?.map((ele, id) => {
    let thumbnailUrl = getThumbnailUrl(ele);
    return {
      id: ele?.id,
      image: {
        width: thumbnailUrl.width,
        height: thumbnailUrl.height,
        alt: thumbnailUrl.alt,
        image: thumbnailUrl.image
      },
      shortDescription: ele?.shortDescription,
      longDecription: ele?.longDescription,
      title: ele?.title
    };
  });
  let secondProps = villaData?.attributes?.stayLonger?.map((ele) => {
    let thumbnailUrl = getThumbnailUrl(ele);
    return {
      id: ele?.id,
      image: {
        width: thumbnailUrl.width,
        height: thumbnailUrl.height,
        alt: thumbnailUrl.alt,
        image: thumbnailUrl.image
      },
      shortDescription: ele?.shortDescription,
      longDecription: ele?.longDescription,
      title: ele?.title
    };
  });
  return {
    villa: villaData?.attributes?.name,
    header: 'STAY LONGER',
    props,
    secondProps: secondProps,
    secondHeading: 'LOCAL EXPERIENCES'
  };
};
export const ImageGalleryProps = (villaData: villaInterface) => {
  let images = villaData?.attributes?.images?.map((ele) => {
    let Image = getXl_webpUrl(ele);
    return {
      title: ele?.image?.data?.attributes?.formats?.xl_webp?.name,
      url: Image.image,
      type: ele?.type,
      alt: Image.alt,
      width: Image.width,
      height: Image.height
    };
  });
  return { images };
};

export const RoomSectionProps = (villaData: villaInterface) => {
  let data = villaData?.attributes?.rooms?.data?.map((ele) => {
    let amenities = ele?.attributes?.amenities?.data?.map((ele) => {
      return {
        icon: ele?.attributes?.icon?.data?.attributes?.url,
        text: ele?.attributes?.title
      };
    });
    let images = villaData?.attributes?.images?.map((ele) => {
      return {
        thumbnail: ele?.image?.data?.attributes?.formats?.thumbnail?.url,
        image: ele?.image?.data?.attributes?.url,
        type: ele?.type
      };
    });
    return {
      id: ele?.id,
      title: ele?.attributes?.name,
      description: ele?.attributes?.description,
      guestCapacity: {
        minAdultAndChildren:
          ele?.attributes?.guestCapacity?.minAdultAndChildren,
        maxAdultAndChildren:
          ele?.attributes?.guestCapacity?.maxAdultAndChildren,
        infant: ele?.attributes?.guestCapacity?.infant,
        pet: ele?.attributes?.guestCapacity?.pet
      },
      bathRoomType: ele?.attributes?.bathRoomType,
      roomCount: ele?.attributes?.roomCount,
      pricing: {
        basic: ele?.attributes?.pricing?.basic,
        pet: ele?.attributes?.pricing?.pet,
        extraGuest: ele?.attributes?.pricing?.extraGuest
      },
      amenities: amenities,
      images: images
    };
  });
  return {
    heading: 'Rooms',
    villaTitle: villaData?.attributes?.name,
    roomData: data
  };
};

export const VillaFullFAQProps = (faqData: IVillaFAQ) => {
  return {
    propertyName:
      faqData?.data?.[0]?.attributes?.property?.data?.attributes?.name,
    faqs: faqData?.data?.[0]?.attributes?.questionAndAnswers?.map((el) => ({
      question: el?.question,
      answer: el?.answer
    })),
    potraitImageUrl:
      faqData?.data?.[0]?.attributes?.portraitImages?.data?.[0]?.attributes
        ?.url,
    landscapeImageUrl:
      faqData?.data?.[0]?.attributes?.landscapeImage?.data?.attributes?.url
  };
};

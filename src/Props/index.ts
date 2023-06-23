import { villaInterface } from "src/Interface";

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
  return {
    secondheading: "HOME TRUTHS",
    heading: villaData.attributes.name,
    story: villaData.attributes.homeTruths,
    image: "/images/StoryImage.png",
    stringLength: 500,
    initialListToShow: 2
  };
};

export const HomeStoryProps = (villaData: villaInterface) => {
  return {
    secondheading: "STORY",
    heading: villaData.attributes.name,
    story: villaData.attributes.story,
    image: "/images/StoryImage.png",
    stringLength: 500,
    initialListToShow: 2
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

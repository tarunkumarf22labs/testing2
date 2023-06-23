export interface GuestsInterface {
  adults: number;
  children: number;
  infants: number;
  pets: number;
  additional_guests: number;
}

export interface villaInterface {
  id: number;
  attributes: {
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
    isActive: Boolean;
    areaInSqFt: number;
    bedRoomCount: number;
    bathRoomCount: number;
    floorCount: number;
    byliner: string;
    cancellationPolicy: string | null;
    isOnlineBookingPossible: Boolean;
    canBookRoom: Boolean;
    about: string;
    homeTruths: string;
    story: string;
    gettingThere: string;
    guestCapacity: {
      id: number;
      minAdultAndChildren: number;
      maxAdultAndChildren: number;
      infant: number;
      pet: number | null;
    };
    detailedDescription: {
      id: number;
      description: string;
      title: string;
    }[];
    images: [];
    address: {
      id: number;
      street1: string;
      street2: string;
      postalCode: number;
      latitude: number;
      longitude: number;
      city: {
        data: {
          id: string;
          attributes: {
            name: string;
            createdAt: string | null;
            updatedAt: string | null;
            publishedAt: string | null;
            banner: {
              data: null;
            };
          };
        };
      };
      region: {
        data: null;
      };
      state: {
        data: {
          id: number;
          attributes: {
            name: string;
            createdAt: string | null;
            updatedAt: string | null;
            publishedAt: string | null;
            banner: {
              data: null;
            };
          };
        };
      };
      country: {
        data: {
          id: number;
          attributes: {
            name: string;
            createdAt: string | null;
            updatedAt: string | null;
            publishedAt: string | null;
            banner: {
              data: null;
            };
          };
        };
      };
    };
    includedServices: {
      id: number;
      service: string;
    }[];
    availableServices: {
      id: number;
      service: string;
    }[];
    houseRule: {
      id: number;
      checkIn: string;
      checkOut: string;
      extraGuest: string | null;
      childrenPolicy: string | null;
      smokingAndSubstance: string | null;
      partiesAndEvents: string | null;
      alcoholPolicy: string | null;
      music: string | null;
      villaStaff: string | null;
      accompanyingGuestStaff: string | null;
    };
    pricing: {
      id: number;
      basic: number;
      pet: number;
      extraGuest: number;
    };
    channels: {
      id: number;
      name: string;
      pId: null;
    }[];
    curatedExperiences: [];
    paymentTerm: {
      id: number;
      modesOfPayment: string;
      paymentDeadline: string;
    };
    localExperiences: [];
    similarStays: {
      data: [];
    };
    uploadBrochure: {
      data: null;
    };
    refundableSecurityDeposit: {
      id: number;
      amount: string;
      howItIsUsed: string;
      paymentCollectionDate: string;
      paymentReturnDate: string;
    };
  };
}
export interface IHomeInterface {
  data: {
    data: villaInterface;
    meta: {};
  };
  error: string | null;
}

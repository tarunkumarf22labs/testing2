export interface GuestsInterface {
  adults: number;
  children: number;
  infants: number;
  pets: number;
  additional_guests: number;
}

export interface IImageTag {
  image: string;
  width: number;
  height: number;
  alt: string;
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
    guestCapacity: IguestCapacity;
    detailedDescription: {
      id: number;
      description: string;
      title: string;
    }[];
    images: IImage[];
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
    pricing: IPrice;
    channels: {
      id: number;
      name: string;
      pId: null;
    }[];
    stayLonger: [];
    paymentTerm: {
      id: number;
      modesOfPayment: string;
      paymentDeadline: string;
    };
    localExperiences: IlocalExperiences[];
    similarStays: {
      data: villaInterface[];
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
    amenities: {
      data: Iamenities[];
    };
    rooms: {
      data: Iroom[];
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

export interface IImage {
  id: number;
  type: string;
  image?: IImageAmenity;
}

interface IImageAmenity {
  data: {
    id: number;
    attributes: FluffyAttributes;
  };
}

export interface FluffyAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  // banner?:            Amenities;
  alternativeText?: null;
  caption?: null;
  width?: number | null;
  height?: number | null;
  formats?: Formats | null;
  hash?: string;
  ext?: AttributesEXT;
  mime?: AttributesMIME;
  size?: number;
  url?: string;
  previewUrl?: null;
  provider?: Provider;
  provider_metadata?: null;
}

export interface Formats {
  l_webp: LWebp;
  m_webp: LWebp;
  s_webp: LWebp;
  xl_webp: LWebp;
  thumbnail: LWebp;
}

export interface LWebp {
  ext: LWebpEXT;
  url: string;
  hash: string;
  mime: LWebpMIME;
  name: string;
  size: number;
  width: number;
  height: number;
  path?: null;
}
export enum Provider {
  AwsS3 = "aws-s3",
}
export enum LWebpEXT {
  Jpg = ".jpg",
  Webp = ".webp",
}
export enum LWebpMIME {
  ImageJPEG = "image/jpeg",
  ImageWebp = "image/webp",
}

export enum AttributesEXT {
  Jpg = ".jpg",
  PDF = ".pdf",
  SVG = ".svg",
}

export enum AttributesMIME {
  ApplicationPDF = "application/pdf",
  ImageJPEG = "image/jpeg",
  ImageSVGXML = "image/svg+xml",
}

export interface Iamenities {
  // data: {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: Date | null;
    publishedAt: Date | null;
    icon: {
      data: {
        id: number;
        attributes: FluffyAttributes;
      };
    };
  };
}

export interface IlocalExperiences {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: IImageAmenity;
}

interface IguestCapacity {
  id: number;
  minAdultAndChildren: number;
  maxAdultAndChildren: number;
  infant: number;
  pet: number | null;
}

interface Iroom {
  id: number;
  attributes: {
    name: string;
    description: string;
    bathRoomType: string;
    roomCount: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    areaInSqFt: number;
    guestCapacity: IguestCapacity;
    amenities: {
      data: {
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          icon: {
            data: {
              id: number;
              attributes: {
                name: string;
                alternativeText: string;
                caption: string;
                width: number;
                height: number;
                formats: any;
                hash: string;
                ext: string;
                mime: string;
                size: string;
                url: string;
                previewUrl: string;
                provider: string;
                provider_metadata: null | string;
                createdAt: string;
                updatedAt: string;
              };
            };
          };
        };
      }[];
    };
    pricing: {
      id: number;
      basic: number;
      pet: number;
      extraGuest: number;
    };
    property: any;
    channels: {
      id: number;
      name: string;
    }[];
    images: IImage[];
    // {
    //   id: number;
    //   type: string;
    // }[];
  };
}

interface IRoomAmenity {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface IPrice {
  id: number;
  basic: number;
  pet: number;
  extraGuest: number;
}

interface QuestionAndAnswer {
  id: number;
  question: string;
  answer: string;
}

interface IFAQAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  questionAndAnswers: QuestionAndAnswer[];
  property: { data: villaInterface };
  portraitImages: {
    data: {
      id: number;
      attributes: FluffyAttributes;
    }[];
  };
  landscapeImage: {
    data: {
      id: number;
      attributes: FluffyAttributes;
    };
  };
}

export interface IVillaFAQ {
  data: {
    id: number;
    attributes: IFAQAttributes;
  }[];
  error: string | null;
}

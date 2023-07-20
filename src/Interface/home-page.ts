export interface IHomePageData {
  data: {
    id: number;
    attributes: Attributes;
  };
}

interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  carousal: Carousal;
  about: IAbout;
  destination: IDestination[];
  curatedCollection: ICuratedCollection[];
  spotlight: ISpotlightAndJourney[];
  userExperience: IUserExperience[];
  Journey: ISpotlightAndJourney[];
}

interface Carousal {
  id: number;
  transitionTime: number;
  images: {
    data: {
      id: number;
      attributes: IImageAttributes;
    }[];
  };
}

export interface IAbout {
  id: number;
  aboutDescription: string;
  images: {
    data: {
      id: number;
      attributes: IImageAttributes;
    }[];
  };
}

interface ICommonCityStateRegionCountry {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface IDestination {
  id: number;
  city: ICommonCityStateRegionCountry;
  state: ICommonCityStateRegionCountry;
  region: ICommonCityStateRegionCountry;
  country: ICommonCityStateRegionCountry;
}

export interface ICuratedCollection {
  id: number;
  title: string;
  properties: {
    data: {
      id: number;
      attributes: {
        name: string;
        createdAt: any;
        updatedAt: string;
        publishedAt: string;
        isActive: boolean;
        areaInSqFt: number;
        bedRoomCount: number;
        bathRoomCount: number;
        floorCount: number;
        byliner: string;
        cancellationPolicy: string;
        isOnlineBookingPossible: boolean;
        canBookRoom: boolean;
        about: string;
        homeTruths: string;
        story: string;
        gettingThere: string;
        validFrom: string;
        validTo: string;
      };
    }[];
  };
}

export interface ISpotlightAndJourney {
  id: number;
  title: string;
  description: string;
  hyperLink: string;
  images: {
    data: {
      id: number;
      attributes: IImageAttributes;
    }[];
  };
}

export interface IUserExperience {
  id: number;
  name: string;
  date: string;
  experience: string;
  blogLink: string;
  image: {
    data: {
      id: number;
      attributes: IImageAttributes;
    };
  };
}

interface ICommonFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
}

interface IImageAttributes {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: {
    l_webp: ICommonFormat;
    m_webp: ICommonFormat;
    s_webp: ICommonFormat;
    xl_webp: ICommonFormat;
    thumbnail: ICommonFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface ITestimonials {
  data: ISingleTestimonial[];
}

export interface ISingleTestimonial {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    testimonial: Testimonial;
    portraitImage: {
      data: {
        id: number;
        attributes: IImageAttributes;
      };
    };
  };
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  experience: string;
  blogLink: string;
  avatar: {
    data: {
      id: number;
      attributes: IImageAttributes;
    };
  };
}

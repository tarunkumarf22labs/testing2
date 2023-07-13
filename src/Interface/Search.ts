import { villaInterface } from ".";
import { IVillas } from "./home";


export interface Istate {
    // data: {
    id: string;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      // }
    };
  }
  export interface ILocations {
          data: Istate[];
          meta: {
            pagination: {
              page: number;
              pageSize: number;
              pageCount: number;
              total: number;
            };
          };
  }
  export interface ISearchInterface {
    // data: {
    states: ILocations ;
    countries: ILocations;
    cities: ILocations;
    villa?: IVillas;
    // };
    error: string | null;
  }
  
  export interface ISearchResultInterface {
    // data: {
      data?: {
        data: villaInterface[];
        meta: {
            pagination : {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
                }
        };
      };
      error?: string;
    // };
    // error: string | null;
  }

  export interface IVillaResultInterface {
        data: villaInterface[];
        meta: {
            pagination : {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
                }
        };
  };



// export interface Welcome {
//     data: WelcomeDatum[];
//     meta: Meta;
// }

// export interface WelcomeDatum {
//     id:         number;
//     attributes: PurpleAttributes;
// }

// export interface PurpleAttributes {
//     name:                      string;
//     createdAt:                 null;
//     updatedAt:                 Date;
//     publishedAt:               Date;
//     isActive:                  boolean;
//     areaInSqFt:                number;
//     bedRoomCount:              number;
//     bathRoomCount:             number;
//     floorCount:                number;
//     byliner:                   string;
//     cancellationPolicy:        string;
//     isOnlineBookingPossible:   boolean;
//     canBookRoom:               boolean;
//     about:                     string;
//     homeTruths:                string;
//     story:                     string;
//     gettingThere:              string;
//     guestCapacity:             GuestCapacity;
//     detailedDescription:       DetailedDescription[];
//     images:                    Image[];
//     address:                   Address;
//     includedServices:          Service[];
//     availableServices:         Service[];
//     houseRule:                 HouseRule;
//     pricing:                   Pricing;
//     channels:                  Channel[];
//     stayLonger:                any[];
//     paymentTerm:               PaymentTerm;
//     localExperiences:          LocalExperience[];
//     amenities:                 Amenities;
//     similarStays:              Amenities;
//     uploadBrochure:            Amenities;
//     refundableSecurityDeposit: RefundableSecurityDeposit;
//     rooms:                     Amenities;
// }

// export interface DataAttributes {
//     name:               string;
//     createdAt:          Date;
//     updatedAt:          Date;
//     publishedAt?:       Date;
//     banner?:            Amenities;
//     alternativeText?:   null;
//     caption?:           null;
//     width?:             number | null;
//     height?:            number | null;
//     formats?:           Formats | null;
//     hash?:              string;
//     ext?:               AttributesEXT;
//     mime?:              AttributesMIME;
//     size?:              number;
//     url?:               string;
//     previewUrl?:        null;
//     provider?:          Provider;
//     provider_metadata?: null;
// }

// export interface DataClass {
//     id:         number;
//     attributes: DataAttributes;
// }

// export interface LocalExperience {
//     id:               number;
//     title:            string;
//     shortDescription: string;
//     longDescription:  string;
//     image:            Amenities;
// }

// export interface Image {
//     id:     number;
//     type:   string;
//     image?: Amenities;
// }

// export interface FluffyAttributes {
//     title?:                     string;
//     createdAt:                  Date | null;
//     updatedAt:                  Date;
//     publishedAt:                Date;
//     icon?:                      Amenities;
//     name?:                      string;
//     isActive?:                  boolean;
//     areaInSqFt?:                number;
//     bedRoomCount?:              number;
//     bathRoomCount?:             number;
//     floorCount?:                number;
//     byliner?:                   string;
//     cancellationPolicy?:        string;
//     isOnlineBookingPossible?:   boolean;
//     canBookRoom?:               boolean;
//     about?:                     string;
//     homeTruths?:                string;
//     story?:                     string;
//     gettingThere?:              string;
//     guestCapacity?:             GuestCapacity;
//     detailedDescription?:       DetailedDescription[];
//     images?:                    Image[];
//     address?:                   Address;
//     includedServices?:          Service[];
//     availableServices?:         Service[];
//     houseRule?:                 HouseRule;
//     pricing?:                   Pricing;
//     channels?:                  Channel[];
//     stayLonger?:                any[];
//     paymentTerm?:               PaymentTerm;
//     localExperiences?:          LocalExperience[];
//     amenities?:                 Amenities;
//     similarStays?:              Amenities;
//     uploadBrochure?:            Amenities;
//     refundableSecurityDeposit?: RefundableSecurityDeposit | null;
//     rooms?:                     Amenities;
// }

// export interface DataDatum {
//     id:         number;
//     attributes: FluffyAttributes;
// }

// export interface Amenities {
//     data: DataDatum[] | DataClass | null;
// }

// export interface Address {
//     id:         number;
//     street1:    string;
//     street2:    string;
//     postalCode: number;
//     latitude:   number;
//     longitude:  number;
//     city?:      Amenities;
//     region?:    Amenities;
//     state?:     Amenities;
//     country?:   Amenities;
// }

// export enum AttributesEXT {
//     Jpg = ".jpg",
//     PDF = ".pdf",
//     SVG = ".svg",
// }

// export interface Formats {
//     l_webp:    LWebp;
//     m_webp:    LWebp;
//     s_webp:    LWebp;
//     xl_webp:   LWebp;
//     thumbnail: LWebp;
// }

// export interface LWebp {
//     ext:    LWebpEXT;
//     url:    string;
//     hash:   string;
//     mime:   LWebpMIME;
//     name:   string;
//     size:   number;
//     width:  number;
//     height: number;
//     path?:  null;
// }

// export enum LWebpEXT {
//     Jpg = ".jpg",
//     Webp = ".webp",
// }

// export enum LWebpMIME {
//     ImageJPEG = "image/jpeg",
//     ImageWebp = "image/webp",
// }

// export enum AttributesMIME {
//     ApplicationPDF = "application/pdf",
//     ImageJPEG = "image/jpeg",
//     ImageSVGXML = "image/svg+xml",
// }

// export enum Provider {
//     AwsS3 = "aws-s3",
// }

// export interface Service {
//     id:      number;
//     service: string;
// }

// export interface Channel {
//     id:   number;
//     name: string;
//     pId:  string;
// }

// export interface DetailedDescription {
//     id:          number;
//     description: string;
//     title:       string;
// }

// export interface GuestCapacity {
//     id:                  number;
//     minAdultAndChildren: number;
//     maxAdultAndChildren: number;
//     infant:              number;
//     pet:                 number;
// }

// export interface HouseRule {
//     id:                     number;
//     checkIn:                string;
//     checkOut:               string;
//     extraGuest:             string;
//     childrenPolicy:         string;
//     smokingAndSubstance:    string;
//     partiesAndEvents:       string;
//     alcoholPolicy:          string;
//     music:                  string;
//     villaStaff:             string;
//     accompanyingGuestStaff: string;
//     petPolicy:              string;
// }

// export interface PaymentTerm {
//     id:              number;
//     modesOfPayment:  string;
//     paymentDeadline: string;
// }

// export interface Pricing {
//     id:         number;
//     basic:      number;
//     pet:        number;
//     extraGuest: number;
// }

// export interface RefundableSecurityDeposit {
//     id:                    number;
//     amount:                string;
//     howItIsUsed:           string;
//     paymentCollectionDate: string;
//     paymentReturnDate:     string;
// }

// export interface Meta {
//     pagination: Pagination;
// }

// export interface Pagination {
//     page:      number;
//     pageSize:  number;
//     pageCount: number;
//     total:     number;
// }
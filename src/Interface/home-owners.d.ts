import { AttributesEXT, Formats, Provider } from ".";
export interface IHomeOwners {
    data: {
      id: number;
      attributes: {
        createdAt: string | null;
        updatedAt: string | null;
        publishedAt: string | null;
        banner: {
          data: HomeOwnerImage;
        };
        description: {
          id: number;
          service: string;
        }[];
        ownerExperience: {
          id: number;
          name: string;
          date: string;
          experience: string;
          blogLink: string;
          avatar: {
            data: HomeOwnerImage;
          };
        }[];
      };
    };
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
}

interface HomeOwnerImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    hash: string;
    ext: AttributesEXT;
    mime: AttributesMIME;
    size: number;
    url: string;
    previewUrl: string;
    provider: Provider;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
  };
}


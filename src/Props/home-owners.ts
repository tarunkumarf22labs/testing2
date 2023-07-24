import { IHomeOwners } from "src/Interface/home-owners";

export const homeOwnersBannerImage = (data: IHomeOwners) => {
  return {
    url: data?.data?.attributes?.banner?.data?.attributes?.formats?.xl_webp?.url,
    alt: data?.data?.attributes.banner?.data?.attributes?.formats?.xl_webp?.name,
  };
};

export const homeOwnersListProps = (data: IHomeOwners) => {
  return data?.data?.attributes?.description?.map((ele) => ele?.service);
};

export const HomeOwnerReviewsCardProps = (data: IHomeOwners) => {
  return data?.data?.attributes?.ownerExperience?.map((ele) => {
    return {
      description: ele?.experience,
      date: ele?.date,
      id: ele?.id,
      name: ele?.name,
      image: ele?.avatar?.data?.attributes?.url,
      link: ele?.blogLink,
    };
  });
};

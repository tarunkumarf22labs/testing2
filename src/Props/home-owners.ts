import { IHomeOwners } from "src/Interface/home-owners";

export const homeOwnersBannerImage = (data: IHomeOwners) => {
  return {
    url: data.data[0].attributes.image.data.attributes.url,
    alt: data.data[0].attributes.image.data.attributes.name,
  };
};

export const homeOwnersListProps = (data: IHomeOwners) => {
  return data.data[0].attributes.description.map((ele) => ele.service);
};

export const HomeOwnerReviewsCardProps = (data: IHomeOwners) => {
  return data.data[0].attributes.ownerExperience.map((ele) => {
    return {
      description: ele.experience,
      date: ele.date,
      id: ele.id,
      name: ele.name,
      image: ele.image.data.attributes.url,
      link: ele.blogLink,
    };
  });
};

import React from "react";
import { NameTitle } from "./NameTitle";
import { IReviewCard, ReviewCard } from "./ReviewCard";
import classNames from "classnames";

interface IPropertyReviewSection {
  reviewCardsCollection: IReviewCard[];
}

export const PropertyReviewSection = ({
  reviewCardsCollection,
}: IPropertyReviewSection) => {
  return (
    <div className={classNames("px-5 py-10 lg:max-w-7xl lg:mx-auto")}>
      <NameTitle propertyName="Deja View's" title="Guest Experience" />
      <div className="flex flex-col md:flex-row md:items-start md:flex-wrap md:gap-x-24">
        {reviewCardsCollection.map((review, index) => {
          const { reviewText, name, state, img } = review;
          return (
            <ReviewCard
              key={index}
              reviewText={reviewText}
              name={name}
              state={state}
              img={img}
            />
          );
        })}
      </div>
    </div>
  );
};

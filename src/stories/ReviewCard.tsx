import classNames from "classnames";
import Image from "next/image";
import React from "react";

interface IReviewCard {
  top?: boolean;
  reviewText?: string;
  name?: string;
  state?: string;
  customClasses?: string;
}

export const ReviewCard = ({
  top = true,
  reviewText,
  name,
  state,
  customClasses,
}: IReviewCard) => {
  return (
    <div
      className={classNames(
        "text-[#545456] mt-4 mb-3 sm:bg-white sm:max-w-lg sm:h-auto sm:p-6 flex",
        top ? "flex-col-reverse" : "flex-col",
        customClasses
      )}
    >
      <p
        className={classNames(
          "text-base sm:text-2xl mb-10 font-centaur",
          top ? "mt-4" : ""
        )}
      >
        {reviewText}
      </p>
      <div
        className={classNames(
          "flex justify-center sm:justify-start",
          top ? "justify-start items-start" : ""
        )}
      >
        <Image
          src="/images/Avatar_image.png"
          alt="Avatar"
          width={60}
          height={60}
          className="rounded-full bg-slate-500 text-slate-500 mr-3"
        />
        <div className={classNames("flex flex-col justify-center")}>
          <p className="text-sm text-[#8A1E61] tracking-widest font-normal">
            {name}
          </p>
          <p className="text-xs text-[#7B8084] tracking-widest">{state}</p>
        </div>
      </div>
    </div>
  );
};

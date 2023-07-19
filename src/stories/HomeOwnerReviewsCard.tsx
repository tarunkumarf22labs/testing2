import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IHomeOwnerReviewCard {
  description: string;
  date: string;
  id: number;
  name: string;
  image: string;
  link: string;
}
const HomeOwnerReviewsCard = ({
  description,
  date,
  id,
  name,
  image,
  link,
}: IHomeOwnerReviewCard) => {
  return (
    <div className="w-full pt-6 pb-32 pl-6 pr-6 ml-6 md:ml-0">
      <p className="text-[#545456] text-base md:text-xl font-[Centaur] mr-6">
        {description}
      </p>
      <p className="text-[#8A1E61] text-xl font-[Centaur] mt-8">
        <Link href={link}>Read More</Link>
      </p>
      <div
        className={
          "flex sm:justify-start mt-10 items-center absolute bottom-14 md:bottom-8"
        }
      >
        <Image
          src={image}
          alt="Avatar"
          width={60}
          height={60}
          className="mr-3 rounded-full bg-slate-500 text-slate-500"
        />
        <div className={"flex flex-col justify-center pl-6"}>
          <p className="text-sm text-[#8A1E61] tracking-widest font-normal">
            {name}
          </p>
          <p className="text-xs text-[#7B8084] tracking-widest">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeOwnerReviewsCard;

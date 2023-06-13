import React from "react";

interface INameTitle {
  propertyName: string;
  title: string;
}

export const NameTitle = ({ propertyName, title }: INameTitle) => {
  return (
    <div className="uppercase pb-6 md:pb-10">
      <p className="text-sm text-[#8A1E61] md:mb-5">{propertyName}</p>
      <p className="text-3xl md:text-5xl text-[#18181B]">{title}</p>
    </div>
  );
};
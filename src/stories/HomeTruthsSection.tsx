import React from "react";
import { Container } from "./Container";
import { NameTitle } from "./NameTitle";
import Image from "next/image";

export const HomeTruthsSection = ({ homeTruths }) => {
  return (
    <Container bgWhite={false}>
      <div className="flex justify-between gap-x-10">
        <div className="hidden relative md:block h-[673px] w-1/2">
          <Image
            src="/images/Amenities1.png"
            alt="amenities1"
            width={462}
            height={673}
          />
          <Image
            src="/images/Amenities2.png"
            alt="amenities2"
            width={300}
            height={200}
            className="absolute -left-[15%] top-[403px]"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <NameTitle propertyName="Deja View's" title="HOME TRUTHS" />
          <ul className="list-disc space-y-6">
            {homeTruths.map((item, index) => {
              return (
                <li
                  className="text-sm text-[#545456] ml-2 md:ml-0 md:text-base font-centaur"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

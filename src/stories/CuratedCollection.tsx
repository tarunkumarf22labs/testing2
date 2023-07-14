import React, { useState } from "react";
import { Container } from "./Container";
import TabButton from "./TabButton";
import { viewAll } from "src/data/constants";

const data = [
  {
    category: "LUXURY INDULGENCE",
  },
  {
    category: "PET FRIENDLY",
  },
  {
    category: "THE PEAKS",
  },
  {
    category: "CULTURAL HERITAGE",
  },
  {
    category: "FOOD TRAIL",
  },
  {
    category: "RANDOM",
  },
];

const CuratedCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState(data?.[0]);

  return (
    <Container>
      <div>
        <p className="uppercase text-[#8A1E61] tracking-[4.2px] text-sm font-[450]">
          LuxUNLOCK’s
        </p>
        <h1 className="text-[52px] tracking-[1.04px] font-light leading-[68px] text-[#1C1917] mt-5">
          CURATED COLLECTION
        </h1>
        <div>
          <div className="flex gap-6 mt-10">
            {(data?.length > 5 ? data.slice(0, 5) : data)?.map((el, idx) => {
              return (
                <TabButton
                  key={`${idx}`}
                  title={el?.category}
                  isSelected={selectedCategory?.category === el?.category}
                  onClick={() => setSelectedCategory(el)}
                />
              );
            })}
            {data?.length > 5 ? (
              <TabButton title={viewAll} onClick={() => {}} />
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CuratedCollection;

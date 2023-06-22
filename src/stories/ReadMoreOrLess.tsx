import React from "react";

interface IReadMore {
    readMore: Boolean;
    setReadMore:  React.Dispatch<React.SetStateAction<boolean>>;
}

const ReadMoreOrLess = ({readMore,setReadMore}:IReadMore) => {
  return (
    <div className="mt-5 ml-5 xl:max-w-7xl xl:m-auto">
      <div
        className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
        onClick={() => setReadMore(!readMore)}
      >
        <h3 className="">{!readMore ? "Read More" : "Read Less"}</h3>
      </div>
    </div>
  );
};

export default ReadMoreOrLess;

import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function App() {
  const [content, setContent] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="m-auto max-w-[1440px] mt-20 mb-20">
      <Marquee>
        {content.map((ele) => {
          return (
            <div className="w-52 h-40 mr-[5rem] relative" key={ele}>
              <Image
                src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg"
                width={208}
                height={156}
                alt="image"
                className="w-full h-full rounded-xl"
              />
              <p className="absolute top-[50%] left-[50%] -translate-y-2 -translate-x-[40%] text-center font-[Brandon Grotesque] text-xl text-white">
                HELLO {ele}
              </p>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default App;

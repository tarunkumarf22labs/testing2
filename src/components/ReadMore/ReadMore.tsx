import classNames from "classnames";
import React, { useState } from "react";

type ReadMoreTypes = {
  text: string;
  textClassName?: string;
  readMoreTextClassName?: string;
};

const ReadMore = ({
  text,
  textClassName,
  readMoreTextClassName,
}: ReadMoreTypes) => {
  const [readMore, setReadmore] = useState(false);

  return (
    <div>
      <p className={textClassName}>
        {readMore
          ? text
          : text?.length > 500
          ? text?.slice(0, 496) + "... "
          : text}
        {!readMore && text?.length > 500 && (
          <span
            onClick={() => setReadmore(true)}
            className={classNames(
              "cursor-pointer hover:underline",
              readMoreTextClassName
            )}
          >
            read more
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;

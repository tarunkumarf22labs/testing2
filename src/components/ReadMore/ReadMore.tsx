import classNames from 'classnames';
import React, { useState } from 'react';
import { readMoreText } from 'src/data/constants';

type ReadMoreTypes = {
  text: string;
  textClassName?: string;
  readMoreTextClassName?: string;
  maxChars: number;
};

const ReadMore = ({
  text,
  textClassName,
  readMoreTextClassName,
  maxChars
}: ReadMoreTypes) => {
  const [readMore, setReadmore] = useState(false);

  return (
    <div>
      <p className={textClassName}>
        {readMore
          ? text
          : text?.length > maxChars
          ? text?.slice(0, maxChars - 3) + '... '
          : text}
        {!readMore && text?.length > maxChars && (
          <span
            onClick={() => setReadmore(true)}
            className={classNames(
              'cursor-pointer hover:underline',
              readMoreTextClassName
            )}
          >
            {readMoreText}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;

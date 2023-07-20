import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import React from 'react';

export const ScrollButton = ({
  onPrevPress,
  onNextPress,
  disableNextBtn,
  disablePrevBtn
}: {
  onPrevPress: () => void;
  onNextPress: () => void;
  disableNextBtn?: boolean;
  disablePrevBtn?: boolean;
}) => {
  return (
    <div className="sm:w-24 flex gap-0 z-10">
      <button
        disabled={disablePrevBtn}
        onClick={onPrevPress}
        className="p-4 pr-2 rounded-l-full bg-[#8A1E61] text-[#FCFAED] active:ring-1 active:ring-[#8A1E61]"
      >
        <ArrowLeft color="white" size={20} />
      </button>
      <button
        disabled={disableNextBtn}
        onClick={onNextPress}
        className="p-4 pl-2 rounded-r-full bg-[#8A1E61] text-[#FCFAED] active:ring-1 active:ring-[#8A1E61]"
      >
        <ArrowRight color="white" size={20} />
      </button>
    </div>
  );
};

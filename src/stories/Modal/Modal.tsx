import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { XCircle } from '@phosphor-icons/react';

export interface IModal {
  children: JSX.Element;
  isOpen: Boolean;
  onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  title?: string | JSX.Element;
  className?: string;
  square?: boolean;
  segregated?: boolean;
  parentDivStyle: string;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  className,
  square = false,
  segregated = true,
  parentDivStyle
}: IModal) => {
  return (
    <>
      {isOpen && (
        <motion.div className={parentDivStyle} onClick={onClose}>
          <motion.div
            className={classNames(
              'm-x-6 md:m-0 md:w-1/2 bg-white transition duration-700 ease-in-out p-6 relative',
              square ? '' : 'rounded-lg',
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {segregated ? (
              <div className="flex items-center justify-between pb-5 font-bold capitalize">
                <h2>{title && title}</h2>

                <button onClick={onClose}>
                  <XMarkIcon className="w-7 h-7" />
                </button>
              </div>
            ) : (
              <button onClick={onClose} className="absolute z-20 right-9 top-9">
                <XCircle size={28} weight="fill" />
              </button>
            )}

            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;

import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { XCircle } from "@phosphor-icons/react";

export interface IModal {
  children: JSX.Element;
  isOpen: Boolean;
  onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  title?: string | JSX.Element;
  className?: string;
  square?: boolean;
  segregated?: boolean;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  className,
  square = false,
  segregated = true,
}: IModal) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overflow-y-scroll px-6 md:px-0"
          onClick={onClose}
        >
          <motion.div
            className={classNames(
              "m-x-6 md:m-0 md:w-1/2 bg-white transition duration-700 ease-in-out p-6 relative",
              square ? "" : "rounded-lg",
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {segregated ? (
              <div className="flex justify-between items-center font-bold pb-5 capitalize">
                <h2>{title && title}</h2>

                <button onClick={onClose}>
                  <XMarkIcon className="w-7 h-7" />
                </button>
              </div>
            ) : (
              <button onClick={onClose} className="absolute right-9 top-9 z-20">
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

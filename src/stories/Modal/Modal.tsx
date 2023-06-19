import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface IModal { 
    children: JSX.Element;
    isOpen: Boolean; 
    onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>; 
    title?: string | JSX.Element; 
}

const Modal = ({ children, isOpen, onClose, title }: IModal) => {
  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          onClick={onClose}
        >
          <motion.div
            className="w-1/2 bg-white rounded-lg transition duration-700 ease-in-out p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center font-bold pb-5 capitalize">
              <h2>{title && title}</h2>

              <button onClick={onClose}>
                <XMarkIcon className="w-7 h-7" />
              </button>
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;

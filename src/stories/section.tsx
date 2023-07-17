import React from 'react';
import { FC, ReactNode } from 'react';

interface SectionProps {
  className?: string;
  children?: ReactNode;
}

export const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    // <section className={sectionClassName}>{children}</section>
    <section className={`w-56 ${className}`}>{children}</section>
  );
};

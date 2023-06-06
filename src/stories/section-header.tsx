import React from 'react';
import { FC, ReactNode } from 'react';

interface SectionHeaderProps {
    className?: string;
    children?: ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ className, children }) => {
  
    return (
        // <header className={headerClassName}>{children}</header>
        <header className={`grid grid-cols-header items-center mb-2 ${className}`}>{children}</header>

    );
}
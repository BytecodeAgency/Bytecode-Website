import React from 'react';

export interface ButtonProps {
    href?: string;
    useGatsbyLink?: boolean;
    className?: string;
    rel?: string;
    type?: string;
    target?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

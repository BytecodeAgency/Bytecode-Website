import React from 'react';

export interface ButtonProps {
    href?: string;
    useGatsbyLink?: boolean;
    className?: string;
    rel?: string;
    submit?: boolean;
    target?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

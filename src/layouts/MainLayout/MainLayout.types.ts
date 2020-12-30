import React from 'react';

export default interface LayoutProps {
    children: React.ReactNode;
    padded?: boolean;
    pageSettings: {
        title: string;
        description: string;
        keywords: string;
    };
    newsLetter?: number;
}

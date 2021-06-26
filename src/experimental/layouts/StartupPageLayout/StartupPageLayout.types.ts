import React from 'react';

export default interface StartupPageLayoutProps {
    children: React.ReactNode;
    padded?: boolean;
    pageSettings: {
        title: string;
        description: string;
        keywords: string;
    };
    newsLetter?: number;
}

import React from 'react';

export default interface LayoutProps {
    children: React.ReactNode;
    pageSettings: {
        title: string;
        description: string;
        keywords: string;
        client: string;
        image: string;
    };
}

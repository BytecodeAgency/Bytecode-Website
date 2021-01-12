import React from 'react';

export interface GalleryProps {
    width?: number;
    children: React.ReactNode;
}

export interface TextAndImageProps {
    children: React.ReactNode;
    img: string;
    alt: string;
    reverse?: boolean;
    fluid?: boolean;
    small?: boolean;
    padded?: boolean;
}

export interface IntroductionProps {
    children: React.ReactNode;
}

export interface ProfilePictureProps {
    img: string;
}

export interface ResultsAndNumbersProps {
    numbers: string[];
    numberTypes: string[];
    subtitles: string[];
    title: string;
}

export interface AppStoreBlockProps {
    name: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    websiteUrl?: string;
}

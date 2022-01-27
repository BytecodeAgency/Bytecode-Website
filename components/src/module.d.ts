// Fix for ongoing issue: https://github.com/vercel/next.js/issues/29788
declare type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
};

declare module "*.ttf";
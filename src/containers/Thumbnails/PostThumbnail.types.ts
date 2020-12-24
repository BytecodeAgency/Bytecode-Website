export interface ThumbnailImgProps {
    img: string;
    alt?: string;
    big?: boolean;
}

export default interface PostThumbnailProps {
    big?: boolean;
    title: string;
    slug: string;
    category?: string;
    postImageUrl: string;
}

import React from 'react';
import {
    Subtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
} from './PostThumbnail.components';

const cutOffText = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
        const subString = `${string.substring(0, maxLength)}...`;
        return subString;
    }
    return string;
};

interface PostThumbnailProps {
    big?: boolean;
    title: string;
    slug: string;
    category?: string;
    postImageUrl: string;
}
const PostThumbnail: React.FC<PostThumbnailProps> = ({
    big,
    title,
    slug,
    category,
    postImageUrl,
}) => {
    return (
        <ThumbnailBase to={slug}>
            <ThumbnailImg big={big} img={postImageUrl} />
            <ThumbnailContent big={big}>
                <Subtitle className="subtitle">{category}</Subtitle>
                <h5>{cutOffText(title, 80)}</h5>
                <a className="thumbnail-cta caption" href={slug}>
                    Lees meer
                </a>
            </ThumbnailContent>
        </ThumbnailBase>
    );
};

export default PostThumbnail;

import React from 'react';
import {
    StyledSubtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
} from './PostThumbnail.components';
import { Caption } from '../../components/Typography';

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
                <StyledSubtitle>{category}</StyledSubtitle>
                <h5>{cutOffText(title, 80)}</h5>
                <Caption href={slug}>Lees meer</Caption>
            </ThumbnailContent>
        </ThumbnailBase>
    );
};

export default PostThumbnail;

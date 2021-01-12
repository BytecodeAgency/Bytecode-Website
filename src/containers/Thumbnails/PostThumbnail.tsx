import React from 'react';
import {
    StyledSubtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
} from './PostThumbnail.components';
import { CaptionWithLink } from '../../components/Typography/Typography';
import PostThumbnailProps from './PostThumbnail.types';

const cutOffText = (string: string, maxLength: number) => {
    if (string.length > maxLength) {
        const subString = `${string.substring(0, maxLength)}...`;
        return subString;
    }
    return string;
};

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
                <CaptionWithLink href={slug}>Lees meer</CaptionWithLink>
            </ThumbnailContent>
        </ThumbnailBase>
    );
};

export default PostThumbnail;

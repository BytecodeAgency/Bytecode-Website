import React from 'react';
import PropTypes from 'prop-types';
import {
    Subtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
} from './PostThumbnail.components';

const cutOffText = (string, maxLength) => {
    if (string.length > maxLength) {
        const subString = `${string.substring(0, maxLength)}...`;
        return subString;
    }
    return string;
};

const PostThumbnail = ({ big, title, slug, category, postImageUrl }) => {
    return (
        <ThumbnailBase big={big} to={slug}>
            <ThumbnailImg
                big={big}
                className="thumbnail-img"
                img={postImageUrl}
            />
            <ThumbnailContent big={big}>
                <Subtitle className="subtitle">{category}</Subtitle>
                <h5>{cutOffText(title, 65)}</h5>
                <a className="thumbnail-cta caption" href={slug}>
                    Lees meer
                </a>
            </ThumbnailContent>
        </ThumbnailBase>
    );
};

export default PostThumbnail;

PostThumbnail.propTypes = {
    big: PropTypes.bool,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string,
    postImageUrl: PropTypes.string.isRequired,
};

PostThumbnail.defaultProps = {
    big: false,
    category: undefined,
};

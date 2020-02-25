import React from 'react';
import PropTypes from 'prop-types';
import {
    Arrow,
    BigThumbnailImg,
    Subtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
} from './PostThumbnail.components';

const cutOffText = (string, maxLength) => {
    if (string.length > maxLength) {
        const subString = `${string.substring(0,maxLength)}...`;
        return subString;
    }
    return string;
}

const PostThumbnail = ({ big, title, slug, category, postImageUrl }) => {
    if (big) {
        return (
            <ThumbnailBase to={slug}>
                <BigThumbnailImg
                        className="thumbnail-img"
                        img={postImageUrl}
                />
                <ThumbnailContent>
                    <p className="subtitle">{category}</p>
                    <h6>{title}</h6>
                </ThumbnailContent>
            </ThumbnailBase>
        );
    }
    return (
            <ThumbnailBase to={slug}>
                <ThumbnailImg className="thumbnail-img" img={postImageUrl} />
                <ThumbnailContent>
                    <p className="subtitle">{category}</p>
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

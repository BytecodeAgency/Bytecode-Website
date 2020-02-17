import React from 'react';
import PropTypes from 'prop-types';
import { Col } from '../../lib/Grid';
import { Big } from '../../components/Typography';
import {
    Arrow,
    BigThumbnailImg,
    Subtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
} from './PostThumbnail.components';

const PostThumbnail = ({ big, title, slug, category, postImageUrl }) => {
    if (big) {
        return (
            <Col>
                <ThumbnailBase to={slug}>
                    <BigThumbnailImg
                        className="thumbnail-img"
                        img={postImageUrl}
                    />
                    <ThumbnailContent>
                        <Subtitle>{category}</Subtitle>
                        <Big>
                            <p>{title}</p>
                        </Big>
                    </ThumbnailContent>
                </ThumbnailBase>
            </Col>
        );
    }
    return (
        <Col lg={4} md={6}>
            <ThumbnailBase to={slug}>
                <ThumbnailImg className="thumbnail-img" img={postImageUrl} />
                <ThumbnailContent>
                    <Subtitle>{category}</Subtitle>
                    <h5>{title}</h5>
                    <a href={slug}>
                        <small className="thumbnail-cta">
                            Lees meer
                            <Arrow
                                src={require('../../images/icons/ui/arrow.svg')}
                                alt=">"
                            />
                        </small>
                    </a>
                </ThumbnailContent>
            </ThumbnailBase>
        </Col>
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

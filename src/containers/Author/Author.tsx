import React from 'react';
import PropTypes from 'prop-types';
import {
    AuthorBlock,
    AuthorBlockPhotoWrapper,
    AuthorBlockPhoto,
    AuthorInfo,
    Name,
    Position,
} from './Author.components';

const Author = props => {
    const { img, name, title } = props;
    const image = require(`../../images/img/authors/${img}`);
    return (
        <AuthorBlock>
            <AuthorBlockPhotoWrapper>
                <AuthorBlockPhoto src={image} />
            </AuthorBlockPhotoWrapper>
            <AuthorInfo>
                <Name>{name}</Name>
                <Position>{title}</Position>
            </AuthorInfo>
        </AuthorBlock>
    );
};

export default Author;

Author.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
};

Author.defaultProps = {
    title: '',
};

import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
    const { src, alt } = props;
    const image = require(`../../src/images/img/articles/${src}`);
    return <img src={image} alt={alt} />;
};

export default Image;

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

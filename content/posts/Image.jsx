import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Figure = styled.figure`
    width: 150% !important;
    margin: 3em;
`;

const Figcaption = styled.figcaption`
    font-size: 0.8em;
`;

const Image = props => {
    const { src, alt, title } = props;
    const image = require(`../../src/images/img/articles/${src}`);
    return (
        <Figure>
            <img src={image} alt={alt} />
            {title && <Figcaption>{title}</Figcaption>}
        </Figure>
    );

};

export default Image;

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

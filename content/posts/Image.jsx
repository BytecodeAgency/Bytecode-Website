import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Figure = styled.figure`
    width: 150% !important;
    margin: 3em;
`;

const Figcaption = styled.figcaption`
    font-size: 0.8em;
    margin: 0 1em;
    opacity: 0.8;
`;

const Image = props => {
    const { src, alt, caption } = props;
    const image = require(`../../src/images/img/articles/${src}`);
    return (
        <Figure>
            <img src={image} alt={alt} />
            {caption && <Figcaption>{caption}</Figcaption>}
        </Figure>
    );

};

export default Image;

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
};

Image.defaultProps = {
    title: '',
}

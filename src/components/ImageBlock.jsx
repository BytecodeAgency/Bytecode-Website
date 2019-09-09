import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin, colors } = theme;

const ImageBlockFigure = styled.figure`
    margin: 0;
    height: 100vh;
    img {
        height: 100vh;
        width: auto;
    }
    @media (${mediaQueryMin.xs}) {
        max-height: 75vh;
        display: block;
        position: relative;
        right: 0px;
        margin-left: 5%;
        margin-top: 4rem;
        overflow: hidden;
    }
    &:after {
        border: 0.1em ${colors.primary} solid;
        border-right: none;
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;
        margin: 3rem 0 3rem 3rem;
    }

    .content {
        transform: 10s ease; // TODO: Incorrect value?
        transition: 0.3s ease;
    }
    &:hover img {
        transform: scale(1.05);
    }

    @media (min-width: ${theme.breakpointMobileMenu}) {
        &:after {
            margin: 6rem 0 6rem 6rem;
        }
    }
`;

const ImageBlock = props => {
    const { src, alt } = props;
    return (
        <section>
            <ImageBlockFigure>
                <img className="content" src={src} alt={alt} />
            </ImageBlockFigure>
        </section>
    );
};

export default ImageBlock;

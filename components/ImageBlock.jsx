import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const ImageBlockFigure = styled.figure`
    max-height: 75vh;
    display: block;
    position: relative;
    right: 0px;
    margin-left: 5%;
    margin-top: 4rem;
    overflow: hidden;
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin: 0;
        height: 100vh;
        img {
            height: 100vh;
            width: auto;
        }
    }
    &:after {
        border: 2px ${theme.colors.primary} solid;
        border-right: none;
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: 10;
        margin: 3rem 0rem 3rem 3rem;
    }

    .content {
        transform: 10s ease;
        transition: 0.3s ease;
    }
    &:hover img {
        transform: scale(1.05);
    }


    @media (min-width: ${theme.breakpointMobileMenu}) {
        &:after {
            margin: 6rem 0rem 6rem 6rem;
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

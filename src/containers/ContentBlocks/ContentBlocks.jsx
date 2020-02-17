import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    ContentWrapper,
    ImageWrapper,
    TextAndImageBase,
    GalleryWrapper,
    IntroductionBase,
} from './ContentBlocks.components';

export const Gallery = ({ width, children }) => {
    return <GalleryWrapper width={width} >{children}</GalleryWrapper>;
};

export const TextAndImage = ({
    children,
    img,
    alt,
    reverse,
    fluid,
    padded,
}) => {
    const getImgPos = () => {
        if (reverse) {
            if (fluid) {
                return {
                    grid: '2fr 0.75fr',
                    gutter: '2em',
                    pos: '1 / 1 / 1 / 3',
                    translate: '-3vw',
                };
            }
            return {
                grid: '1fr 1fr',
                gutter: '5em',
                pos: '1 / 2 / 1 / 3',
                translate: '0',
            };
        }
        if (fluid) {
            return {
                grid: '0.75fr 2fr',
                gutter: '2em',
                pos: '1 / 3 / 1 / 5',
                translate: '3vw',
            };
        }
        return {
            grid: '1fr 1fr',
            gutter: '5em',
            pos: '1 / 3 / 1 / 4',
            translate: '0',
        };
    };

    return (
        <TextAndImageBase
            gutter={getImgPos().gutter}
            grid={getImgPos().grid}
            padded={padded}
        >
            <ImageWrapper
                reverse={reverse}
                fluid={fluid}
                translate={getImgPos().translate}
                pos={getImgPos().pos}
            >
                <img src={img} alt={alt} />
            </ImageWrapper>
            <ContentWrapper reverse={reverse}>{children}</ContentWrapper>
        </TextAndImageBase>
    );
};

export const Introduction = ({children}) => {
    return <IntroductionBase>{children}</IntroductionBase>;
}

TextAndImage.propTypes = {
    children: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    fluid: PropTypes.bool,
};

TextAndImage.defaultProps = {
    reverse: false,
    fluid: false,
};

export const ProfilePicture = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    background-image: url(${props => props.img});
    background-size: cover;
    margin-bottom: 1.66em;
`;

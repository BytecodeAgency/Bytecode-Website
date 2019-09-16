import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const container = theme.containerWidth;
const { mediaQueryMin } = theme;

const TextAndImageBase = styled.div`
    max-width: 100% !important //TODO
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${mediaQueryMin.sm}) {
        display: grid;
        grid-template: auto / ${container.sm} 1fr 1fr ${container.sm};
        grid-template-areas: 'imgLeft imgLeft imgRight imgRight';
        padding: 5vh 0;
        grid-column-gap: 3em;
    }
    @media (${mediaQueryMin.md}) {
        grid-template: auto / ${container.md} 1fr 1fr ${container.md};
    }
    @media (${mediaQueryMin.lg}) {
        grid-template: auto / ${container.lg} 1fr 1fr ${container.lg};
        grid-column-gap: 6em;
    }
    @media (${mediaQueryMin.xl}) {
        grid-template: auto / ${container.xl} 1fr 1fr ${container.xl};
    }
`;

const ImageWrapper = styled.figure`
    grid-area: ${props => props.pos};

    margin: 5em 0;
    @media (${mediaQueryMin.sm}) {
        margin: 1em 0;
        transform: translateX(${props => props.translate});
    }
`;

const reversed = '1 / 3 / 1 / 4';
const normal = '1 / 2 / 1 / 3';

const ContentWrapper = styled.div`
    margin: 2em 1em;
    max-width: 100vw;
    @media (${mediaQueryMin.xs}) {
        margin: 3em 1em;
    }
    @media (${mediaQueryMin.sm}) {
        margin: 0;
        grid-area: ${props => (props.reverse ? reversed : normal)};
    }
`;

const TextAndImage = props => {
    const { children, img, alt, reverse, fluid } = props;

    const getImgPos = () => {
        if (reverse) {
            if (fluid) {
                return {
                    pos: '1 / 1 / 1 / 3',
                    translate: '-3vw',
                };
            }
            return {
                pos: '1 / 2 / 1 / 3',
                translate: '0',
            };
        }
        if (fluid) {
            return {
                pos: '1 / 3 / 1 / 5',
                translate: '3vw',
            };
        }
        return {
            pos: '1 / 3 / 1 / 4',
            translate: '0',
        };
    };

    return (
        <TextAndImageBase>
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

export default TextAndImage;

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

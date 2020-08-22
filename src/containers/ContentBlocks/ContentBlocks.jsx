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
import theme from '../../styles/theme';
import TextBlock from '../TextBlock/TextBlock';

const { mediaQueryMin } = theme;

export const Gallery = ({ width, children }) => {
    return <GalleryWrapper width={width}>{children}</GalleryWrapper>;
};

export const TextAndImage = ({
    children,
    img,
    alt,
    small,
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
            fluid={fluid}
            gutter={getImgPos().gutter}
            grid={getImgPos().grid}
            padded={padded}
        >
            <ImageWrapper
                reverse={reverse}
                fluid={fluid}
                translate={getImgPos().translate}
                pos={getImgPos().pos}
                small={small}
            >
                <img src={img} alt={alt} />
            </ImageWrapper>
            <ContentWrapper fluid={fluid} reverse={reverse}>
                {children}
            </ContentWrapper>
        </TextAndImageBase>
    );
};

export const Section = styled.section`
    margin: 1em 0;
    @media (${mediaQueryMin.md}) {
        margin: 5em 0;
    }
`;

export const Introduction = ({ children }) => {
    return <IntroductionBase>{children}</IntroductionBase>;
};

TextAndImage.propTypes = {
    children: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    fluid: PropTypes.bool,
    small: PropTypes.bool,
    padded: PropTypes.bool,
};

TextAndImage.defaultProps = {
    reverse: false,
    fluid: false,
    small: false,
    padded: false,
};

Gallery.propTypes = {
    width: PropTypes.number,
    children: PropTypes.node.isRequired,
};

Gallery.defaultProps = {
    width: 100,
};

Introduction.propTypes = {
    children: PropTypes.node.isRequired,
};

export const ProfilePicture = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    background-image: url(${props => props.img});
    background-size: cover;
    margin-bottom: 1.66em;
`;

const ResultsAndNumbersContainer = styled.div`
    margin: 3em;
`;
const TextBlockContainer = styled.div`
    padding: 1em;

    margin: 0;
    @media (${mediaQueryMin.sm}) {
        margin: 3em;
        width: 30em;
    }
`;
const NumbersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 30px;
    justify-content: center;
    z-index: 1;
    position: relative;
    height: 25em;
    @media (${mediaQueryMin.sm}) {
        height: 20em;
        grid-template-columns: 1fr 1fr 1fr;
    }

    &:before {
        position: absolute;
        top: 0;
        left: 2.5%;
        background-color: #262626;
        width: 95%;
        content: '';
        height: 100%;
        z-index: -1;
        opacity: 0.6;
        @media (${mediaQueryMin.sm}) {
            width: 70%;
            left: 15%;
        }
    }
`;
const SingleNumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`;
const NumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    margin: 0 auto;
`;
const Number = styled.h1`
    font-size: 3em;
    margin: 0;
    align-self: flex-end;

    @media (${mediaQueryMin.sm}) {
        font-size: 5em;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 6em;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 10em;
    }
`;
const NumberType = styled.h1`
    font-size: 1.5em;
    margin-bottom: 0.1em;
    align-self: flex-end;
    @media (${mediaQueryMin.sm}) {
        font-size: 2.5em;
    }
    @media (${mediaQueryMin.md}) {
        font-size: 3.5em;
    }
    @media (${mediaQueryMin.lg}) {
        font-size: 5em;
    }
`;
const Subtitle = styled.div`
    max-width: 15em;
`;

// numbers is an array with the 3 number results, subtitles is an array of the subtitles that belong to the numbers
export const ResultsAndNumbers = ({
    numbers,
    numberTypes,
    title,
    subtitles,
}) => {
    return (
        <ResultsAndNumbersContainer>
            <TextBlockContainer>
                <TextBlock title={title} subtitle="Resultaten" />
            </TextBlockContainer>
            <NumbersContainer>
                {numbers.map((number, index) => (
                    <SingleNumberContainer>
                        <NumberContainer>
                            <Number>{number}</Number>
                            <NumberType>{numberTypes[index]}</NumberType>
                        </NumberContainer>
                        <Subtitle>
                            <p>{subtitles[index]}</p>
                        </Subtitle>
                    </SingleNumberContainer>
                ))}
            </NumbersContainer>
        </ResultsAndNumbersContainer>
    );
};

ResultsAndNumbers.propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
};

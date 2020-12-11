import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import {
    ContentWrapper,
    ImageWrapper,
    TextAndImageBase,
    GalleryWrapper,
    IntroductionBase,
} from './ContentBlocks.components';
import theme from '../../styles/theme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;

type OwnGalleryProps = {
    width?: number,
    children: React.ReactNode,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'GalleryProps' circularly references it... Remove this comment to see the full error message
type GalleryProps = OwnGalleryProps & typeof Gallery.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Gallery' implicitly has type 'any' because it doe... Remove this comment to see the full error message
export const Gallery = ({ width, children }: GalleryProps) => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <GalleryWrapper width={width}>{children}</GalleryWrapper>;
};

type OwnTextAndImageProps = {
    children: React.ReactNode,
    img: string,
    alt: string,
    reverse?: boolean,
    fluid?: boolean,
    small?: boolean,
    padded?: boolean,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'TextAndImageProps' circularly referenc... Remove this comment to see the full error message
type TextAndImageProps = OwnTextAndImageProps &
    typeof TextAndImage.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'TextAndImage' implicitly has type 'any' because i... Remove this comment to see the full error message
export const TextAndImage = ({
    children,
    img,
    alt,
    small,
    reverse,
    fluid,
    padded,
}: TextAndImageProps) => {
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextAndImageBase
            fluid={fluid}
            gutter={getImgPos().gutter}
            grid={getImgPos().grid}
            padded={padded}
        >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ImageWrapper
                reverse={reverse}
                fluid={fluid}
                translate={getImgPos().translate}
                pos={getImgPos().pos}
                small={small}
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <img src={img} alt={alt} />
            </ImageWrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

type IntroductionProps = {
    children: React.ReactNode,
};

export const Introduction = ({ children }: IntroductionProps) => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <IntroductionBase>{children}</IntroductionBase>;
};

TextAndImage.defaultProps = {
    reverse: false,
    fluid: false,
    small: false,
    padded: false,
};

Gallery.defaultProps = {
    width: 100,
};

export const ProfilePicture = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    background-image: url(${(props: any) => props.img});
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

type ResultsAndNumbersProps = {
    numbers: string[],
    numberTypes: string[],
    subtitles: string[],
    title: string,
};

// numbers is an array with the 3 number results, subtitles is an array of the subtitles that belong to the numbers
export const ResultsAndNumbers = ({
    numbers,
    numberTypes,
    title,
    subtitles,
}: ResultsAndNumbersProps) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ResultsAndNumbersContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextBlockContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TextBlock title={title} subtitle="Resultaten" />
            </TextBlockContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <NumbersContainer>
                {numbers.map((number, index) => (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <SingleNumberContainer>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NumberContainer>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <Number>{number}</Number>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <NumberType>{numberTypes[index]}</NumberType>
                        </NumberContainer>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Subtitle>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <p>{subtitles[index]}</p>
                        </Subtitle>
                    </SingleNumberContainer>
                ))}
            </NumbersContainer>
        </ResultsAndNumbersContainer>
    );
};

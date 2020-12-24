import React from 'react';
import styled from 'styled-components';
import {
    ContentWrapper,
    ImageWrapper,
    TextAndImageBase,
    GalleryWrapper,
    IntroductionBase,
    ResultsAndNumbersContainer,
    TextBlockContainer,
    Number,
    NumberContainer,
    NumbersContainer,
    NumberType,
    SingleNumberContainer,
    Subtitles,
} from './ContentBlocks.components';
import theme from '../../styles/theme';
import TextBlock from '../TextBlock/TextBlock';
import {
    GalleryProps,
    ResultsAndNumbersProps,
    ProfilePictureProps,
    IntroductionProps,
    TextAndImageProps,
    AppStoreBlockProps,
} from './ContentBlocks.types';
import { Subtitle } from '../../components/Typography/Typography';

const { mediaQueryMin } = theme;

export const Gallery: React.FC<GalleryProps> = ({ width = 100, children }) => {
    return <GalleryWrapper width={width}>{children}</GalleryWrapper>;
};

export const TextAndImage: React.FC<TextAndImageProps> = ({
    children,
    img,
    alt,
    small = false,
    reverse = false,
    fluid = false,
    padded = false,
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
                transform={getImgPos().translate}
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

export const Introduction: React.FC<IntroductionProps> = ({ children }) => {
    return <IntroductionBase>{children}</IntroductionBase>;
};

export const ProfilePicture = styled.div<ProfilePictureProps>`
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    background-image: url(${(props) => props.img});
    background-size: cover;
    margin-bottom: 1.66em;
`;

// numbers is an array with the 3 number results, subtitles is an array of the subtitles that belong to the numbers
export const ResultsAndNumbers: React.FC<ResultsAndNumbersProps> = ({
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
                        <Subtitles>
                            <p>{subtitles[index]}</p>
                        </Subtitles>
                    </SingleNumberContainer>
                ))}
            </NumbersContainer>
        </ResultsAndNumbersContainer>
    );
};

export const AppStoreBlock: React.FC<AppStoreBlockProps> = ({
    name,
    appStoreUrl,
    playStoreUrl,
    websiteUrl,
}) => (
    <Introduction>
        <Subtitle>Download de app</Subtitle>
        <h3>
            {name} is te downloaden via de{' '}
            {appStoreUrl && <a href={appStoreUrl}>App Store</a>}
            {appStoreUrl && playStoreUrl && ' en de '}
            {playStoreUrl && <a href={playStoreUrl}>Play store</a>}
        </h3>
        {websiteUrl && (
            <p>
                Kijk voor meer informatie ook eens op de{' '}
                <a href={websiteUrl}>website</a>.{' '}
            </p>
        )}
    </Introduction>
);

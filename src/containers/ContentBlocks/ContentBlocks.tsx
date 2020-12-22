import React from 'react';
import styled from 'styled-components';
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

interface GalleryProps {
    width?: number;
    children: React.ReactNode;
}
export const Gallery: React.FC<GalleryProps> = ({ width = 100, children }) => {
    return <GalleryWrapper width={width}>{children}</GalleryWrapper>;
};

interface TextAndImageProps {
    children: React.ReactNode;
    img: string;
    alt: string;
    reverse?: boolean;
    fluid?: boolean;
    small?: boolean;
    padded?: boolean;
}

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

interface IntroductionProps {
    children: React.ReactNode;
}

export const Introduction: React.FC<IntroductionProps> = ({ children }) => {
    return <IntroductionBase>{children}</IntroductionBase>;
};

interface ProfilePictureProps {
    img: string;
}
export const ProfilePicture =
    styled.div <
    ProfilePictureProps >
    `
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    background-image: url(${(props) => props.img});
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
    display: flex;
    margin: 30px;
    justify-content: space-around;
    z-index: 1;
    position: relative;
    height: 25em;
    flex-direction: column;
    @media (${mediaQueryMin.sm}) {
        height: 20em;
        flex-direction: row;
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
const NumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    margin: 0 auto;
`;
const SingleNumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
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
    align-self: center;
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

interface ResultsAndNumbersProps {
    numbers: string[];
    numberTypes: string[];
    subtitles: string[];
    title: string;
}

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
                        <Subtitle>
                            <p>{subtitles[index]}</p>
                        </Subtitle>
                    </SingleNumberContainer>
                ))}
            </NumbersContainer>
        </ResultsAndNumbersContainer>
    );
};
interface AppStoreBlockProps {
    name: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    websiteUrl?: string;
}
export const AppStoreBlock: React.FC<AppStoreBlockProps> = ({
    name,
    appStoreUrl,
    playStoreUrl,
    websiteUrl,
}) => (
    <Introduction>
        <p className="subtitle">Download de app</p>
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

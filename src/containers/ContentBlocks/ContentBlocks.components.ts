import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin, containerWidth, colors } = theme;
const reversed = '1 / 3 / 1 / 4';
const normal = '1 / 2 / 1 / 3';
const introPadding = '5em';

export const TextAndImageBase = styled.div<{
    padded?: boolean;
    gutter?: string;
    grid?: string;
    fluid?: boolean;
}>`
    max-width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${mediaQueryMin.xs}) {
        display: grid;
        grid-template: auto / ${containerWidth.sm} 1fr 1fr ${containerWidth.sm};
        grid-template-areas: 'imgLeft imgLeft imgRight imgRight';
        padding: ${(props) => (props.padded ? '2em' : 0)} 0;
        grid-column-gap: ${(props) => props.gutter};
    }
    @media (${mediaQueryMin.md}) {
        grid-template: auto / ${containerWidth.sm} ${(props) => props.grid} ${containerWidth.sm};
    }
    @media (${mediaQueryMin.lg}) {
        grid-template: auto / ${(props) =>
                props.fluid ? containerWidth.md : containerWidth.xl} ${(
                props
            ) => props.grid} ${containerWidth.md};
    }
`;

export const ImageWrapper = styled.figure<{
    pos?: string;
    small?: boolean;
    transform?: string;
}>`
    grid-area: ${(props) => props.pos};
    width: ${(props) => (props.small ? '70%' : '100%')};
    margin: 1em 1em;
    @media (${mediaQueryMin.sm}) {
        margin: 5em 0;
    }
    @media (${mediaQueryMin.sm}) {
        margin: 1em 0;
        transform: translateX(${(props) => props.transform});
    }
`;

export const ContentWrapper = styled.div<{
    reverse?: boolean;
    fluid?: boolean;
}>`
    margin: 2em 1em;
    max-width: 100vw;
    @media (${mediaQueryMin.xs}) {
        margin: 3em 1em;
        grid-area: ${(props) => (props.reverse ? reversed : normal)};
    }
    @media (${mediaQueryMin.sm}) {
        margin: 0;
    }
    @media (${mediaQueryMin.lg}) {
        width: ${(props) => (props.fluid ? '100%' : '85%')};
    }
`;

export const GalleryWrapper = styled.section<{ width?: number }>`
    display: flex;
    & > * {
        width: ${(props) => props.width || 100}%;
        padding: 0.5em;
    }
`;

export const IntroductionBase = styled.div`
    padding: 10vh ${containerWidth.sm};
    @media (${mediaQueryMin.sm}) {
        width: 75%;
    }
    @media (${mediaQueryMin.md}) {
        padding: ${introPadding} ${containerWidth.md};
        width: 70%;
    }
    @media (${mediaQueryMin.lg}) {
        padding: ${introPadding} ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xl}) {
        padding: ${introPadding} ${containerWidth.xl};
    }
`;

export const ResultsAndNumbersContainer = styled.div`
    margin: 3em;
`;
export const TextBlockContainer = styled.div`
    padding: 1em;

    margin: 0;
    @media (${mediaQueryMin.sm}) {
        margin: 3em;
        width: 30em;
    }
`;

export const NumbersContainer = styled.div`
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
        background-color: ${colors.mediumgray};
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
export const NumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    margin: 0 auto;
`;
export const SingleNumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`;
export const LargeNumber = styled.h1`
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
export const NumberType = styled.h1`
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
export const Subtitles = styled.div`
    max-width: 15em;
`;

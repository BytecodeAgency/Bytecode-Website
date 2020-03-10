import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin, containerWidth } = theme;

export const TextAndImageBase = styled.div`
    max-width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${mediaQueryMin.xs}) {
        display: grid;
        grid-template: auto / ${containerWidth.sm} 1fr 1fr ${containerWidth.sm};
        grid-template-areas: 'imgLeft imgLeft imgRight imgRight';
        padding: ${props => (props.padded ? '2em' : 0)} 0;
        grid-column-gap: ${props => props.gutter};
    }
    @media (${mediaQueryMin.md}) {
        grid-template: auto / ${containerWidth.sm} ${props => props.grid} ${containerWidth.sm};
    }
    @media (${mediaQueryMin.lg}) {
        grid-template: auto / ${props =>
                props.fluid ? containerWidth.md : containerWidth.xl} ${props =>
                props.grid} ${containerWidth.md};
    }
`;

export const ImageWrapper = styled.figure`
    grid-area: ${props => props.pos};

    margin: 1em 1em;
    @media (${mediaQueryMin.sm}) {
        margin: 5em 0;
    }
    @media (${mediaQueryMin.sm}) {
        margin: 1em 0;
        transform: translateX(${props => props.translate});
    }
`;

const reversed = '1 / 3 / 1 / 4';
const normal = '1 / 2 / 1 / 3';

export const ContentWrapper = styled.div`
    margin: 2em 1em;
    max-width: 100vw;
    @media (${mediaQueryMin.xs}) {
        margin: 3em 1em;
        grid-area: ${props => (props.reverse ? reversed : normal)};
    }
    @media (${mediaQueryMin.sm}) {
        margin: 0;
    }
    @media (${mediaQueryMin.lg}) {
        width: ${props => (props.fluid ? '100%' : '85%')};
    }
`;

export const GalleryWrapper = styled.section`
    display: flex;
    & > * {
        width: ${props => props.width || 100}%;
        padding: 0.5em;
    }
`;

const introPadding = '5em';

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

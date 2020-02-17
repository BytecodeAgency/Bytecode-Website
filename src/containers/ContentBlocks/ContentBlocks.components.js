import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin, containerWidth } = theme;

export const TextAndImageBase = styled.div`
    max-width: 100% !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${mediaQueryMin.sm}) {
        display: grid;
        grid-template: auto / ${containerWidth.sm} ${props => props.grid} ${
    containerWidth.sm
};
        grid-template-areas: 'imgLeft imgLeft imgRight imgRight';
        padding: ${props => (props.padded ? '2em' : 0)} 0;
        grid-column-gap: ${props => props.gutter};
    }
    /* @media (${mediaQueryMin.md}) {
        grid-template: auto / ${containerWidth.md} 1fr 1fr ${containerWidth.md};
    } */
    /* @media (${mediaQueryMin.lg}) {
        grid-template: auto / ${containerWidth.lg} 1fr 1fr ${containerWidth.lg};
        grid-column-gap: 5vw;
    } */
    @media (${mediaQueryMin.xl}) {
        grid-template: auto / ${containerWidth.xl} 1fr 1fr ${containerWidth.xl};
    }
`;

export const ImageWrapper = styled.figure`
    grid-area: ${props => props.pos};

    margin: 5em 0;
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
    }
    @media (${mediaQueryMin.sm}) {
        margin: 0;
        grid-area: ${props => (props.reverse ? reversed : normal)};
    }
`;

export const GalleryWrapper = styled.section`
    & > * {
        width: ${props => props.width || 100}%;
        padding: 1em;
    }
`;

const introPadding = '20vh';

export const IntroductionBase = styled.div`
    padding: ${introPadding} ${containerWidth.xs};
    @media (${mediaQueryMin.sm}) {
        padding: ${introPadding} ${containerWidth.sm};
        width: 75%;
    }
    @media (${mediaQueryMin.md}) {
        padding: ${introPadding} ${containerWidth.md};
        width: 75%;
    }
    @media (${mediaQueryMin.lg}) {
        padding: ${introPadding} ${containerWidth.lg};

    }
    @media (${mediaQueryMin.xl}) {
        padding: ${introPadding} ${containerWidth.xl};
    }
`;

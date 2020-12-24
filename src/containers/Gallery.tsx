import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;

const Gallery = styled.section<{
    padded?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: ${(props) => (props.padded ? '10vh' : 0)} 0;
    & > * {
        width: 100%;
        flex-basis: 100%;
        padding: 0.5em;
    }
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
        align-items: center;
        & > * {
            width: ${(props) => `${props.xs}%` || 'inherit'};
            flex-basis: ${(props) => `${props.xs}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.sm}) {
        padding: ${(props) => (props.padded ? '20vh' : 0)} 0;
        & > * {
            padding: ${(props) => (props.padded ? '1.33em' : '0.5em')};
            width: ${(props) => `${props.sm}%` || 'inherit'};
            flex-basis: ${(props) => `${props.sm}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.md}) {
        & > * {
            width: ${(props) => `${props.md}%` || 'inherit'};
            flex-basis: ${(props) => `${props.md}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.lg}) {
        & > * {
            width: ${(props) => `${props.lg}%` || 'inherit'};
            flex-basis: ${(props) => `${props.lg}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.xxl}) {
        & > * {
            width: ${(props) => `${props.lg}%` || 'inherit'};
            flex-basis: ${(props) => `${props.lg}%` || 'inherit'};
            padding: 0.5em;
            &:first-child {
                padding-right: 3em;
            }
        }
    }
`;

export default Gallery;

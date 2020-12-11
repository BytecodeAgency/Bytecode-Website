// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;

const Gallery = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: ${(props: any) => (props.padded ? '10vh' : 0)} 0;
    & > * {
        width: 100%;
        flex-basis: 100%;
        padding: 0.5em;
    }
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
        align-items: center;
        & > * {
            width: ${(props: any) => `${props.xs}%` || 'inherit'};
            flex-basis: ${(props: any) => `${props.xs}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.sm}) {
        padding: ${(props: any) => (props.padded ? '20vh' : 0)} 0;
        & > * {
            padding: ${(props: any) => (props.padded ? '1.33em' : '0.5em')};
            width: ${(props: any) => `${props.sm}%` || 'inherit'};
            flex-basis: ${(props: any) => `${props.sm}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.md}) {
        & > * {
            width: ${(props: any) => `${props.md}%` || 'inherit'};
            flex-basis: ${(props: any) => `${props.md}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.lg}) {
        & > * {
            width: ${(props: any) => `${props.lg}%` || 'inherit'};
            flex-basis: ${(props: any) => `${props.lg}%` || 'inherit'};
        }
    }
    @media (${mediaQueryMin.xxl}) {
        & > * {
            width: ${(props: any) => `${props.lg}%` || 'inherit'};
            flex-basis: width: ${(props: any) => `${props.lg}%` || 'inherit'};
            padding: 0.5em;
            &:first-child {
                padding-right: 3em;
            }
        }
    }
`;

export default Gallery;

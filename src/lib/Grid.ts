// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
} from 'react-grid-system';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;
const container = theme.containerWidth;

// TODO: Why is everything so !important?

export const Container = styled(ContainerBase)`
    max-width: unset !important;
    margin: 1em ${(props: any) => (props.fluid ? '0' : container.sm)} !important;
    padding-left: 0 !important;
    padding-right: 0 !important;

    @media (${mediaQueryMin.md}) {
        margin: 2em ${(props: any) => (props.fluid ? '0' : container.md)} !important;
    }

    @media (${mediaQueryMin.lg}) {
        margin: 2.5vw ${(props: any) => (props.fluid ? '0' : container.lg)} !important;
    }

    @media (${mediaQueryMin.xl}) {
        margin: 4vw ${(props: any) => (props.fluid ? '0' : container.xl)} !important;
    }
`;

export const Row = styled(RowBase)`
    margin-left: 0 !important;
    margin-right: 0 !important;
`;

export const Col = styled(ColBase)`
    padding-left: 0 !important;
    padding-right: 0 !important;
`;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;

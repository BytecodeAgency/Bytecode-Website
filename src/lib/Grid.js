import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
    setConfiguration,
} from 'react-grid-system';
import theme from '../styles/theme';

const breakpoints = theme.mediaQuery;
const container = theme.containerWidth;

export const Container = styled(ContainerBase)`
    max-width: unset !important;
    margin: 1em ${props => (props.fluid ? '0' : container.sm)} !important;
    padding-left: 0 !important;
    padding-right: 0 !important;

    @media ${breakpoints.md} {
        margin: 2em ${props => (props.fluid ? '0' : container.md)} !important;
    }

    @media ${breakpoints.lg} {
        margin: 2.5vw ${props => (props.fluid ? '0' : container.lg)} !important;
    }

    @media ${breakpoints.xl} {
        margin: 4vw ${props => (props.fluid ? '0' : container.xl)} !important;
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

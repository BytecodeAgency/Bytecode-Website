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
    margin: 3em ${container.sm} !important;

    @media ${breakpoints.md} {
        margin: 2em ${container.md} !important;
    }

    @media ${breakpoints.lg} {
        margin: 2.5vw ${container.lg} !important;
    }

    @media ${breakpoints.xl} {
        margin: 4vw ${container.xl} !important;
    }
`;

export const Row = styled(RowBase)``;

export const Col = styled(ColBase)``;

export const ContainerFluid = styled(Container)`
    margin: 0 !important !important;
`;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;

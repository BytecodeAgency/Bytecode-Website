import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
    setConfiguration,
} from 'react-grid-system';
import theme from '../styles/theme';

setConfiguration({});

export const Container = styled(ContainerBase)`
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin: 4em 0 !important;
        margin: 10rem 0;
        /* max-width: 1400px !important; */
    }
    @media (min-width: ${theme.breakpoints[0]}px) {
        margin: 10rem 0;
        /* max-width: 1400px !important; */
        align-self: center;
    }
`;

export const Row = styled(RowBase)`
    /* CSS goes here */
`;

export const Col = styled(ColBase)``;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;

import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
} from 'react-grid-system';
import theme from '../styles/theme';

export const Container = styled(ContainerBase)`
    margin: 0 2% !important;
    max-width: none !important;
    @media (min-width: ${theme.breakpoints[0]}) {
        margin: 0 20% !important;
        max-width: 1400px !important;
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

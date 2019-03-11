import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
    setConfiguration,
} from 'react-grid-system';
import theme from '../styles/theme';

export const Container = styled(ContainerBase)`
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin: 4em 0 !important;
        margin: 10rem 0;
    }
    @media (min-width: ${theme.breakpoints[0]}px) {
        margin: 5rem 0;
        align-self: center;
    }
`;

export const Row = styled(RowBase)``;

export const Col = styled(ColBase)``;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;

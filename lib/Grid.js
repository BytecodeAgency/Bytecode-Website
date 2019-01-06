import styled from 'styled-components';
import {
    Container as ContainerBase,
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
} from 'react-grid-system';
import theme from '../styles/theme';

export const Container = styled(ContainerBase)`
    margin: 0 10% !important;
    max-width: none !important;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding: 0 !important;
    }
`;

export const Row = styled(RowBase)`
    @media (max-width: ${theme.breakpoints[2]}px) {
        padding-bottom: 3rem;
    }
`;

export const Col = styled(ColBase)``;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;
